import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./deleteUserUseCase";


class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.user;
        const {user_id} = request.body;
        const deleteUseCase = container.resolve(DeleteUserUseCase)

        try {
            await deleteUseCase.execute({id, user_id})
            return response.status(200).send();
        } catch (error) {
            return response.status(404).json(error)
        }
    }
} export { DeleteUserController }