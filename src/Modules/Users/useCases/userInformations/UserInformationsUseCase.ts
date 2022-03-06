import { inject, injectable } from "tsyringe";
import { User } from "../../entities/user";
import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class UserInformationsUseCase {
    constructor( 
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){};

    async execute(id: string): Promise<User> {
        const user = await this.usersRepository.findById(id)
        return user
    };
};

export { UserInformationsUseCase }