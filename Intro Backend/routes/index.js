const { Router } = require('express')
const router = Router()
const {crearMascota, obtenerTodasMascotas, obtenerMascota, modificarMascota, eliminarMascota} = require('../controllers/index')

// CRUD Mascota
router.post('/mascota', crearMascota)
router.get('/mascota', obtenerTodasMascotas)
router.get('/mascota/:idMascota', obtenerMascota)
router.put('/mascota/:idMascota', modificarMascota)
router.delete('/mascota/:idMascota', eliminarMascota)

module.exports = router