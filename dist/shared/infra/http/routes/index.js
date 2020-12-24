"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _users = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/users.routes"));

var _cars = _interopRequireDefault(require("../../../../modules/cars/infra/http/routes/cars.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/users', _users.default);
routes.use('/cars', _cars.default);
var _default = routes;
exports.default = _default;