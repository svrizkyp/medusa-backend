import { MigrationInterface, QueryRunner } from "typeorm"

class createCustomFeature1680013376180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
        `CREATE TABLE IF NOT EXISTS "custom_feature" (
            "id" character varying NOT NULL,
            "cart_id" character varying NOT NULL,
            "feature_name" character varying NOT NULL,
            "feature_desc" character varying NOT NULL,
            "complexity" character varying NOT NULL,
            "ui" character varying NOT NULL,
            "be" character varying NOT NULL,
            "url_web" character varying NOT NULL,
            "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
        )`
    )
    await queryRunner.createPrimaryKey("custom_feature", ["id"])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("custom_feature", true)
  }
}

export default createCustomFeature1680013376180