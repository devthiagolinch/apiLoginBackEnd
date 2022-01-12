import { Request, Response } from 'express'
import { CreateUserService } from '../../services/createUserService'

class CreateUsersController {
        constructor(private createUseCase: CreateUserService) {};

        handle(request: Request, response: Response) {
            const { name, password, email, avatarUrl } = request.body;

            this.createUseCase.execute({name, password, email, avatarUrl})
        
            return response.status(201).send()
        };
}

export { CreateUsersController }