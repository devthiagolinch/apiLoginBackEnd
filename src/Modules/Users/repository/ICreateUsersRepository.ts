import { User } from "../model/user";

interface IUsersRepositoryDTO {
    name: string;
    password: string; 
    email: string;
    avatarUrl: string;  
}


interface ICreateUsersRepository {
    findByEmail(email: string): User;
    create({name, email, avatarUrl, password}: IUsersRepositoryDTO): void;
    list(): User[];
}

export { ICreateUsersRepository, IUsersRepositoryDTO }