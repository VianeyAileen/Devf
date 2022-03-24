// Obtenemos a las opciones
var piedra = document.getElementById('piedra')
var papel = document.getElementById('papel')
var tijeras = document.getElementById('tijeras')

// Resultado
var ganador = document.getElementById('ganador')


// Opcion seleccionada por el usuario
function opcion_piedra(){
    juego('piedra')
}

function opcion_papel(){
    juego('papel')
}

function opcion_tijeras() {
    juego('tijeras')
}

// Función que selecciona al azar la opción a jugar por la computadora
function opcion_pc(){
    var opciones = ['piedra', 'papel', 'tijeras']
    var aleatorio = Math.floor(Math.random()*3)
    var seleccion = opciones[aleatorio]
    return seleccion
}


// Función que simula el juego
function juego(jugada){
    // Jugada de la pc
    var jugada_pc = opcion_pc()

    // Jugada del usuario
    var jugada_usuario = jugada

    // Hacemos la comparación
    var comparacion = compara(jugada_usuario, jugada_pc)
    if(comparacion == 1){
        ganador.innerHTML = '<span class="winner"> Felicidades ganó la partida 🤩 </span>' +
                            '<br> Usuario seleccionó ' + jugada_usuario + 
                            '<br> Computadora seleccionó ' + jugada_pc
             
    } else if(comparacion == 2){
        ganador.innerHTML = '<br> <span class="loser"> Oh no! La computadora ganó la partida 🥺 </span>' +
                            '<br> Usuario seleccionó ' + jugada_usuario +
                            '<br> Computadora seleccionó ' + jugada_pc 
    } else {
        ganador.innerHTML = '<span class="tie"> Empate 😮 </span>' +
                            '<br> Usuario seleccionó ' + jugada_usuario + 
                            '<br> Computadora seleccionó ' + jugada_pc
    }

}

// Función que compara las jugadas
function compara(usuario, pc){
    if ((usuario === 'piedra' && pc === 'tijeras') || (usuario === 'papel' && pc === 'piedra') || (usuario === 'tijeras' && pc === 'papel')) {
        return 1
    } else if ((usuario === 'tijeras' && pc === 'piedra') || (usuario === 'piedra' && pc === 'papel') || (usuario === 'papel' && pc === 'tijeras')) {
        return 2
    } else{
        return 3
    }
}

piedra.addEventListener('click', opcion_piedra)
papel.addEventListener('click', opcion_papel)
tijeras.addEventListener('click', opcion_tijeras)