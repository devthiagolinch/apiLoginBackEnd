import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repository/usersRepository";


@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ){}

    async execute(id: string): Promise<void> {
        const user = await this.usersRepository.findById(id)
        if(!user) {
            throw new Error("User not found")
        }

        await this.usersRepository.delete(id)
    }
} export { DeleteUserUseCase }