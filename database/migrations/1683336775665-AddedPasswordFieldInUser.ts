import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedPasswordFieldInUser1683336775665 implements MigrationInterface {
    name = 'AddedPasswordFieldInUser1683336775665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
