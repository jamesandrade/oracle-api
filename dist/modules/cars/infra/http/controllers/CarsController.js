"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _CreateCarService = _interopRequireDefault(require("../../../services/CreateCarService"));

var _DestroyCarService = _interopRequireDefault(require("../../../services/DestroyCarService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CarsController {
  async create(req, res) {
    const {
      mark,
      model
    } = req.body;

    const createCar = _tsyringe.container.resolve(_CreateCarService.default);

    const car = await createCar.execute({
      mark,
      model
    });
    return res.json((0, _classTransformer.classToClass)(car));
  } // eslint-disable-next-line class-methods-use-this


  async destroy(req, res) {
    const car_id = req.params.id;

    const destroyCar = _tsyringe.container.resolve(_DestroyCarService.default);

    const car = await destroyCar.execute({
      car_id
    });
    return res.status(200).json({
      car
    });
  }

}

exports.default = CarsController;