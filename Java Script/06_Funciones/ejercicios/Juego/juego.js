// Función que simula el juego de Piedra papel o tijera
function juego(jugador1, jugador2) {
    jugador1 = prompt('Jugador 1 qué eliges? \n' + 
                      'Piedra \n' + 
                      'Papel \n' +
                      'Tijeras \n').toLowerCase()
    jugador2 = prompt ('Jugador 2 qué eliges? \n' + 
                       'Piedra \n' + 
                       'Papel \n' +
                       'Tijera \n').toLowerCase()

    if (jugador1 === 'piedra' && jugador2 === 'tijeras'){
        alert('Jugador1 gana')
    } else  if(jugador1 === 'papel' && jugador2 === 'piedra' ){
        alert('Jugador1 gana')
    } else if(jugador1 === 'tijeras' && jugador2 === 'papel'){
        alert('Jugador1 gana')
    } else if (jugador1 === 'tijeras' && jugador2 === 'piedra'  ){
        alert('Jugador2 gana')
    } else  if(jugador1 === 'piedra' && jugador2 === 'papel' ){
        alert('Jugador2 gana')
    } else if(jugador1 === 'papel' && jugador2 === 'tijeras'){
        alert('Jugador2 gana')
    }  else{
        alert('Empate')
    }
}
juego()