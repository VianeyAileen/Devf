const express = require('express')
const app = express()

// Petición tipo GET a la ruta /
app.get('/', (req, res) => {
    console.log('Hola mundo');
})

// Levantamos un servidor local
app.listen(3000, (error) => {
    error ? console.log(error) : console.log('Server running');
})