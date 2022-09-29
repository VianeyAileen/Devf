// Controlaores ejercicio
const obtenerApi = (req, res) => {
    res.status(200).send({
        "message": 'Hola mundo'
    })
}

const obtenerSuma = (req, res) => {
    const num1 = parseInt(req.query.num1)
    const num2 = parseInt(req.query.num2)
    const resultado = (num1 + num2)

    res.status(200).send({
        "resultado": resultado
    })
}

const obtenerUsuario = (req, res) => {
    res.status(200).send({
        "usuario": req.params.nombre   
    })
}

const modificarBody = (req, res) => {
    const nombre = req.body.nombre
    const ocupacion = req.body.ocupacion

    res.status(200).send({
        "nombre": nombre,
        "ocupacion": ocupacion
    })
}

module.exports = {
    obtenerApi,
    obtenerSuma,
    obtenerUsuario,
    modificarBody
}