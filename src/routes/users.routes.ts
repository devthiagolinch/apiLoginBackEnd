import { Router } from "express";

import { UsersRepository } from "../repository/usersRepository";

const usersRoutes = Router();

const userRepository = new UsersRepository();

usersRoutes.post("/", (request, response) => {
    const { name, password, email, avatarUrl } = request.body;

    const emailAlreadyExists = userRepository.findByEmail(email)

    if(emailAlreadyExists){
        return response.status(404).json({error: "Users already exists!"});
    };

    userRepository.create({name, password, email, avatarUrl});

    return response.status(201).send()
})

export {usersRoutes}