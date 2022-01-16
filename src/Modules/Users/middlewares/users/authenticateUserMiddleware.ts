import { NextFunction, Request, Response } from "express";

import { IUsersRepository } from "../../repository/IUsersRepository";
import { UsersRepository } from "../../repository/usersRepository";

function authenticateMidleware(request: Request, response: Response, next: NextFunction) {
    const userRepository: IUsersRepository = UsersRepository.getInstance()
    const {email, password} = request.body;
    const user = userRepository.findByEmail(email)
    

    if(!user) {
        throw new Error("Email not Found")
    }

    if(!user.password === password) {
        throw new Error("Invalid password")
    }
    

    return next()

}

export { authenticateMidleware }