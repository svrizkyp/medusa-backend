import { Column, Entity } from "typeorm"
import {
  // alias the core entity to not cause a naming conflict
  Cart as MedusaCart,
} from "@medusajs/medusa"

@Entity()
export class Cart extends MedusaCart {
  @Column()
  ecommerce_type_id: number

  @Column()
  customer_name: string

  @Column()
  customer_company_name: string

  @Column()
  custom_feature: boolean

  @Column()
  themes_id: string
}