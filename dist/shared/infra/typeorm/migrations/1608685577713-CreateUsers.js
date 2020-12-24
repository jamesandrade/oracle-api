"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateUsers1597080325949 {
  // eslint-disable-next-line class-methods-use-this
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'users',
      columns: [{
        name: 'user_id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment"
      }, {
        name: 'name',
        type: 'varchar'
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
  } // eslint-disable-next-line class-methods-use-this


  async down(queryRunner) {
    await queryRunner.dropTable('users');
  }

}

exports.default = CreateUsers1597080325949;