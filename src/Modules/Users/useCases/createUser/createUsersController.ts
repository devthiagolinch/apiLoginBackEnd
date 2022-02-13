import { Request, Response } from 'express'
import { CreateUserUseCase } from './createUserUseCase'

class CreateUsersController {
    constructor(private createUserUseCase: CreateUserUseCase) {};

    handle(request: Request, response: Response) {
        const { name, password, email, avatarUrl } = request.body;

        try {
            this.createUserUseCase.execute({name, password, email, avatarUrl})
    
            return response.status(201).send()
            
        } catch (error) {
            return response.status(400).json({error: error})
        }
    };
}

export { CreateUsersController }