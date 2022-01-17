import { User } from "../../model/user";
import { IUsersRepository } from "../../repository/IUsersRepository";


class ListUsersUseCase {
    constructor( private usersRepository: IUsersRepository) {};

    execute(email: string): User {
        const user = this.usersRepository.findByEmail(email)
        return user
    };
};

export { ListUsersUseCase }