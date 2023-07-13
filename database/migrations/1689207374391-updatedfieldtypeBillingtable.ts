import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatedfieldtypeBillingtable1689207374391 implements MigrationInterface {
    name = 'UpdatedfieldtypeBillingtable1689207374391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" DROP COLUMN "floor"`);
        await queryRunner.query(`ALTER TABLE "billing" ADD "floor" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" DROP COLUMN "floor"`);
        await queryRunner.query(`ALTER TABLE "billing" ADD "floor" character varying NOT NULL`);
    }

}
