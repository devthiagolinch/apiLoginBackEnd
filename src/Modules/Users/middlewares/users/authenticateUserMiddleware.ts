import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { User } from "../../entities/user";

import { IUsersRepository } from "../../repository/IUsersRepository";
import { UsersRepository } from "../../repository/usersRepository";

function authenticateMidleware(request: Request, response: Response, next: NextFunction) {
    const userRepository = new UsersRepository()
    const id = request.headers.authorization;

    const user = userRepository.findById(id)

    if(!user) {
        return response.status(404).json({message: "User not found"})
    }

    request.user = user

    return next()
}

export { authenticateMidleware }