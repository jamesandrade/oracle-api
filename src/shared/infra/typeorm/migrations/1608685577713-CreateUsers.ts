import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1597080325949 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'user_id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'telefone',
            type: 'varchar',
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

  // eslint-disable-next-line class-methods-use-this
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
