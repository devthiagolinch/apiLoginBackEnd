import { UsersRepository } from "../../repository/usersRepository";
import { SessionUserController } from "./sessionUserController";
import { SessionUserUseCase } from "./sessionUserUseCase";

const usersRepository = UsersRepository.getInstance();
const sessionUserUseCase = new SessionUserUseCase(usersRepository);
const sessionsUserController = new SessionUserController(sessionUserUseCase);

export { sessionsUserController, sessionUserUseCase }