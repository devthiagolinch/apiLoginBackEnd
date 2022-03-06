import { User } from "../entities/user";

interface IUsersRepositoryDTO {
    id?: string;
    name: string;
    password: string; 
    email: string;
    avatar?: string;
    isAdmin?: Boolean;
}


interface IUsersRepository {
    create({name, email, avatar, password, id}: IUsersRepositoryDTO): Promise<void>;
    delete(id: string): Promise<void>;
    list(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
}

export { IUsersRepository, IUsersRepositoryDTO }