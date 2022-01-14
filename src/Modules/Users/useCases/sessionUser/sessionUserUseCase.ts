import { User } from "../../model/user";
import { IUsersRepository } from "../../repository/IUsersRepository";

class SessionUserUseCase {
    constructor( private userRepository: IUsersRepository) {}

    execute(email: string): User {
        const user = this.userRepository.findByEmail(email)

        if(!user) {
            throw new Error("User not found!");
        }
        
        return user;
    }
}

export { SessionUserUseCase }