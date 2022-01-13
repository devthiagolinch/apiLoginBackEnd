import { UsersRepository } from "../../repository/usersRepository";

interface IRequest {
    name: string;
    email: string;
    avatarUrl: string;
    password: string;
}

class CreateUserUseCase {
    constructor (private usersRepository: UsersRepository) {};

    execute({name, email, avatarUrl, password}: IRequest): void {

        const emailAlreadyExists = this.usersRepository.findByEmail(email)
    
        if(emailAlreadyExists){
            throw new Error("User already exists")
        };
    
        this.usersRepository.create({name, password, email, avatarUrl});
    }
}

export { CreateUserUseCase }