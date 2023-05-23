import { Lifetime } from "awilix"
import { CartService as MedusaCartService } from "@medusajs/medusa"
import { TransactionBaseService } from "@medusajs/medusa"
import { EcommerceTypeRepository } from "../repositories/ecommerce_type";
import { LineItemRepository } from "../repositories/line-item"

class AstroService extends TransactionBaseService {
  static LIFE_TIME = Lifetime.SCOPED

  constructor({ manager }) {
    super({ manager });

    // this.ecommerceTypeRepository = container.ecommerceTypeRepository;
    this.manager_ = manager;
  }

  async list() {
    const ecommerceTypeRepo = this.manager_
      .withRepository(EcommerceTypeRepository)
    return await ecommerceTypeRepo.find()
  }

  async create(name,description,image) {
    const ecommerceTypeRepo = this.manager_
      .withRepository(EcommerceTypeRepository)
    const ecommerceType = await ecommerceTypeRepo.create({ name: name, description: description, image: image });
    return await ecommerceTypeRepo.save(ecommerceType);
  }

  async update(id,name,description,image) {
    const ecommerceTypeRepo = this.manager_
      .withRepository(EcommerceTypeRepository)
    return await ecommerceTypeRepo.update({
      id: id,
    }, {
      name: name,
      description: description,
      image:image
    });
  }

  async delete(id) {
    const ecommerceTypeRepo = this.manager_
      .withRepository(EcommerceTypeRepository)
    return await ecommerceTypeRepo.delete({ id })
  }

  async listLineItem(cartId) {
    const lineItemRepo = this.manager_
      .withRepository(LineItemRepository)
    return await lineItemRepo.findBy({
      cart_id: cartId
    })
  }

  async updateLineItem(itemId,note) {
    const lineItemRepo = this.manager_
      .withRepository(LineItemRepository)
      if (!note) {
        note = null;
      }
    return await lineItemRepo.update({
      id: itemId
    }, {
      note: note
    });
  }

}
export default AstroService