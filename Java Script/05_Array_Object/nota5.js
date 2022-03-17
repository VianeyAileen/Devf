// Arreglos: 
// posiciones -> nos dice la posición en la que está un elemento
// iniciando desde la posición 0
// posiciones -> 0         1           2        3         4
var animales = ['leon', 'tortuga', 'tiburón', 'ratón', 'águila']
console.log(animales)
console.log(animales[1]) // accedemos a la posicón 1 del arreglo
console.log(animales[2]) // accedemos a la posicón 2 del arreglo
console.log(animales[5]) // No existe la posición 5 a pesar de tener 5 elementos

// Agregar un elemento a mi arreglo
// Forma menos convencional y no se recomienda, puede llegar a sobreescribir
animales[5] = 'perrito'
console.log(animales)

// Forma correcta, hacer uso del método push()
animales.push('pingüino')
animales.push('hipo')
animales.push('cocodrilo')
// se puede agregar varios elementos separados por comas
// animales.push('ola', 'xd')
console.log(animales)

// Método pop() -> Eliminar el último elemento de mi arreglo
animales.pop() // elimina cocodrilo
animales.pop() // elimina hipo
console.log(animales)

// Método splice -> Desplazar/eliminar uno o varios elementos
// 1 valor es para saber en que posición va a eliminar
// 2 valor es para saber cuántos elementos va a eliminar
// si estpe valor es 0, sólo desplaza los elementos
// 3 valor es el que quiero sumar
animales.splice(3, 0, 'xd')
console.log(animales)

var colores = ['azul', 'rojo', 'verde']
colores.splice(1, 1, 'morado') // sistituimos el color rojo por morado
console.log(colores)

// recorrer un arreglo
for (var i = 0; i < colores.length; i++) {
    console.log(colores[i])    
}

// Arreglo dentro de una arreglo
var musica = [['BadBunny', 'Farruko'], ['Neo Pistea', 'Kidd Keo'], ['GNR', 'Nirvana']]
console.log(musica[1][0])


//  Objetos (diccionarios)
var persona = {
    // key: value
    nombre: 'Vianey',
    edad: 21,
    cel: '+52 5562626262'
}
console.log(persona)
console.log(persona.edad)
console.log(persona.edad, persona.nombre)

var per_mus = {
    // key: value
    nombre: 'Vianey',
    edad: 21,
    cel: '+52 5562626262',
    musica: {
        reggaeton: ['BadBunny', 'PlanB', 'Alex y Frido'],
        trap: {
            mexico: ['aleman', 'HombreJurgo'],
            usa: ['Drake', 'XTentation'],
            argentina: ['Duki', 'Neo Pistea', 'Ecko']
        }
    }
}

console.log(per_mus)
console.log(per_mus.musica.trap.argentina[0])