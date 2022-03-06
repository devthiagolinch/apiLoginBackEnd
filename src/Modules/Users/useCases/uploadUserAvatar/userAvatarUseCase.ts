import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../utils/file";
import { IUsersRepository } from "../../repository/IUsersRepository";

interface IRequest {
    id: string;
    avatar_file: string;
}

@injectable()
class UploadUserAvatarUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({id, avatar_file}: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(id)
        if(user.avatar) {
            await deleteFile(`./tmp/avatar/${avatar_file}`)
        }
        
        user.avatar = avatar_file
        await this.usersRepository.create(user)
    }
} export { UploadUserAvatarUseCase }