"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    name,
    email,
    telefone
  }) {
    let checkUserExists;

    if (email) {
      checkUserExists = await this.usersRepository.findByEmail(email);
    }

    if (checkUserExists) {
      throw new _AppError.default('Este email já se encontra em uso');
    }

    checkUserExists = await this.usersRepository.findByTelefone(telefone);

    if (checkUserExists) {
      throw new _AppError.default('Este telefone já se encontra em uso');
    }

    const user = await this.usersRepository.create({
      name,
      email,
      telefone
    });
    return user;
  }

}) || _class) || _class) || _class) || _class);
var _default = CreateUserService;
exports.default = _default;