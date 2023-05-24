import { MigrationInterface, QueryRunner } from "typeorm"

class fixCustomFeature1680013376180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"custom_feature\"" +
      " DROP COLUMN \"complexity\""
    )

    await queryRunner.query(
      "ALTER TABLE \"custom_feature\"" + 
      " ADD COLUMN \"complexity\" int" 
    )
    await queryRunner.query(
      "ALTER TABLE \"custom_feature\"" + 
      " ALTER COLUMN \"ui\" TYPE text" 
    )
    await queryRunner.query(
      "ALTER TABLE \"custom_feature\"" + 
      " ALTER COLUMN \"be\" TYPE text" 
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    
  }
}

export default fixCustomFeature1680013376180