import { Customer } from "../models/customer"
import { 
  dataSource,
} from "@medusajs/medusa/dist/loaders/database"
import {
  // alias the core repository to not cause a naming conflict
  CustomerRepository as MedusaCustomerRepository,
} from "@medusajs/medusa/dist/repositories/customer"

export const CustomerRepository = dataSource
  .getRepository(Customer)
  .extend({
    // it is important to spread the existing repository here.
    // Otherwise you will end up losing core properties.
    // you also update the target to the extended entity
    ...Object.assign(
      MedusaCustomerRepository, 
      { target: Customer }
    ),
      
    // you can add other customizations as well...
  })

export default CustomerRepository