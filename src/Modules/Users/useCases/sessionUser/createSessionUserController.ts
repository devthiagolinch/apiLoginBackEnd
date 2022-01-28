import { Request, Response } from "express";
import { SessionUserUseCase } from "./createSessionUserUseCase";


class SessionUserController {
    constructor( private sessionUserUseCase: SessionUserUseCase) {}

    handle(request: Request, response: Response): Response {
        const { email, password } = request.body;

        const user = this.sessionUserUseCase.execute(email, password)

        if(!user){
            return response.status(404).json(Error.prototype.message)
        }

        return response.status(201).json(user.id);
    }
}

export { SessionUserController }
