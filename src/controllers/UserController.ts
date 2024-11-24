import { Get, Param, Post, Body, JsonController, Patch, Delete } from 'routing-controllers';
import { ValidateArgs } from '../decorators/validator';
import { UserService } from '../services/UserService';
import { User } from '../entities/User';

@JsonController()
export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    @Get('/')
    getAuthor() {
        return { author: "Your Name" };
    }

    @Get('/users')
    async getAll() {
        return await this.userService.findAll();
    }

    @Get('/users/:id')
    async getOne(@Param('id') id: string) {
        const user = await this.userService.findOne(id);
        if (!user) {
            return { message: `User with ID ${id} not found` };
        }
        return user;
    }

    @Post('/users')
    @ValidateArgs('create')
    async create(@Body() userData: Partial<User>) {
        try {
            const user = await this.userService.create(userData);
            return { message: 'User created', user };
        } catch (error) {
            return { message: 'Error creating user', error: (error as Error).message };
        }
    }

    @Patch('/users/:id')
    @ValidateArgs('update')
    async update(@Param('id') id: string, @Body() userData: Partial<User>) {
        try {
            const user = await this.userService.update(id, userData);
            if (!user) {
                return { message: `User with ID ${id} not found` };
            }
            return { message: 'User updated', user };
        } catch (error) {
            return { message: 'Error updating user', error: (error as Error).message };
        }
    }

    @Delete('/users/:id')
    async delete(@Param('id') id: string) {
        try {
            const user = await this.userService.findOne(id);
            if (!user) {
                return { message: `User with ID ${id} not found` };
            }
            await this.userService.delete(id);
            return { message: 'User deleted' };
        } catch (error) {
            return { message: 'Error deleting user', error: (error as Error).message };
        }
    }
}
