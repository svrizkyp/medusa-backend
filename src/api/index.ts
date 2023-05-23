import { Router } from "express"
import * as bodyParser from "body-parser"

// export default (rootDirectory: string): Router | Router[] => {
//   // add your custom routes here
//   return []
// }

export default () => {
  const router = Router();

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

  return router;
};