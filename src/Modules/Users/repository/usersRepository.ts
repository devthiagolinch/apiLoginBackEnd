import { getRepository, Repository } from "typeorm";

import {User} from "../entities/user"
import { IUsersRepository, IUsersRepositoryDTO } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({id})
        return user;
    }
    async create({ name, email, avatar, password, id, isAdmin }: IUsersRepositoryDTO): Promise<void> {
        const user = this.repository.create({
            name,
            password,
            email,
            avatar,
            id,
            isAdmin,
            created_at: new Date()
        });
    
        await this.repository.save(user)
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete({id})
    }
    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }
    async findByEmail(email:string): Promise<User> {
        const user = await this.repository.findOne({email})
        return user;
    }

}

export { UsersRepository }