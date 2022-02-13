import { User } from "../../model/user";

import { UsersRepository } from "../../repository/usersRepository";

class SessionUserUseCase {
    constructor( private userRepository: UsersRepository){}

    execute(email: string, password:string): User {
        const user = this.userRepository.findByEmail(email)

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