// Función para saber si la letra es vocal o consonante
function vocalConsonante(letra) {
    letra = prompt('Ingresa una letra')
    var vocal = ['a', 'e', 'i', 'o', 'u']

    if (vocal.includes(letra) ) {
        alert('La letra ' + letra + ' es una vocal')
    } else {
        alert('La letra ' + letra + ' es una consonante')
    }
}
vocalConsonante()