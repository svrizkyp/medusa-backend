import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { BaseEntity} from "@medusajs/medusa";
import { generateEntityId } from "@medusajs/medusa/dist/utils"

@Entity()
export class EcommerceType extends BaseEntity {
    @Column({type: 'varchar'})
    name: string | null;

    @Column({type: 'varchar'})
    description: string | null;

    @Column({type: 'varchar'})
    image: string | null;

    @BeforeInsert()
    private beforeInsert(): void {
        this.id = generateEntityId(this.id, "ecommerce_type")
    }
}