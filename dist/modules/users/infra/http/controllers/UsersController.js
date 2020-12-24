"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _CreateUserService = _interopRequireDefault(require("../../../services/CreateUserService"));

var _DestroyUserService = _interopRequireDefault(require("../../../services/DestroyUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UsersController {
  async create(req, res) {
    const {
      name,
      email,
      telefone
    } = req.body;

    const createUser = _tsyringe.container.resolve(_CreateUserService.default);

    const user = await createUser.execute({
      name,
      email,
      telefone
    });
    return res.json((0, _classTransformer.classToClass)(user));
  } // eslint-disable-next-line class-methods-use-this


  async destroy(req, res) {
    const user_id = req.params.id;

    const destroyUser = _tsyringe.container.resolve(_DestroyUserService.default);

    const user = await destroyUser.execute({
      user_id
    });
    return res.status(200).json({
      user
    });
  }

}

exports.default = UsersController;