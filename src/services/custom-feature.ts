import { Lifetime } from "awilix"
import { CartService as MedusaCartService } from "@medusajs/medusa"
import { TransactionBaseService } from "@medusajs/medusa"
import { CustomFeatureRepository } from "../repositories/custom_feature";

class CustomFeatureService extends TransactionBaseService {
  static LIFE_TIME = Lifetime.SCOPED

  constructor({ manager }) {
    super({ manager });

    // this.customFeatureRepository = container.ecommerceTypeRepository;
    this.manager_ = manager;
  }

  async list() {
    const customFeatureRepo = this.manager_
      .withRepository(CustomFeatureRepository)
    return await customFeatureRepo.find()
  }

  async create(cart_id, feature_name, feature_desc, complexity, ui, be, url_web) {
    const customFeatureRepo = this.manager_
      .withRepository(CustomFeatureRepository)
    const customFeature = await customFeatureRepo.create({ cart_id: cart_id, feature_name: feature_name,
    feature_desc: feature_desc, complexity: complexity, ui: ui, be: be, url_web: url_web });
    return await customFeatureRepo.save(customFeature);
  }

  async update(id,cart_id, feature_name, feature_desc, complexity, ui, be, url_web) {
    const customFeatureRepo = this.manager_
      .withRepository(CustomFeatureRepository)
    return await customFeatureRepo.update({
      id: id,
    }, {
      cart_id: cart_id,
      feature_name: feature_name,
      feature_desc:feature_desc,
      complexity: complexity,
      ui: ui,
      be:be,
      url_web:url_web
    });
  }

  async delete(id) {
    const customFeatureRepo = this.manager_
      .withRepository(CustomFeatureRepository)
    return await customFeatureRepo.delete({ id })
  }

}
export default CustomFeatureService