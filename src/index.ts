import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controllers/UserController';
import { AppDataSource } from './ormconfig';

const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Database connection established');

        const app = createExpressServer({
            controllers: [UserController],
        });

        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error('Error during startup:', error);
        process.exit(1);
    }
};

startServer();
