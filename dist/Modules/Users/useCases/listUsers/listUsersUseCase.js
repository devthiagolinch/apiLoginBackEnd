"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersUseCase = void 0;
class ListUsersUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    ;
    execute() {
        const all = this.usersRepository.list();
        return all;
    }
    ;
}
exports.ListUsersUseCase = ListUsersUseCase;
;
