import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload"

const usersRoutes = Router();
const upload = multer(uploadConfig.upload("./tmp/avatar"))

import { ensureAuhenticate } from "../Modules/Users/middlewares/users/ensureAuhenticate";

import { CreateUsersController } from "../Modules/Users/useCases/createUser/createUsersController";
import { ListUsersController } from "../Modules/Users/useCases/listUsersUseCase/listUsersController";
import { SessionUserController } from "../Modules/Users/useCases/authenticate/createSessionUserController";
import { UserInformationsController } from "../Modules/Users/useCases/userInformations/UserInformationsController";
import { UploadUserAvatarController } from "../Modules/Users/useCases/uploadUserAvatar/userAvatarController";
import { DeleteUserController } from "../Modules/Users/useCases/deleteUser/deleteUserController";
import { TurnUserAdminController } from "../Modules/Users/useCases/turnAdmin/turnAdminController";

const createUsersController = new CreateUsersController();
const deleteUserController = new DeleteUserController();
const listUsersController = new ListUsersController();
const createSessionUserController = new SessionUserController();
const userInformationsController = new UserInformationsController();
const uploadAvatarController = new UploadUserAvatarController();
const turnUserAdminController = new TurnUserAdminController()

// CREATE USER
usersRoutes.post("/", createUsersController.handle);
// CREATE AUTHENTICATION
usersRoutes.post("/authenticate", createSessionUserController.handle);
// LIST USERS
usersRoutes.get("/", ensureAuhenticate, listUsersController.handle);
// UPLOAD AVATAR
usersRoutes.patch("/avatar", ensureAuhenticate, upload.single("avatar"),  uploadAvatarController.handle);
// TURN ADMIN
usersRoutes.patch("/isAdmin", ensureAuhenticate,turnUserAdminController.handle);
// GET USER INFORMATION
usersRoutes.get("/profile", ensureAuhenticate, userInformationsController.handle);
// DELETE USER
usersRoutes.delete("/", ensureAuhenticate, deleteUserController.handle)

export {usersRoutes}