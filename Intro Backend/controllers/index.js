/* req ---> recibe los datos de la petición
    res ---> responde al cliente
    req.params ---> Recibimos daos que llegan por la URL pero son obligatorios
    req.query ---> Recibimos daos que llegan por la URL pero son opcionales
    eq.body ---> Recibimos los datos que llegan en el bodys */

// Controladores de Macotas
const crearMascota = (req, res) => {
    console.log('Crear mascota')
    console.log(req.body)

    const nombre = req.body.nombre
    const edad = req.body.edad
    console.log(`El nombre de la mascota es ${nombre} y tiene ${edad} años.`)

    res.status(201).send({
        message: 'Tu mascota fue creada'
    })
}

const obtenerTodasMascotas = (req, res) => {
    console.log('Obtener todas las mascota')

    res.status(200).send({
        data: [
            {
                "nombre": 'Madcota 1'
            },
            {
                "nombre": 'Mascota 1'
            },
        ]
    })
}

const obtenerMascota = (req, res) => {
    console.log('Obtener una mascota')
}

const modificarMascota = (req, res) => {
    console.log('Modifar mascota')
}

const eliminarMascota = (req, res) => {
    console.log('Eliminar mascota')
}

module.exports = {
    crearMascota,
    obtenerTodasMascotas,
    obtenerMascota,
    modificarMascota,
    eliminarMascota
}