import { UsersRepository } from "../../repository/usersRepository";
import { CreateUserUseCase } from "./createUserUseCase";
import { CreateUsersController } from "./createUsersController";

/** A ideia do index é exportar de uma vez tudo que esteja dentro do useCase.
 * Aqui preciso sempre me atentar a tudo que cada uma das classes precisam,
 * o controller depende do userService, e o userService precisa do usersRepository.
 * Agora eu preciso enviar o controller para dentro da rota para tudo funcionar.
 */

const usersRepository = UsersRepository.getInstance();
const createUserService = new CreateUserUseCase(usersRepository);
const createUsersController = new CreateUsersController(createUserService);

export { createUsersController, createUserService }