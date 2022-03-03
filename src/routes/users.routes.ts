import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload"

import { authenticateMidleware } from "../Modules/Users/middlewares/users/authenticateUserMiddleware";
import { CreateUsersController } from "../Modules/Users/useCases/createUser/createUsersController";
import { ListUsersController } from "../Modules/Users/useCases/listUsersUseCase/listUsersController";
import { SessionUserController } from "../Modules/Users/useCases/sessionUser/createSessionUserController";
import { UploadUserAvatarController } from "../Modules/Users/useCases/uploadUserAvatar/userAvatarController";

const usersRoutes = Router();

const upload = multer(uploadConfig.upload("./tmp/avatar"))

const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();
const createSessionUserController = new SessionUserController();
const uploadAvatarController = new UploadUserAvatarController();

// CREATE USER
usersRoutes.post("/", createUsersController.handle);

// CREATE AUTHENTICATION
usersRoutes.post("/authenticate", createSessionUserController.handle);

// GET USER INFORMATION
/* usersRoutes.get("/profile/:id", authenticateMidleware, (request, response) => {
    return userInformationsController.handle(request, response)
}); */

// LIST USERS
usersRoutes.get("/:id", authenticateMidleware, listUsersController.handle)

// UPLOAD AVATAR
usersRoutes.patch("/avatar/:id", upload.single("avatar"),  uploadAvatarController.handle)
export {usersRoutes}