const { Router } = require('express')
const router = Router()

// Petición tipo GET a la ruta /
router.get('/users', function (req, res) {
    console.log(req.body)
    res.json({message: 'Hola soy la respuesta'})
})

module.exports = router