"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersController = void 0;
class ListUsersController {
    constructor(listUsersUseCase) {
        this.listUsersUseCase = listUsersUseCase;
    }
    ;
    handle(request, response) {
        const users = this.listUsersUseCase.execute();
        return response.json(users);
    }
}
exports.ListUsersController = ListUsersController;
