import { Request, Response } from 'express'
import {container} from "tsyringe"

import { CreateUserUseCase } from './createUserUseCase'

class CreateUsersController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, password, email, avatar } = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase)

        try {
            await createUserUseCase.execute({name, password, email, avatar})
            return response.status(201).send()
        } catch (error) {
            return response.status(400).json({error: error})
        }
    };
}

export { CreateUsersController }