import { Request, Response } from "express";

import { UserInformationsUseCase } from "./UserInformationsUseCase";


class UserInformationsController {
    constructor ( private userInformationsUseCase: UserInformationsUseCase) {};

    handle(request: Request, response: Response): Response {
        const {user} = request;

        const userInformation = this.userInformationsUseCase.execute(user.email);
        
        return response.json(userInformation)
    }
}

export { UserInformationsController }