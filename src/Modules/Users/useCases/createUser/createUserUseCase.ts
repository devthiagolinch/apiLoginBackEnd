import { inject, injectable } from 'tsyringe'

import { IUsersRepository } from "../../repository/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
    avatar: string;
    password: string;
}

@injectable()
class CreateUserUseCase {
    constructor (
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){};

    async execute({name, email, avatar, password}: IRequest): Promise<void> {
        const emailAlreadyExists = await this.usersRepository.findByEmail(email)
    
        if(emailAlreadyExists){
            throw new Error("User already exists").message
        };
    
        await this.usersRepository.create({name, password, email, avatar});
    }
}

export { CreateUserUseCase }