import { Request, Response } from "express";
import { SessionUserUseCase } from "./sessionUserUseCase";


class SessionUserController {
    constructor( private sessionUserUseCase: SessionUserUseCase) {}

    handle(request: Request, response: Response): Response {
        const { email, password } = request.body;

        const user = this.sessionUserUseCase.execute(email)

        if(!user.password === password) {
            throw new Error("Passord invalid");
        };

        return response.status(201).send()
    }
}

export { SessionUserController }
