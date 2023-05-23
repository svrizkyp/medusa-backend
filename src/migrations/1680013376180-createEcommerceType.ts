import { MigrationInterface, QueryRunner } from "typeorm"

class createEcommerceType1680013376180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
        `CREATE TABLE IF NOT EXISTS "ecommerce_type" (
            "id" character varying NOT NULL,
            "name" character varying NOT NULL,
            "description" character varying NOT NULL,
            "image" character varying NOT NULL,
            "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
        )`
    )
    await queryRunner.createPrimaryKey("ecommerce_type", ["id"])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("ecommerce_type", true)
  }
}

export default createEcommerceType1680013376180