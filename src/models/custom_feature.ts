import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { BaseEntity} from "@medusajs/medusa";
import { generateEntityId } from "@medusajs/medusa/dist/utils"

@Entity()
export class CustomFeature extends BaseEntity {

    @Column()
    cart_id: string;

    @Column()
    feature_name: string;

    @Column()
    feature_desc: string;

    @Column()
    complexity: number;

    @Column()
    ui: number;

    @Column()
    be: number;

    @Column()
    url_web: string;

    @BeforeInsert()
    private beforeInsert(): void {
        this.id = generateEntityId(this.id, "custom_feature")
    }
}