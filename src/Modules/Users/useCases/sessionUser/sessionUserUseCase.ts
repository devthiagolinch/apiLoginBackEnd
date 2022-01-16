import { User } from "../../model/user";
import { UsersRepository } from "../../repository/usersRepository";

class SessionUserUseCase {
    constructor( private userRepository: UsersRepository) {}

    execute(email: string): User {
        const user = this.userRepository.findByEmail(email)

        if(!user) {
            throw new Error("User not found!");
        }
        
        return user;
    }
}

export { SessionUserUseCase }