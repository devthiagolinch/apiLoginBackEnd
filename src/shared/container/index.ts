import { container } from "tsyringe";
import { IUsersRepository } from "../../Modules/Users/repository/IUsersRepository";
import { UsersRepository } from "../../Modules/Users/repository/usersRepository";


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)