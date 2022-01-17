import { UsersRepository } from "../../repository/usersRepository";
import { UserInformationsController } from "./UserInformationsController";
import { ListUsersUseCase } from "./UserInformationsUseCase";

const usersRepository = UsersRepository.getInstance()
const listUsersUseCase = new ListUsersUseCase(usersRepository)
const userInformationsController = new UserInformationsController(listUsersUseCase)

export { userInformationsController, listUsersUseCase }