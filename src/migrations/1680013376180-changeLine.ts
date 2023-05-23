import { MigrationInterface, QueryRunner } from "typeorm"

class changeLine1680013376180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"line_item\"" + 
      " ADD COLUMN \"note\" text" 
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"line_item\"" +
      " DROP COLUMN \"note\"" 
    )
  }
}

export default changeLine1680013376180