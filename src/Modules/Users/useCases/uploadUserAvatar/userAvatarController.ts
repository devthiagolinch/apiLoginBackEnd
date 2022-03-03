import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadUserAvatarUseCase } from "./userAvatarUseCase";


class UploadUserAvatarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params;
        const uploadUserAvatarUseCase = container.resolve(UploadUserAvatarUseCase)
        const avatar_file = request.file.filename;

        try {
            await uploadUserAvatarUseCase.execute({user_id: id, avatar_file})
            return response.status(200).send();
        } catch (error) {
            return response.status(404).json(error)
        }
    }
} export { UploadUserAvatarController }