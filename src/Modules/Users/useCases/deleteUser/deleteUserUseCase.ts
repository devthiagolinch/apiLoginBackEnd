import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repository/usersRepository";

interface IRequest {
    id: string;
    user_id: string;
}

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ){}

    async execute({id, user_id}: IRequest): Promise<void> {
        const userAdmin = await this.usersRepository.findById(id)
        const user = await this.usersRepository.findById(user_id)
        if(!user) {
            throw new Error("User not found").message
        }

        if(!userAdmin.isAdmin == true){
            throw new Error("You don't have permision to delete").message
        }

        await this.usersRepository.delete(user_id)
    }
} export { DeleteUserUseCase }