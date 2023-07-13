import { MigrationInterface, QueryRunner } from "typeorm";

export class Amountfieldchangedtodecimalbilling1689216707069 implements MigrationInterface {
    name = 'Amountfieldchangedtodecimalbilling1689216707069'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "billing" ADD "amount" numeric(10,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "billing" ADD "amount" integer NOT NULL`);
    }

}
