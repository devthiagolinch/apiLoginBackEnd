"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/server.ts
var import_reflect_metadata = require("reflect-metadata");
var import_express2 = __toESM(require("express"));
var import_cors = __toESM(require("cors"));

// src/routes/users.routes.ts
var import_express = require("express");
var import_multer2 = __toESM(require("multer"));

// src/config/upload.ts
var import_crypto = __toESM(require("crypto"));
var import_multer = __toESM(require("multer"));
var import_path = require("path");
var upload_default = {
  upload(folder) {
    return {
      storage: import_multer.default.diskStorage({
        destination: (0, import_path.resolve)(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const fileHash = import_crypto.default.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;
          return callback(null, fileName);
        }
      })
    };
  }
};

// src/Modules/Users/middlewares/users/ensureAuhenticate.ts
var import_jsonwebtoken = require("jsonwebtoken");

// src/Modules/Users/repository/usersRepository.ts
var import_typeorm2 = require("typeorm");

// src/Modules/Users/entities/user.ts
var import_typeorm = require("typeorm");
var import_uuid = require("uuid");
var User = class {
  constructor() {
    if (!this.id) {
      this.id = (0, import_uuid.v4)();
    }
  }
};
__decorateClass([
  (0, import_typeorm.PrimaryColumn)()
], User.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], User.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], User.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], User.prototype, "avatar", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], User.prototype, "password", 2);
__decorateClass([
  (0, import_typeorm.Column)()
], User.prototype, "isAdmin", 2);
__decorateClass([
  (0, import_typeorm.CreateDateColumn)()
], User.prototype, "created_at", 2);
User = __decorateClass([
  (0, import_typeorm.Entity)("users")
], User);

// src/Modules/Users/repository/usersRepository.ts
var UsersRepository = class {
  constructor() {
    this.repository = (0, import_typeorm2.getRepository)(User);
  }
  async findById(id) {
    const user = await this.repository.findOne({ id });
    return user;
  }
  async create({ name, email, avatar, password, id, isAdmin }) {
    const user = this.repository.create({
      name,
      password,
      email,
      avatar,
      id,
      isAdmin,
      created_at: /* @__PURE__ */ new Date()
    });
    await this.repository.save(user);
  }
  async delete(id) {
    await this.repository.delete({ id });
  }
  async list() {
    const users = await this.repository.find();
    return users;
  }
  async findByEmail(email) {
    const user = await this.repository.findOne({ email });
    return user;
  }
};

// src/Modules/Users/middlewares/users/ensureAuhenticate.ts
async function ensureAuhenticate(request, response, next) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new Error("Token missing");
  }
  const [, token] = authHeader.split(" ");
  try {
    const { sub: user_id } = (0, import_jsonwebtoken.verify)(token, "88f1c14bd2a14b42fad21d64739889e9");
    const userRepository = new UsersRepository();
    const user = await userRepository.findById(user_id);
    if (!user) {
      throw new Error("User does not exists");
    }
    request.user = {
      id: user.id
    };
    next();
  } catch {
    throw new Error("Invalid token");
  }
}

// src/Modules/Users/useCases/createUser/createUsersController.ts
var import_tsyringe2 = require("tsyringe");

// src/Modules/Users/useCases/createUser/createUserUseCase.ts
var import_tsyringe = require("tsyringe");
var import_bcryptjs = require("bcryptjs");
var CreateUserUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({ name, email, avatar, password }) {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);
    const passwordHash = await (0, import_bcryptjs.hash)(password, 9);
    if (emailAlreadyExists) {
      throw new Error("User already exists").message;
    }
    ;
    await this.usersRepository.create({
      name,
      password: passwordHash,
      email,
      avatar
    });
  }
};
CreateUserUseCase = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("UsersRepository"))
], CreateUserUseCase);

// src/Modules/Users/useCases/createUser/createUsersController.ts
var CreateUsersController = class {
  async handle(request, response) {
    const { name, password, email, avatar } = request.body;
    const createUserUseCase = import_tsyringe2.container.resolve(CreateUserUseCase);
    try {
      await createUserUseCase.execute({ name, password, email, avatar });
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
};

// src/Modules/Users/useCases/listUsersUseCase/listUsersController.ts
var import_tsyringe4 = require("tsyringe");

// src/Modules/Users/useCases/listUsersUseCase/listUsersUseCase.ts
var import_tsyringe3 = require("tsyringe");
var ListUsersUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute() {
    const users = await this.usersRepository.list();
    return users;
  }
};
ListUsersUseCase = __decorateClass([
  (0, import_tsyringe3.injectable)(),
  __decorateParam(0, (0, import_tsyringe3.inject)("UsersRepository"))
], ListUsersUseCase);

// src/Modules/Users/useCases/listUsersUseCase/listUsersController.ts
var ListUsersController = class {
  async handle(request, response) {
    const listUsersUseCase = import_tsyringe4.container.resolve(ListUsersUseCase);
    const users = await listUsersUseCase.execute();
    return response.status(201).json(users);
  }
};

// src/Modules/Users/useCases/authenticate/createSessionUserController.ts
var import_tsyringe6 = require("tsyringe");

// src/Modules/Users/useCases/authenticate/createSessionUserUseCase.ts
var import_bcryptjs2 = require("bcryptjs");
var import_jsonwebtoken2 = require("jsonwebtoken");
var import_tsyringe5 = require("tsyringe");
var userAuthenticateUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(email, password) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("E-mail or password invalid").message;
    }
    const passwordMatch = await (0, import_bcryptjs2.compare)(password, user.password);
    if (!passwordMatch) {
      throw new Error("E-mail or password invalid").message;
    }
    const token = (0, import_jsonwebtoken2.sign)({}, "88f1c14bd2a14b42fad21d64739889e9", {
      subject: user.id,
      expiresIn: "1d"
    });
    const tokenResponse = {
      user: {
        name: user.name,
        id: user.id
      },
      token
    };
    return tokenResponse;
  }
};
userAuthenticateUseCase = __decorateClass([
  (0, import_tsyringe5.injectable)(),
  __decorateParam(0, (0, import_tsyringe5.inject)("UsersRepository"))
], userAuthenticateUseCase);

// src/Modules/Users/useCases/authenticate/createSessionUserController.ts
var SessionUserController = class {
  async handle(request, response) {
    const { email, password } = request.body;
    const sessionUserUseCase = import_tsyringe6.container.resolve(userAuthenticateUseCase);
    try {
      const user = await sessionUserUseCase.execute(email, password);
      return response.status(201).json(user);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
};

// src/Modules/Users/useCases/userInformations/UserInformationsController.ts
var import_tsyringe8 = require("tsyringe");

// src/Modules/Users/useCases/userInformations/UserInformationsUseCase.ts
var import_tsyringe7 = require("tsyringe");
var UserInformationsUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute(id) {
    const user = await this.usersRepository.findById(id);
    return user;
  }
};
UserInformationsUseCase = __decorateClass([
  (0, import_tsyringe7.injectable)(),
  __decorateParam(0, (0, import_tsyringe7.inject)("UsersRepository"))
], UserInformationsUseCase);

// src/Modules/Users/useCases/userInformations/UserInformationsController.ts
var UserInformationsController = class {
  async handle(request, response) {
    const userInformationUseCase = import_tsyringe8.container.resolve(UserInformationsUseCase);
    const { user } = request;
    try {
      const userInformation = await userInformationUseCase.execute(user.id);
      return response.json(userInformation);
    } catch (error) {
      return response.status(404).json({ error });
    }
  }
};

// src/Modules/Users/useCases/uploadUserAvatar/userAvatarController.ts
var import_tsyringe10 = require("tsyringe");

// src/Modules/Users/useCases/uploadUserAvatar/userAvatarUseCase.ts
var import_tsyringe9 = require("tsyringe");

// src/utils/file.ts
var import_fs = __toESM(require("fs"));
var deleteFile = async (filename) => {
  try {
    await import_fs.default.promises.stat(filename);
  } catch {
    return;
  }
  await import_fs.default.promises.unlink(filename);
};

// src/Modules/Users/useCases/uploadUserAvatar/userAvatarUseCase.ts
var UploadUserAvatarUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({ id, avatar_file }) {
    const user = await this.usersRepository.findById(id);
    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${avatar_file}`);
    }
    user.avatar = avatar_file;
    await this.usersRepository.create(user);
  }
};
UploadUserAvatarUseCase = __decorateClass([
  (0, import_tsyringe9.injectable)(),
  __decorateParam(0, (0, import_tsyringe9.inject)("UsersRepository"))
], UploadUserAvatarUseCase);

// src/Modules/Users/useCases/uploadUserAvatar/userAvatarController.ts
var UploadUserAvatarController = class {
  async handle(request, response) {
    const { id } = request.user;
    const uploadUserAvatarUseCase = import_tsyringe10.container.resolve(UploadUserAvatarUseCase);
    const avatar_file = request.file.filename;
    console.log(id);
    try {
      await uploadUserAvatarUseCase.execute({ id, avatar_file });
      return response.status(200).send();
    } catch (error) {
      return response.status(404).json(error);
    }
  }
};

// src/Modules/Users/useCases/deleteUser/deleteUserController.ts
var import_tsyringe12 = require("tsyringe");

// src/Modules/Users/useCases/deleteUser/deleteUserUseCase.ts
var import_tsyringe11 = require("tsyringe");
var DeleteUserUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({ id, user_id }) {
    const userAdmin = await this.usersRepository.findById(id);
    const user = await this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User not found").message;
    }
    if (!userAdmin.isAdmin == true) {
      throw new Error("You don't have permision to delete").message;
    }
    await this.usersRepository.delete(user_id);
  }
};
DeleteUserUseCase = __decorateClass([
  (0, import_tsyringe11.injectable)(),
  __decorateParam(0, (0, import_tsyringe11.inject)("UsersRepository"))
], DeleteUserUseCase);

// src/Modules/Users/useCases/deleteUser/deleteUserController.ts
var DeleteUserController = class {
  async handle(request, response) {
    const { id } = request.user;
    const { user_id } = request.body;
    const deleteUseCase = import_tsyringe12.container.resolve(DeleteUserUseCase);
    try {
      await deleteUseCase.execute({ id, user_id });
      return response.status(200).send();
    } catch (error) {
      return response.status(404).json(error);
    }
  }
};

// src/Modules/Users/useCases/turnAdmin/turnAdminController.ts
var import_tsyringe14 = require("tsyringe");

// src/Modules/Users/useCases/turnAdmin/turnAdminUseCase.ts
var import_tsyringe13 = require("tsyringe");
var TurnUserAdminUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(id) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error("User not found").message;
    }
    if (user.isAdmin == true) {
      throw new Error("This user already is an Admin").message;
    }
    user.isAdmin = true;
    await this.userRepository.create(user);
  }
};
TurnUserAdminUseCase = __decorateClass([
  (0, import_tsyringe13.injectable)(),
  __decorateParam(0, (0, import_tsyringe13.inject)("UsersRepository"))
], TurnUserAdminUseCase);

// src/Modules/Users/useCases/turnAdmin/turnAdminController.ts
var TurnUserAdminController = class {
  async handle(request, response) {
    const turnAdminUseCase = import_tsyringe14.container.resolve(TurnUserAdminUseCase);
    const { id } = request.body;
    try {
      await turnAdminUseCase.execute(id);
      return response.status(200).send();
    } catch (error) {
      return response.status(400).json(error);
    }
  }
};

// src/routes/users.routes.ts
var usersRoutes = (0, import_express.Router)();
var upload = (0, import_multer2.default)(upload_default.upload("./tmp/avatar"));
var createUsersController = new CreateUsersController();
var deleteUserController = new DeleteUserController();
var listUsersController = new ListUsersController();
var createSessionUserController = new SessionUserController();
var userInformationsController = new UserInformationsController();
var uploadAvatarController = new UploadUserAvatarController();
var turnUserAdminController = new TurnUserAdminController();
usersRoutes.post("/", createUsersController.handle);
usersRoutes.post("/authenticate", createSessionUserController.handle);
usersRoutes.get("/", ensureAuhenticate, listUsersController.handle);
usersRoutes.patch("/avatar", ensureAuhenticate, upload.single("avatar"), uploadAvatarController.handle);
usersRoutes.patch("/isAdmin", ensureAuhenticate, turnUserAdminController.handle);
usersRoutes.get("/profile", ensureAuhenticate, userInformationsController.handle);
usersRoutes.delete("/", ensureAuhenticate, deleteUserController.handle);

// src/database/index.ts
var import_typeorm3 = require("typeorm");
(0, import_typeorm3.getConnectionOptions)().then((options) => {
  const newOptions = options;
  newOptions.host = "apilogin_db";
  (0, import_typeorm3.createConnection)({
    ...options,
    entities: [
      User
    ]
  });
});

// src/shared/container/index.ts
var import_tsyringe15 = require("tsyringe");
import_tsyringe15.container.registerSingleton(
  "UsersRepository",
  UsersRepository
);

// src/server.ts
var app = (0, import_express2.default)();
app.use(import_express2.default.json());
app.use((0, import_cors.default)());
app.use("/users", usersRoutes);
app.listen(3333, () => console.log("Server runing!"));
