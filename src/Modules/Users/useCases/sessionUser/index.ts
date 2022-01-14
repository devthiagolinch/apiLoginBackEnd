import { UsersRepository } from "../../repository/usersRepository";
import { SessionUserController } from "./sessionUserController";
import { SessionUserUseCase } from "./sessionUserUseCase";

const sessionUserRepository = UsersRepository.getInstance();

const sessionUserUseCase = new SessionUserUseCase(sessionUserRepository);

const sessionsUserController = new SessionUserController(sessionUserUseCase);

export { sessionsUserController, sessionUserUseCase }