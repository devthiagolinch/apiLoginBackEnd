import { inject, injectable } from 'tsyringe'

import { User } from "../../entities/user";
import { IUsersRepository } from "../../repository/IUsersRepository";

@injectable()
class ListUsersUseCase {
    constructor (
        @inject("UsersRepository")
        private usersRepository: IUsersRepository) {};

    async execute(): Promise<User[]> {
        const users = await this.usersRepository.list();
        return users;
    }
}

export { ListUsersUseCase }