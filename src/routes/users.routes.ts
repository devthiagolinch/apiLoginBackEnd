import { NextFunction, Response, Router } from "express";

import { authenticateMidleware } from "../Modules/Users/middlewares/users/authenticateUserMiddleware";
import { User } from "../Modules/Users/model/user";
import { IUsersRepository } from "../Modules/Users/repository/IUsersRepository";
import { UsersRepository } from "../Modules/Users/repository/usersRepository";
import { createUsersController } from "../Modules/Users/useCases/createUser";
import { listUsersController } from "../Modules/Users/useCases/listUsers";


const usersRoutes = Router();


usersRoutes.post("/", (request, response) => {
    return createUsersController.handle(request, response)
})

usersRoutes.get("/", authenticateMidleware, (request, response) => {
    return listUsersController.handle(request, response)
})

export {usersRoutes}