"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Car = _interopRequireDefault(require("../entities/Car"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CarsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Car.default);
  }

  async findById(car_id) {
    const car = await this.ormRepository.findOne(car_id);
    return car;
  }

  async findMark(mark) {
    const car = await this.ormRepository.findOne(mark);
    return car;
  }

  async findAllToMark(mark) {
    const car = await this.ormRepository.find({
      where: {
        mark
      }
    });
    return car;
  }

  async create({
    mark,
    model
  }) {
    const car = this.ormRepository.create({
      mark,
      model
    });
    await this.ormRepository.save(car);
    return car;
  }

  async save(car) {
    return this.ormRepository.save(car);
  }

  async destroy(car_id) {
    this.ormRepository.delete(car_id);
    return car_id;
  }

}

var _default = CarsRepository;
exports.default = _default;