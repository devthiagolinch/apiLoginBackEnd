import { Router } from "express";

import { createUsersController } from "../Modules/Users/useCases/createUser";
import { listUsersController } from "../Modules/Users/useCases/listUsers";


const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    return createUsersController.handle(request, response)
})

usersRoutes.get("/", (request, response) => {
    return listUsersController.handle(request, response)
})

export {usersRoutes}