import { MigrationInterface, QueryRunner } from "typeorm"

class changeCart21680013376180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"cart\"" + 
      " ADD COLUMN \"themes_id\" text"  
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"cart\"" +
      " DROP COLUMN \"themes_id\""
    )
  }
}

export default changeCart21680013376180