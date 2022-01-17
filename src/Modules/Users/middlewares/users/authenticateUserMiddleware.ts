import { NextFunction, Request, Response } from "express";

import { IUsersRepository } from "../../repository/IUsersRepository";
import { UsersRepository } from "../../repository/usersRepository";

function authenticateMidleware(request: Request, response: Response, next: NextFunction) {
    const userRepository: IUsersRepository = UsersRepository.getInstance()
    const {email, password} = request.body;

    const user = userRepository.findByEmail(email)

    if(user.password === password && user.email === email) {
        request.user = user
        return next()
    }else{ throw new Error("Try again")}
    

}

export { authenticateMidleware }