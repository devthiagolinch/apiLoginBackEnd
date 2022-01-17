import { User } from "../model/user";

interface IUsersRepositoryDTO {
    name: string;
    password: string; 
    email: string;
    avatarUrl: string;  
}


interface IUsersRepository {
    create({name, email, avatarUrl, password}: IUsersRepositoryDTO): void;
    list(): User[];
    findByEmail(email: string): User;
    findById(id: string): User;
}

export { IUsersRepository, IUsersRepositoryDTO }