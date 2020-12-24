import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePurchases1608761447253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'purchases',
          columns: [
            {
              name: 'purchase_id',
              type: 'integer',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: "increment",
            },
            {
              name: 'value',
              type: 'number',
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

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
