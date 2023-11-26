import { MigrationInterface, QueryRunner } from "typeorm";

export class ModificadoRolesTable1701018945914 implements MigrationInterface {
    name = 'ModificadoRolesTable1701018945914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rol" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "rol" ADD "is_admin" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "rol" ADD "water_bill" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "rol" ADD "system_settings" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "rol" ADD "reports" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "rol" ADD "user_settings" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rol" DROP COLUMN "user_settings"`);
        await queryRunner.query(`ALTER TABLE "rol" DROP COLUMN "reports"`);
        await queryRunner.query(`ALTER TABLE "rol" DROP COLUMN "system_settings"`);
        await queryRunner.query(`ALTER TABLE "rol" DROP COLUMN "water_bill"`);
        await queryRunner.query(`ALTER TABLE "rol" DROP COLUMN "is_admin"`);
        await queryRunner.query(`ALTER TABLE "rol" ADD "description" character varying NOT NULL`);
    }

}
