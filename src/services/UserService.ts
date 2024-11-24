import { AppDataSource } from '../ormconfig';
import { User } from '../entities/User';

export class UserService {
    private userRepository = AppDataSource.getRepository(User);

    async findAll(): Promise<User[]> {
        return await this.userRepository.find({
            order: {
                created_at: 'DESC'
            }
        });
    }

    async findOne(id: string): Promise<User | null> {
        return await this.userRepository.findOneBy({ id });
    }

    async create(userData: Partial<User>): Promise<User> {
        const user = this.userRepository.create(userData);
        return await this.userRepository.save(user);
    }

    async update(id: string, userData: Partial<User>): Promise<User | null> {
        await this.userRepository.update(id, userData);
        return await this.findOne(id);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}
