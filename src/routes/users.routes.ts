import { Router } from "express";
import { UsersRepository } from "../Modules/Users/repository/usersRepository";
import { createUsersController } from "../Modules/Users/useCases/createUser";


const usersRoutes = Router();

const usersRepository = new UsersRepository();

usersRoutes.post("/", (request, response) => {
    return createUsersController.handle(request, response)
})

usersRoutes.get("/", (request, response) => {
    const users = usersRepository.list();
    return response.status(201).json(users)
})

export {usersRoutes}