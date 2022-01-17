import { Router } from "express";

import { authenticateMidleware } from "../Modules/Users/middlewares/users/authenticateUserMiddleware";
import { createUsersController } from "../Modules/Users/useCases/createUser";
import { listUsersController } from "../Modules/Users/useCases/listUsersUseCase";
import { userInformationsController } from "../Modules/Users/useCases/userInformations";


const usersRoutes = Router();

// CREATE USE
usersRoutes.post("/", (request, response) => {
    return createUsersController.handle(request, response)
});

// GET USER INFORMATION
usersRoutes.get("/:id", authenticateMidleware, (request, response) => {
    return userInformationsController.handle(request, response)
});

usersRoutes.get("/", (request, response) => {
    return listUsersController.handle(request, response)
})

export {usersRoutes}