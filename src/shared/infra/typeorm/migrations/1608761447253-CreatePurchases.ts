import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

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
              name: 'user_id',
              type: 'integer',
            },
            {
              name: 'car_id',
              type: 'integer',
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
        foreignKeys: [
          {
            name: 'purchaseuser',
            referencedTableName: 'users',
            referencedColumnNames: ['user_id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'purchasecar',
            referencedTableName: 'cars',
            referencedColumnNames: ['car_id'],
            columnNames: ['car_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('purchases', 'PurchaseUser');
      await queryRunner.dropForeignKey('purchases', 'PurchaseCar');
      await queryRunner.dropTable('purchases');
    }
}
