import express from 'express'
import * as ticketController from '../controllers/TicketController.js'

const router = express.Router()

router.route('/ticket').post(ticketController.create)
router.route('/tickets').get(ticketController.read)
router.route('/tickets/:id').get(ticketController.readById)
router.route('/ticket/:id').put(ticketController.update)
router.route('/ticket/:id').delete(ticketController.remove)

router.route('/tickets/:id/calculate').put(ticketController.calculateById)

export default router