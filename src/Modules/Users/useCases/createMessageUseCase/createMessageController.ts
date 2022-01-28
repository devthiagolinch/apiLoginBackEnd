import { Request, Response } from "express";


class CreateMessageController {
    constructor (private createMessageUseCase: CreateMessageController) {}

    handle(request: Request, response: Response): Response {

        return response.send();
    }
}

export { CreateMessageController }