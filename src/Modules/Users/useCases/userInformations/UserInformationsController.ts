import { Request, Response } from "express";

import { UserInformationsUseCase } from "./UserInformationsUseCase";


class UserInformationsController {
    constructor ( private userInformationsUseCase: UserInformationsUseCase) {};

    handle(request: Request, response: Response): Response {
        const {user} = request;

        try {
            const userInformation = this.userInformationsUseCase.execute(user.email);

            return response.json(userInformation)
        } catch (error) {
            return response.status(404).json({error: error})
        }
    }
}

export { UserInformationsController }