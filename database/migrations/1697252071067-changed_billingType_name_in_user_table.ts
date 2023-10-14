import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangedBillingTypeNameInUserTable1697252071067 implements MigrationInterface {
    name = 'ChangedBillingTypeNameInUserTable1697252071067'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" RENAME COLUMN "bililngType" TO "billingType"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" RENAME COLUMN "billingType" TO "bililngType"`);
    }

}
