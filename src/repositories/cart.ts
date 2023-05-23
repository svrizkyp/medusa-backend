import { Cart } from "../models/cart"
import { 
  dataSource,
} from "@medusajs/medusa/dist/loaders/database"
import {
  // alias the core repository to not cause a naming conflict
  CartRepository as MedusaCartRepository,
} from "@medusajs/medusa/dist/repositories/cart"

export const CartRepository = dataSource
  .getRepository(Cart)
  .extend({
    // it is important to spread the existing repository here.
    // Otherwise you will end up losing core properties.
    // you also update the target to the extended entity
    ...Object.assign(
      MedusaCartRepository, 
      { target: Cart }
    ),
      
    // you can add other customizations as well...
  })

export default CartRepository