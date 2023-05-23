import { MigrationInterface, QueryRunner } from "typeorm"

class changeCustomer1680013376180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"customer\"" + 
      " ADD COLUMN \"companyName\" text"
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"customer\" DROP COLUMN \"companyName\""
    )
  }
}

export default changeCustomer1680013376180