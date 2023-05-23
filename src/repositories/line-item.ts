import { LineItem } from "../models/line-item"
import { 
  dataSource,
} from "@medusajs/medusa/dist/loaders/database"
import {
  // alias the core repository to not cause a naming conflict
  LineItemRepository as MedusaLineItemRepository,
} from "@medusajs/medusa/dist/repositories/line-item"

export const LineItemRepository = dataSource
  .getRepository(LineItem)
  .extend({
    // it is important to spread the existing repository here.
    // Otherwise you will end up losing core properties.
    // you also update the target to the extended entity
    ...Object.assign(
      MedusaLineItemRepository, 
      { target: LineItem }
    ),
      
    // you can add other customizations as well...
  })

export default LineItemRepository