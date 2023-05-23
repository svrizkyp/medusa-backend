import { EntityRepository, Repository } from 'typeorm';
import { 
  dataSource,
} from "@medusajs/medusa/dist/loaders/database"
import { EcommerceType } from '../models/ecommerce_type';

export const EcommerceTypeRepository = dataSource
  .getRepository(EcommerceType)

export default EcommerceTypeRepository