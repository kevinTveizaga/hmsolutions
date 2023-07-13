import { MigrationInterface, QueryRunner } from "typeorm";

export class Amountfieldchangedtodecimalbilling1689217042595 implements MigrationInterface {
    name = 'Amountfieldchangedtodecimalbilling1689217042595'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "billing" ADD "amount" numeric(10,2) NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "billing" ADD "amount" integer NOT NULL`);
    }

}
