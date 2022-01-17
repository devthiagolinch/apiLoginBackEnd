import { User } from "../../model/user";
import { IUsersRepository } from "../../repository/IUsersRepository";


class ListUsersUseCase {
    constructor (private usersRepository: IUsersRepository) {};

    execute(): User[]{
        const users = this.usersRepository.list();
        return users;
    }
}

export { ListUsersUseCase }