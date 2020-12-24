"use strict";

var _tsyringe = require("tsyringe");

var _UsersRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UsersRepository"));

var _CarsRepository = _interopRequireDefault(require("../../modules/cars/infra/typeorm/repositories/CarsRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.default);

_tsyringe.container.registerSingleton('CarsRepository', _CarsRepository.default);