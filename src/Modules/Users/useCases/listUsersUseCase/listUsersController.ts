import { Request, Response } from "express";
import { ListUsersUseCase } from "../listUsersUseCase/listUsersUseCase";


class ListUsersController {
    constructor( private listUsersUseCase: ListUsersUseCase) {};

    handle(request: Request, response: Response) {
        const users = this.listUsersUseCase.execute();
        return response.status(201).json(users)
    }
}

export { ListUsersController }