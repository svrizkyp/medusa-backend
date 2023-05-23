import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { BaseEntity} from "@medusajs/medusa";
import { generateEntityId } from "@medusajs/medusa/dist/utils"

@Entity()
export class CustomFeature extends BaseEntity {

    @Column({type: 'varchar'})
    cart_id: string | null;

    @Column({type: 'varchar'})
    feature_name: string | null;

    @Column({type: 'varchar'})
    feature_desc: string | null;

    @Column({type: 'varchar'})
    complexity: number | null;

    @Column({type: 'varchar'})
    ui: boolean | null;

    @Column({type: 'varchar'})
    be: boolean | null;

    @Column({type: 'varchar'})
    url_web: string | null;

    @BeforeInsert()
    private beforeInsert(): void {
        this.id = generateEntityId(this.id, "custom_feature")
    }
}