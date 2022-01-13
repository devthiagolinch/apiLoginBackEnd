"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = exports.createUsersController = void 0;
const usersRepository_1 = require("../../repository/usersRepository");
const createUserService_1 = require("../../services/createUserService");
const createUsersController_1 = require("./createUsersController");
/** A ideia do index é exportar de uma vez tudo que esteja dentro do useCase.
 * Aqui preciso sempre me atentar a tudo que cada uma das classes precisam,
 * o controller depende do userService, e o userService precisa do usersRepository.
 * Agora eu preciso enviar o controller para dentro da rota para tudo funcionar.
 */
const usersRepository = new usersRepository_1.UsersRepository;
const createUserService = new createUserService_1.CreateUserService(usersRepository);
exports.createUserService = createUserService;
const createUsersController = new createUsersController_1.CreateUsersController(createUserService);
exports.createUsersController = createUsersController;
