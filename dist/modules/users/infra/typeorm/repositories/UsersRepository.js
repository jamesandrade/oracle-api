"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../entities/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UsersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_User.default);
  }

  async findById(id) {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  async findByEmail(email) {
    const user = await this.ormRepository.findOne({
      where: {
        email
      }
    });
    return user;
  }

  async findByTelefone(telefone) {
    const user = await this.ormRepository.findOne({
      where: {
        telefone
      }
    });
    return user;
  }

  async findByCpf(cpf) {
    const user = await this.ormRepository.findOne({
      where: {
        cpf
      }
    });
    return user;
  }

  async create({
    name,
    email,
    telefone
  }) {
    const user = this.ormRepository.create({
      name,
      email,
      telefone
    });
    await this.ormRepository.save(user);
    return user;
  }

  async save(user) {
    return this.ormRepository.save(user);
  }

  async destroy(user_id) {
    this.ormRepository.delete(user_id);
    return user_id;
  }

  async count() {
    const numberOfUsers = await this.ormRepository.count();
    return numberOfUsers;
  }

}

var _default = UsersRepository;
exports.default = _default;