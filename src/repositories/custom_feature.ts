import { EntityRepository, Repository } from 'typeorm';
import { 
  dataSource,
} from "@medusajs/medusa/dist/loaders/database"
import { CustomFeature } from '../models/custom_feature';

export const CustomFeatureRepository = dataSource
  .getRepository(CustomFeature)

export default CustomFeatureRepository