import { Router } from "express";

import { UsersRepository } from "../repository/usersRepository";
import { CreateUserService } from "../services/createUserService";

const usersRoutes = Router();

const userRepository = new UsersRepository();
const createUserService = new CreateUserService(userRepository);

usersRoutes.post("/", (request, response) => {
    const { name, password, email, avatarUrl } = request.body;

    createUserService.execute({name, password, email, avatarUrl})

    return response.status(201).send()
})

usersRoutes.get("/", (request, response) => {
    const users = userRepository.list();
    return response.status(201).json(users)
})

export {usersRoutes}