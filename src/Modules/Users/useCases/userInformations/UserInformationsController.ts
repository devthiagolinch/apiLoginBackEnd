import { Request, Response } from "express";

import { UserInformationsUseCase } from "./UserInformationsUseCase";


class UserInformationsController {
    constructor ( private userInformationsUseCase: UserInformationsUseCase) {};

    handle(request: Request, response: Response): Response {
        const {user} = request;

        const userInformation = this.userInformationsUseCase.execute(user.email);

        if(!userInformation){
            return response.status(404).json(Error.prototype.message)
        }
        
        return response.json(userInformation)
    }
}

export { UserInformationsController }