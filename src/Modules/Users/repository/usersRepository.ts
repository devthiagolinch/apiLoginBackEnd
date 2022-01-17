import {User} from "../model/user"
import { IUsersRepository, IUsersRepositoryDTO } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
    private users: User[];

    private static INSTANCE: UsersRepository;

    private constructor() {
        this.users = [];
    }
    findById(id: string): User {
        const user = this.users.find(user => user.id === id)
        return user
    }

    public static getInstance(): UsersRepository {
        if(!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE
    }

    create({ name, email, avatarUrl, password }: IUsersRepositoryDTO): void {
        const user = new User();

        Object.assign(user, {
            name,
            password,
            email,
            avatarUrl,
            created_at: new Date()
        });
    
        this.users.push(user)
    }
    list(): User[] {
        return this.users;
    }
    findByEmail(email:string): User {
        const userEmail = this.users.find(user => user.email === email)
        return userEmail
    }

}

export { UsersRepository }