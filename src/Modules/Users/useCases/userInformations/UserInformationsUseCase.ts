import { User } from "../../model/user";
import { IUsersRepository } from "../../repository/IUsersRepository";


class UserInformationsUseCase {
    constructor( private usersRepository: IUsersRepository) {};

    execute(email: string): User {
        const user = this.usersRepository.findByEmail(email)
        return user
    };
};

export { UserInformationsUseCase }