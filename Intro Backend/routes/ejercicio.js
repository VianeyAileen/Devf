const { Router } = require('express')
const router = Router()
const {obtenerApi, obtenerSuma, obtenerUsuario, modificarBody} = require('../controllers/ejercicio')

// Ejercicios
router.get('/api/', obtenerApi)
router.get('/api/suma', obtenerSuma)
router.get('/api/usuario/:nombre', obtenerUsuario)
router.put('/api/body', modificarBody)

module.exports = router