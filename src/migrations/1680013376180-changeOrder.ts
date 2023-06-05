import { MigrationInterface, QueryRunner } from "typeorm"

class changeOrder1680013376180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"order\"" + 
      " ADD COLUMN \"ecommerce_type_id\" int," +
      " ADD COLUMN \"payment_term\" text," +
      " ADD COLUMN \"themes_id\" text," +
      " ADD COLUMN \"custom_feature\" text" 
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"order\"" +
      " DROP COLUMN \"ecommerce_type_id\"" +
      " DROP COLUMN \"payment_term\"" +
      " DROP COLUMN \"themes_id\"" +
      " DROP COLUMN \"custom_feature\"" 
    )
  }
}

export default changeOrder1680013376180