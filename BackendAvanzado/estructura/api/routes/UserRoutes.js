import express from "express";
import * as userController from '../controllers/UserController.js'
import { createUserValidator } from "../middlewares/User/createUserValidator.js";
import { updateUserValidator } from "../middlewares/User/updateUserValidator.js";

const router = express.Router()

router.route('/user').post(createUserValidator, userController.create)
router.route('/users').get(userController.read)
router.route('/users/:id').get(userController.readById)
router.route('/updateUser/:id').put(updateUserValidator, userController.update)
router.route('/removeUser/:id').delete(userController.remove)

export default router