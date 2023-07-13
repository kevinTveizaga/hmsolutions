import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatedfieldtypeBillingtable11689207955926 implements MigrationInterface {
    name = 'UpdatedfieldtypeBillingtable11689207955926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "billing" ADD "amount" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "billing" ADD "amount" numeric(2,2) NOT NULL`);
    }

}
