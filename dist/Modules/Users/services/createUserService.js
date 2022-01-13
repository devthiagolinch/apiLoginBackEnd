"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
class CreateUserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    ;
    execute({ name, email, avatarUrl, password }) {
        const emailAlreadyExists = this.usersRepository.findByEmail(email);
        if (emailAlreadyExists) {
            throw new Error("User already exists");
        }
        ;
        this.usersRepository.create({ name, password, email, avatarUrl });
    }
}
exports.CreateUserService = CreateUserService;
