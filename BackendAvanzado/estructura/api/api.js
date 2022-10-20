import express from "express";

const api = express()

api.get('/status', (_, res) => {
    res.json({
        msg: 'API en línea funcionando'
    })
})

export default api