import { NextFunction, Request, Response } from "express";

import { IUsersRepository } from "../../repository/IUsersRepository";
import { UsersRepository } from "../../repository/usersRepository";

function authenticateMidleware(request: Request, response: Response, next: NextFunction) {
    const userRepository: IUsersRepository = UsersRepository.getInstance()
    const {id} = request.params;

    const user = userRepository.findById(id)

    if(!user) {
        throw new Error("User not found")
    }


    request.user = user
    return next()
}

export { authenticateMidleware }