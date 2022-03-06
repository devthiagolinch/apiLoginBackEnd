import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserInformationsUseCase } from "./UserInformationsUseCase";


class UserInformationsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const userInformationUseCase = container.resolve(UserInformationsUseCase)
        const {user} = request;

        try {
            const userInformation = await userInformationUseCase.execute(user.id);

            return response.json(userInformation)
        } catch (error) {
            return response.status(404).json({error: error})
        }
    }
}

export { UserInformationsController }