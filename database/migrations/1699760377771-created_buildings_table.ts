import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatedBuildingsTable1699760377771 implements MigrationInterface {
    name = 'CreatedBuildingsTable1699760377771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "building" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" integer NOT NULL, CONSTRAINT "UQ_57655499fbc0671a32732e63008" UNIQUE ("name"), CONSTRAINT "PK_bbfaf6c11f141a22d2ab105ee5f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "building"`);
    }

}
