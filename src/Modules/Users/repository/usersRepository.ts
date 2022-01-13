import {User} from "../model/user"
import { IUsersRepository, IUsersRepositoryDTO } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
    private users: User[];

    constructor() {
        this.users = [];
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