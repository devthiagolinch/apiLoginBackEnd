"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const createUser_1 = require("../Modules/Users/useCases/createUser");
const listUsers_1 = require("../Modules/Users/useCases/listUsers");
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
usersRoutes.post("/", (request, response) => {
    return createUser_1.createUsersController.handle(request, response);
});
usersRoutes.get("/", (request, response) => {
    return listUsers_1.listUsersController.handle(request, response);
});
