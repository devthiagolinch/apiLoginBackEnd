import { Router } from "express";
import { sessionsUserController } from "../Modules/Users/useCases/sessionUser";

const sessionRoutes = Router();

sessionRoutes.post("/", (request, response) => {
    return sessionsUserController.handle(request, response)
})

export { sessionRoutes }