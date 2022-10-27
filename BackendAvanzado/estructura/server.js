import http from 'http'
import api from './api/api.js'
import config from './api/config/index.js'
import database from './api/config/database.js'

const server = http.createServer(api)

server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.log(`El puerto ${config.server.port} ya esta siendo usado por otra aplicación`);
    }
    console.log(`Error al iniciar el servidor en el puerto ${config.server.port} 🔴`);
})

server.on('listening',  () => {
    console.log(`Servidor escuchando en el puerto ${config.server.port} 🟢`);
})

server.listen(config.server.port)
database()
// Iniciar la conexión a la base de datos
