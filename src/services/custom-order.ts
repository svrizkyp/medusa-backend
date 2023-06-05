import { Lifetime } from "awilix"
import { OrderService as MedusaOrderService } from "@medusajs/medusa"
import { TransactionBaseService } from "@medusajs/medusa"
import { OrderRepository } from "../repositories/order";

class CustomOrderService extends TransactionBaseService {
  static LIFE_TIME = Lifetime.SCOPED

  constructor({ manager }) {
    super({ manager });
    this.manager_ = manager;
  }

  async update(id, ecommerce_type_id, custom_feature, themes_id, payment_term) {
    const customOrderRepo = this.manager_
      .withRepository(OrderRepository)
      if (!custom_feature) {
        custom_feature = null;
      }
    return await customOrderRepo.update({
      id: id,
    }, {
      ecommerce_type_id: ecommerce_type_id,
      custom_feature: custom_feature,
      themes_id:themes_id,
      payment_term: payment_term
    });
  }


}
export default CustomOrderService