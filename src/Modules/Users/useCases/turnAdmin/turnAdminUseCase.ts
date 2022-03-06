import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repository/IUsersRepository";


@injectable()
class TurnUserAdminUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){}

    async execute(id: string): Promise<void> {
        const user = await this.userRepository.findById(id)
        if(!user){
            throw new Error("User not found").message
        }
        if(user.isAdmin == true){
            throw new Error("This user already is an Admin").message
        }

        user.isAdmin = true

        await this.userRepository.create(user)
    }
} export { TurnUserAdminUseCase }