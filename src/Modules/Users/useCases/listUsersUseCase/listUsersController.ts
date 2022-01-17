import { Request, Response } from "express";
import { ListUsersUseCase } from "../listUsersUseCase/listUsersUseCase";


class ListUsersController {
    constructor( private listUsersUseCase: ListUsersUseCase) {};

    handle(request: Request, response: Response) {
        const users = this.listUsersUseCase.execute();
        return response.json({users})
    }
}

export { ListUsersController }