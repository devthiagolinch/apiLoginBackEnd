import { Request, Response } from "express";

import { ListUsersUseCase } from "./UserInformationsUseCase";


class UserInformationsController {
    constructor ( private listUsersUseCase: ListUsersUseCase) {};

    handle(request: Request, response: Response): Response {
        const {user} = request;

        const userInformation = this.listUsersUseCase.execute(user.email);
        return response.json(userInformation)
    }
}

export { UserInformationsController }