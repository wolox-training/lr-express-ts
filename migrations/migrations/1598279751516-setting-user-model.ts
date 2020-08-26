import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class SettingUserModel1598279751516 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('User', 'username', 'name');

    await queryRunner.addColumn(
      'User',
      new TableColumn({
        name: 'lastname',
        type: 'varchar',
        isNullable: false
      })
    );

    await queryRunner.addColumn(
      'User',
      new TableColumn({
        name: 'email',
        type: 'varchar',
        isUnique: true,
        isNullable: false
      })
    );

    await queryRunner.addColumn(
      'User',
      new TableColumn({
        name: 'password',
        type: 'varchar',
        isNullable: false
      })
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('User', 'name', 'username');
    await queryRunner.dropColumn('User', 'latname');
    await queryRunner.dropColumn('User', 'email');
    await queryRunner.dropColumn('User', 'password');
  }
}
