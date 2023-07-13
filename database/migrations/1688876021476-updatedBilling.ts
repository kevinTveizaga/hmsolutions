import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatedBilling1688876021476 implements MigrationInterface {
    name = 'UpdatedBilling1688876021476'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" ADD "room" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "billing" DROP COLUMN "billingYear"`);
        await queryRunner.query(`ALTER TABLE "billing" ADD "billingYear" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" DROP COLUMN "billingYear"`);
        await queryRunner.query(`ALTER TABLE "billing" ADD "billingYear" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "billing" DROP COLUMN "room"`);
    }

}
