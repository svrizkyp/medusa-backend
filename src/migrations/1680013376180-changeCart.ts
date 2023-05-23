import { MigrationInterface, QueryRunner } from "typeorm"

class changeCart1680013376180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"cart\"" + 
      " ADD COLUMN \"customer_company_name\" text," +
      " ADD COLUMN \"customer_name\" text," +
      " ADD COLUMN \"ecommerce_type_id\" int," +
      " ADD COLUMN \"custom_feature\" text" 
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"cart\"" +
      " DROP COLUMN \"customer_company_name\"" +
      " DROP COLUMN \"customer_name\"" +
      " DROP COLUMN \"ecommerce_type_id\"" +
      " DROP COLUMN \"custom_feature\"" 
    )
  }
}

export default changeCart1680013376180