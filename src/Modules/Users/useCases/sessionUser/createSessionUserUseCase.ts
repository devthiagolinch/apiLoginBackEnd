import { User } from "../../model/user";
import { UsersRepository } from "../../repository/usersRepository";

class SessionUserUseCase {
    constructor( private userRepository: UsersRepository) {}

    execute(id: string): User {
        const user = this.userRepository.findById(id)

        if(!user){
            throw new Error("User not found");
        }

        return user;
    }
}

export { SessionUserUseCase }