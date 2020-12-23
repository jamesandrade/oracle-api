import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCars1608689109598 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cars',
        columns: [
          {
            name: 'car_id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: 'mark',
            type: 'varchar',
          },
          {
            name: 'model',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'TIMESTAMP WITH TIME ZONE',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'TIMESTAMP WITH TIME ZONE',
            default: 'CURRENT_TIMESTAMP',
          }
        ],
      }),
    );
  }

public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cars');
  }
}
