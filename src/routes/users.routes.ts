import { Router } from "express";

import { authenticateMidleware } from "../Modules/Users/middlewares/users/authenticateUserMiddleware";
import { createUsersController } from "../Modules/Users/useCases/createUser";
import { userInformationsController } from "../Modules/Users/useCases/userInformations";


const usersRoutes = Router();


usersRoutes.post("/", (request, response) => {
    return createUsersController.handle(request, response)
})

usersRoutes.get("/", authenticateMidleware, (request, response) => {
    return userInformationsController.handle(request, response)
})

export {usersRoutes}