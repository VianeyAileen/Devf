import express from 'express'
import * as ticketController from '../controllers/TicketController.js'
import { createTicketValidator } from '../middlewares/Ticket/createTicketValidator.js'
import { updateTicketValidator } from '../middlewares/Ticket/updateTicketValidator.js'

const router = express.Router()

router.route('/ticket').post(createTicketValidator ,ticketController.create)
router.route('/tickets').get(ticketController.read)
router.route('/tickets/:id').get(ticketController.readById)
router.route('/ticket/:id').put(updateTicketValidator, ticketController.update)
router.route('/ticket/:id').delete(ticketController.remove)

router.route('/tickets/:id/calculate').put(ticketController.calculateById)

export default router