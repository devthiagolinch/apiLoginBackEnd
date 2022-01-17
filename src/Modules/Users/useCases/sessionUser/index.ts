import { UsersRepository } from "../../repository/usersRepository";
import { SessionUserController } from "./createSessionUserController";
import { SessionUserUseCase } from "./createSessionUserUseCase";

const usersRepository = UsersRepository.getInstance();
const sessionUserUseCase = new SessionUserUseCase(usersRepository);
const sessionsUserController = new SessionUserController(sessionUserUseCase);

export { sessionsUserController, sessionUserUseCase }