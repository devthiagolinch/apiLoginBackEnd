import { inject, injectable } from "tsyringe";

import { User } from "../../entities/user";
import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class SessionUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository){}

    async execute(email: string, password:string): Promise<User> {
        const user = await this.userRepository.findByEmail(email)

        if(!user){
            throw new Error("User not found").message
        }

        if(user.password !== password){
            throw new Error("Ivalid password").message
        }

        return user;
    }
}

export { SessionUserUseCase }