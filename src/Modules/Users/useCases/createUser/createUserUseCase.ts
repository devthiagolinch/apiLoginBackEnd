import { inject, injectable } from 'tsyringe'
import { hash } from 'bcryptjs';

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
        const passwordHash = await hash(password, 9)
    
        if(emailAlreadyExists){
            throw new Error("User already exists").message
        };
    
        await this.usersRepository.create({
            name,
            password: passwordHash,
            email,
            avatar
        });
    }
}

export { CreateUserUseCase }