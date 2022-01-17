import { UsersRepository } from "../../repository/usersRepository";
import { SessionUserController } from "./createSessionUserController";
import { SessionUserUseCase } from "./createSessionUserUseCase";

const usersRepository = UsersRepository.getInstance();
const createSessionUserUseCase = new SessionUserUseCase(usersRepository);
const createSessionUserController = new SessionUserController(createSessionUserUseCase);

export { createSessionUserController, createSessionUserUseCase }