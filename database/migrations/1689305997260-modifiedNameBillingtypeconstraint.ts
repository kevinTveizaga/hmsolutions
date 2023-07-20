import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifiedNameBillingtypeconstraint1689305997260 implements MigrationInterface {
    name = 'ModifiedNameBillingtypeconstraint1689305997260'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" ADD "bililngType" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "billing" ADD "billingTypeId" integer`);
        await queryRunner.query(`ALTER TABLE "billingType" DROP CONSTRAINT "UQ_c61c93ed5458a95078c22a548be"`);
        await queryRunner.query(`ALTER TABLE "billing" ADD CONSTRAINT "FK_7ecb4095da2f72b289d176083a5" FOREIGN KEY ("billingTypeId") REFERENCES "billingType"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" DROP CONSTRAINT "FK_7ecb4095da2f72b289d176083a5"`);
        await queryRunner.query(`ALTER TABLE "billingType" ADD CONSTRAINT "UQ_c61c93ed5458a95078c22a548be" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "billing" DROP COLUMN "billingTypeId"`);
        await queryRunner.query(`ALTER TABLE "billing" DROP COLUMN "bililngType"`);
    }

}
