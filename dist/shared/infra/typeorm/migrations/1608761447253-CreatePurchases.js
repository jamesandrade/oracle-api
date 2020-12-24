"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePurchases1608761447253 = void 0;

var _typeorm = require("typeorm");

class CreatePurchases1608761447253 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'purchases',
      columns: [{
        name: 'purchase_id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment"
      }, {
        name: 'value',
        type: 'number'
      }, {
        name: 'email',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'telefone',
        type: 'varchar'
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

  async down(queryRunner) {}

}

exports.CreatePurchases1608761447253 = CreatePurchases1608761447253;