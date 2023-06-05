import { Router } from "express"
import * as bodyParser from "body-parser"

// export default (rootDirectory: string): Router | Router[] => {
//   // add your custom routes here
//   return []
// }

export default () => {
  const router = Router();

//Ecommerce Type
  router.post('/store/ecommerce-type', bodyParser.json(), async (req, res) => {
    const astroService = req.scope.resolve('astroService');
    const { name, description, image } = req.body;
    if (!name) {
      res.status(400).json({
        msg: 'Name not supplied.',
      });
      return;
    }
    if (!description) {
      res.status(400).json({
        msg: 'Description not supplied.',
      });
      return;
    }
    if (!image) {
      res.status(400).json({
        msg: 'Image not supplied.',
      });
      return;
    }
    await astroService.create(name, description, image);
    res.json(await astroService.list());
  });

  router.post('/store/ecommerce-type/:id', bodyParser.json(), async (req, res) => {
    const astroService = req.scope.resolve('astroService');
    const { name, description, image } = req.body;
    const type_id = req.params.id;
    if (!name) {
      res.status(400).json({
        msg: 'Name not supplied.',
      });
      return;
    }
    if (!description) {
      res.status(400).json({
        msg: 'Description not supplied.',
      });
      return;
    }
    if (!image) {
      res.status(400).json({
        msg: 'Image not supplied.',
      });
      return;
    }
    await astroService.update(type_id, name, description, image);
    res.json(await astroService.list());
  });

  router.get('/store/ecommerce-type', async (req, res) => {
    const astroService = req.scope.resolve('astroService');
    res.json(await astroService.list());
  });

  router.delete('/store/ecommerce-type/:id', async (req, res) => {
    const astroService = req.scope.resolve('astroService');
    const type_id = req.params.id;
    await astroService.delete(type_id);
    res.json(await astroService.list());
  });

  router.get('/store/cart-line-item/:id', async (req, res) => {
    const astroService = req.scope.resolve('astroService');
    const cartId = req.params.id;
    res.json(await astroService.listLineItem(cartId));
  });

  router.post('/store/update-line-item/:id', bodyParser.json(), async (req, res) => {
    const astroService = req.scope.resolve('astroService');
    const { note } = req.body;
    const itemId = req.params.id;
    await astroService.updateLineItem(itemId, note);
    res.json({msg: 'Success',});
  });

  //Custom Feature
  router.post('/store/custom-feature', bodyParser.json(), async (req, res) => {
    const customFeatureService = req.scope.resolve('customFeatureService');
    const { cart_id, feature_name, feature_desc, complexity, ui, be, url_web } = req.body;
    if (!cart_id) {
      res.status(400).json({
        msg: 'Cart id not supplied.',
      });
      return;
    }
    if (!feature_name) {
      res.status(400).json({
        msg: 'Feature name not supplied.',
      });
      return;
    }
    if (!feature_desc) {
      res.status(400).json({
        msg: 'Feature desc not supplied.',
      });
      return;
    }
    if (complexity == null) {
      res.status(400).json({
        msg: 'Complexity not supplied.',
      });
      return;
    }
    if (ui == null) {
      res.status(400).json({
        msg: 'User interface not supplied.',
      });
      return;
    }
    if (be == null) {
      res.status(400).json({
        msg: 'Backend not supplied.',
      });
      return;
    }
    if (!url_web) {
      res.status(400).json({
        msg: 'Url web not supplied.',
      });
      return;
    }
    await customFeatureService.create(cart_id, feature_name, feature_desc, complexity, ui, be, url_web);
    res.json(await customFeatureService.list());
  });

  router.post('/store/custom-feature/:id', bodyParser.json(), async (req, res) => {
    const customFeatureService = req.scope.resolve('customFeatureService');
    const { cart_id, feature_name, feature_desc, complexity, ui, be, url_web } = req.body;
    const custom_id = req.params.id;
    if (!cart_id) {
      res.status(400).json({
        msg: 'Cart id not supplied.',
      });
      return;
    }
    if (!feature_name) {
      res.status(400).json({
        msg: 'Feature name not supplied.',
      });
      return;
    }
    if (!feature_desc) {
      res.status(400).json({
        msg: 'Feature desc not supplied.',
      });
      return;
    }
    if (complexity == null) {
      res.status(400).json({
        msg: 'Complexity not supplied.',
      });
      return;
    }
    if (ui == null) {
      res.status(400).json({
        msg: 'User interface not supplied.',
      });
      return;
    }
    if (be == null) {
      res.status(400).json({
        msg: 'Backend not supplied.',
      });
      return;
    }
    if (!url_web) {
      res.status(400).json({
        msg: 'Url web not supplied.',
      });
      return;
    }
    await customFeatureService.update(custom_id, cart_id, feature_name, feature_desc, complexity, ui, be, url_web);
    res.json(await customFeatureService.list());
  });

  router.get('/store/custom-feature', async (req, res) => {
    const customFeatureService = req.scope.resolve('customFeatureService');
    res.json(await customFeatureService.list());
  });

  router.delete('/store/custom-feature/:id', async (req, res) => {
    const customFeatureService = req.scope.resolve('customFeatureService');
    const custom_id = req.params.id;
    await customFeatureService.delete(custom_id);
    res.json(await customFeatureService.list());
  });

    //Custom Order
    router.post('/store/custom-order/:id', bodyParser.json(), async (req, res) => {
    const customOrderService = req.scope.resolve('customOrderService');
    const { ecommerce_type_id, custom_feature, themes_id, payment_term } = req.body;
    const custom_order_id = req.params.id;
    if (!ecommerce_type_id) {
      res.status(400).json({
        msg: 'Ecommerce type not supplied.',
      });
      return;
    }
    if (!themes_id) {
      res.status(400).json({
        msg: 'Themes not supplied.',
      });
      return;
    }
    if (!payment_term) {
      res.status(400).json({
        msg: 'Payment term not supplied.',
      });
      return;
    }
    await customOrderService.update(custom_order_id, ecommerce_type_id, custom_feature, themes_id, payment_term);
    res.json({msg: 'Success',});
  });
  return router;
};