import { User } from "../../model/user";
import { IUsersRepository } from "../../repository/IUsersRepository";


class ListUsersUseCase {
    constructor( private usersRepository: IUsersRepository) {};

    execute(): User[] {
        const all = this.usersRepository.list();
        return all;
    };
};

export { ListUsersUseCase }