import { Column, Entity } from "typeorm"
import {
  // alias the core entity to not cause a naming conflict
  LineItem as MedusaLineItem,
} from "@medusajs/medusa"

@Entity()
export class LineItem extends MedusaLineItem {
  @Column()
  note: string
}