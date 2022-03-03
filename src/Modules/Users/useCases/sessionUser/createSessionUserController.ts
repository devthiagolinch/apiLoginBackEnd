import { Request, Response } from "express";
import { container } from "tsyringe";
import { SessionUserUseCase } from "./createSessionUserUseCase";


class SessionUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        const sessionUserUseCase = container.resolve(SessionUserUseCase)

        try {
            const user =  await sessionUserUseCase.execute(email, password)
            return response.status(201).json(user.id);
        } catch (error) {
            return response.status(404).json(error)
        }
    }
}

export { SessionUserController }
