import { MigrationInterface, QueryRunner } from "typeorm";

export class Billing1688863127624 implements MigrationInterface {
    name = 'Billing1688863127624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "billing" ("id" SERIAL NOT NULL, "invoiceNumber" integer NOT NULL, "customerId" integer NOT NULL, "amount" numeric(2,2) NOT NULL, "coinType" character varying NOT NULL, "literal" character varying NOT NULL, "billingMonth" character varying NOT NULL, "billingYear" character varying NOT NULL, "floor" character varying NOT NULL, "paymentMethod" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_4232c94bd144901b93b50065938" UNIQUE ("invoiceNumber"), CONSTRAINT "PK_d9043caf3033c11ed3d1b29f73c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "billingType" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_c61c93ed5458a95078c22a548be" UNIQUE ("name"), CONSTRAINT "PK_2357235681ce2198ae90667e767" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "billing" ADD CONSTRAINT "FK_578708a868391988c279cf8ee7b" FOREIGN KEY ("customerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "billing" DROP CONSTRAINT "FK_578708a868391988c279cf8ee7b"`);
        await queryRunner.query(`DROP TABLE "billingType"`);
        await queryRunner.query(`DROP TABLE "billing"`);
    }

}
