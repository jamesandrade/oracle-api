"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _CarsController = _interopRequireDefault(require("../controllers/CarsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const carsRouter = (0, _express.Router)();
const carsController = new _CarsController.default();
carsRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    mark: _celebrate.Joi.string().required(),
    model: _celebrate.Joi.string()
  }
}), carsController.create);
carsRouter.delete('/:id', carsController.destroy);
var _default = carsRouter;
exports.default = _default;