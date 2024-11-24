import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import { User } from "./entities/User";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "lesson13",
    synchronize: false,
    logging: true,
    entities: [User],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
});
