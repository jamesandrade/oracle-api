"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateCars1608689109598 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'cars',
      columns: [{
        name: 'car_id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment"
      }, {
        name: 'mark',
        type: 'varchar'
      }, {
        name: 'model',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'created_at',
        type: 'TIMESTAMP WITH TIME ZONE',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'updated_at',
        type: 'TIMESTAMP WITH TIME ZONE',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('cars');
  }

}

exports.default = CreateCars1608689109598;