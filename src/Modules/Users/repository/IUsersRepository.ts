import { User } from "../entities/user";

interface IUsersRepositoryDTO {
    id?: string;
    name: string;
    password: string; 
    email: string;
    avatar?: string;  
}


interface IUsersRepository {
    create({name, email, avatar, password, id}: IUsersRepositoryDTO): Promise<void>;
    list(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
}

export { IUsersRepository, IUsersRepositoryDTO }