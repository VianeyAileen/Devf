// Importamos la librería express
const express = require('express')
// Inicializamos la librería en una constante
const app = express()
// Importamos las rutas
// const router = require('./routes/index')
const router = require('./routes/ejercicio')

// Middlewares --> Obtienen los datos de la petición antes de que lleguen a la ruta.
// Comunicación a través de formato JSON
app.use(express.json())
// Permite recibir datos de codificación de formularios
app.use(express.urlencoded({extended: false}))
// Utilizamos las rutas
app.use(router)


// Levantamos un servidor local
app.listen(3000, (error) => {
    error ? console.log(error) : console.log('Server running');
})