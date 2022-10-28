import express from "express";
import itemRoutes from './routes/ItemRoutes.js'
import ticketRoutes from './routes/TicketRoutes.js'
import userRoutes from './routes/UserRoutes.js'
import authRoutes from './routes/AuthRoutes.js'

import morgan from 'morgan'
import { authValidator } from "./middlewares/Auth/authValidator.js";

const api = express()

api.use(express.json()) // para que acepte el body
api.use(morgan('tiny'))

api.get('/status', (_, res) => {
    res.json({
        msg: 'API en línea funcionando'
    })
})
api.use(authRoutes)

// api.use('/items', authValidator, itemRoutes)
api.use(itemRoutes)
api.use(ticketRoutes)
// api.use(userRoutes)

export default api