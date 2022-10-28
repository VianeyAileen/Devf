import express from 'express';
import * as itemController from '../controllers/ItemController.js'
import { createItemValidator } from '../middlewares/Item/createItemValidator.js';
import { updateItemValidator } from '../middlewares/Item/updateItemValidator.js';

const router = express.Router()

router.route('/item').post(createItemValidator ,itemController.create)
router.route('/items').get(itemController.read)
router.route('/item/:id').get(itemController.readById)
router.route('/updateItem/:id').put(updateItemValidator, itemController.update)
router.route('/removeItem/:id').delete(itemController.remove)

export default router