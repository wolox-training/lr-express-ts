import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class SettingusersModel1598279751516 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('users', 'usersname', 'name');

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'last_name',
        type: 'varchar',
        isNullable: false
      })
    );

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'email',
        type: 'varchar',
        isUnique: true,
        isNullable: false
      })
    );

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'password',
        type: 'varchar',
        isNullable: false
      })
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('users', 'name', 'usersname');
    await queryRunner.dropColumn('users', 'last_name');
    await queryRunner.dropColumn('users', 'email');
    await queryRunner.dropColumn('users', 'password');
  }
}
