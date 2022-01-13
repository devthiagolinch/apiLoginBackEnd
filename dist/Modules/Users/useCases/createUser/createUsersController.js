"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersController = void 0;
class CreateUsersController {
    constructor(createUseCase) {
        this.createUseCase = createUseCase;
    }
    ;
    handle(request, response) {
        const { name, password, email, avatarUrl } = request.body;
        this.createUseCase.execute({ name, password, email, avatarUrl });
        return response.status(201).send();
    }
    ;
}
exports.CreateUsersController = CreateUsersController;
