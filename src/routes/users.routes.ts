import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload"

import { ensureAuhenticate } from "../Modules/Users/middlewares/users/ensureAuhenticate";
import { CreateUsersController } from "../Modules/Users/useCases/createUser/createUsersController";
import { ListUsersController } from "../Modules/Users/useCases/listUsersUseCase/listUsersController";
import { SessionUserController } from "../Modules/Users/useCases/authenticate/createSessionUserController";
import { UploadUserAvatarController } from "../Modules/Users/useCases/uploadUserAvatar/userAvatarController";
import { DeleteUserController } from "../Modules/Users/useCases/deleteUser/deleteUserController";

const usersRoutes = Router();

const upload = multer(uploadConfig.upload("./tmp/avatar"))

const createUsersController = new CreateUsersController();
const deleteUserController = new DeleteUserController();
const listUsersController = new ListUsersController();
const createSessionUserController = new SessionUserController();
const uploadAvatarController = new UploadUserAvatarController();

// CREATE USER
usersRoutes.post("/", createUsersController.handle);

// DELETE USER
usersRoutes.delete("/", ensureAuhenticate, deleteUserController.handle)

// CREATE AUTHENTICATION
usersRoutes.post("/authenticate", createSessionUserController.handle);

// GET USER INFORMATION
/* usersRoutes.get("/profile", ensureAuhenticate, (request, response) => {
    return userInformationsController.handle(request, response)
}); */

// LIST USERS
usersRoutes.get("/", ensureAuhenticate, listUsersController.handle)

// UPLOAD AVATAR
usersRoutes.patch("/avatar", ensureAuhenticate, upload.single("avatar"),  uploadAvatarController.handle)
export {usersRoutes}