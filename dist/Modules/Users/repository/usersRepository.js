"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const user_1 = require("../model/user");
class UsersRepository {
    constructor() {
        this.users = [];
    }
    create({ name, email, avatarUrl, password }) {
        const user = new user_1.User();
        Object.assign(user, {
            name,
            password,
            email,
            avatarUrl,
            created_at: new Date()
        });
        this.users.push(user);
    }
    list() {
        return this.users;
    }
    findByEmail(email) {
        const userEmail = this.users.find(user => user.email === email);
        return userEmail;
    }
}
exports.UsersRepository = UsersRepository;
