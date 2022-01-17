import { Request, Response } from "express";
import { SessionUserUseCase } from "./createSessionUserUseCase";


class SessionUserController {
    constructor( private sessionUserUseCase: SessionUserUseCase) {}

    handle(request: Request, response: Response): Response {
        const { id } = request.params;

        const user = this.sessionUserUseCase.execute(id)

        return response.json(user)
    }
}

export { SessionUserController }
