import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { columnId, createdAt, updatedAt, varchar } from '../columns';

export class Users1646350668751 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          columnId,
          {
            name: 'email',
            type: 'VARCHAR',
            length: '255',
            isNullable: false,
            isUnique: true,
          },
          varchar('password'),
          {
            name: 'admin',
            type: 'tinyint',
            default: 0,
          },
          createdAt,
          updatedAt,
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
