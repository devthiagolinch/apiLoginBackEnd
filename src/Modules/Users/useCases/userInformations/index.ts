import { UsersRepository } from "../../repository/usersRepository";
import { UserInformationsController } from "./UserInformationsController";
import { UserInformationsUseCase } from "./UserInformationsUseCase";

const usersRepository = UsersRepository.getInstance()
const userInformationsUseCase = new UserInformationsUseCase(usersRepository)
const userInformationsController = new UserInformationsController(userInformationsUseCase)

export { userInformationsController, userInformationsUseCase }