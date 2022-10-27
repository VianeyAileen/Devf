import express from 'express';
import * as itemController from '../controllers/ItemController.js'

const router = express.Router()

router.route('/item').post(itemController.create)
router.route('/items').get(itemController.read)
router.route('/item/:id').get(itemController.readById)
router.route('/updateItem/:id').put(itemController.update)
router.route('/removeItem/:id').delete(itemController.remove)

export default router