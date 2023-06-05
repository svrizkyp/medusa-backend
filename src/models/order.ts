import { Column, Entity } from "typeorm"
import {
  // alias the core entity to not cause a naming conflict
  Order as MedusaOrder,
} from "@medusajs/medusa"

@Entity()
export class Order extends MedusaOrder {
  @Column()
  ecommerce_type_id: number

  @Column()
  custom_feature: boolean

  @Column()
  themes_id: string

  @Column()
  payment_term: string
}