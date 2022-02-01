import { Router } from "express";

import { authenticateMidleware } from "../Modules/Users/middlewares/users/authenticateUserMiddleware";
import { createUsersController } from "../Modules/Users/useCases/createUser";
import { listUsersController } from "../Modules/Users/useCases/listUsersUseCase";
import { createSessionUserController } from "../Modules/Users/useCases/sessionUser";
import { userInformationsController } from "../Modules/Users/useCases/userInformations";


const usersRoutes = Router();

// CREATE USER
usersRoutes.post("/", (request, response) => {
    return createUsersController.handle(request, response)
});

// CREATE AUTHENTICATION
usersRoutes.post("/authenticate", (request, response) => {
    return createSessionUserController.handle(request, response)
});

// GET USER INFORMATION
usersRoutes.get("/profile/:id", authenticateMidleware, (request, response) => {
    return userInformationsController.handle(request, response)
});

usersRoutes.get("/:id", authenticateMidleware, (request, response) => {
    return listUsersController.handle(request, response)
})

export {usersRoutes}