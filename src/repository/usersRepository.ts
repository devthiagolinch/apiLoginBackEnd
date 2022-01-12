import {User} from "../model/user"

interface IUsersRepositoryDTO {
    name: string;
    password: string; 
    email: string;
    avatarUrl: string;  
}

class UsersRepository {
    private users: User[];

    constructor() {
        this.users = [];
    }

    create({name, password, email, avatarUrl}: IUsersRepositoryDTO): void {
        const user = new User();

        Object.assign(user, {
            name,
            password,
            email,
            avatarUrl,
            created_at: new Date()
        });

        this.users.push(user)
    };

    list(){
        return this.users;
    };

    findByEmail(email: string): User | undefined {
        const user = this.users.find(user => user.email === email)
        return user
    };
}

export { UsersRepository }