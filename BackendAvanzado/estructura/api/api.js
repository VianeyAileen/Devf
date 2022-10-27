import express from "express";
import itemRoutes from './routes/ItemRoutes.js'
import ticketRoutes from './routes/TicketRoutes.js'
import userRoutes from './routes/UserRoutes.js'

import morgan from 'morgan'

const api = express()

api.use(express.json()) // para que acepte el body
api.use(morgan('tiny'))

api.get('/status', (_, res) => {
    res.json({
        msg: 'API en línea funcionando'
    })
})

api.use(itemRoutes)
api.use(ticketRoutes)
api.use(userRoutes)

export default api