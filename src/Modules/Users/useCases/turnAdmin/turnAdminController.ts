import { Request, Response } from "express";
import { container } from "tsyringe";
import { TurnUserAdminUseCase } from "./turnAdminUseCase";


class TurnUserAdminController {
    async handle(request: Request, response: Response): Promise<Response> {
        const turnAdminUseCase = container.resolve(TurnUserAdminUseCase)
        const { id }  = request.body;

        try {
            await turnAdminUseCase.execute(id)
            return response.status(200).send()
        } catch (error) {
            return response.status(400).json(error)
        }
    }
} export { TurnUserAdminController }