import { UsersRepository } from "../../repository/usersRepository";
import { ListUsersController } from "./listUsersController";
import { ListUsersUseCase } from "./listUsersUseCase";

const usersRepository = new UsersRepository();
const listUsersUseCase = new ListUsersUseCase(usersRepository)
const listUsersController = new ListUsersController(listUsersUseCase)

export { listUsersController, listUsersUseCase }