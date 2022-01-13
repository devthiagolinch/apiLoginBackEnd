"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = require("./routes/users.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", users_routes_1.usersRoutes);
app.listen(3333, () => console.log("Server runing!"));
