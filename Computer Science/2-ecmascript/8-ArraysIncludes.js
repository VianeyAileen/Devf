const array = ['apple', 'bannana', 'orange', 'tangerine']


/**
 * Itera cada objeto del arreglo hasta encontrar la coincidencia
 */
console.log('----------Sin includes----------')

let i = 0
while (i < array.length) {
    if (array[i] === 'orange') {
        console.log('hay naranjas para comer')
    }
    i++
}

/**
 * El método includes busca en el arreglo la coincidencia
 * que se le haya pasado como parámetro.
 */

console.log('----------Con includes----------')
console.log('Usando if')
if (array.includes('orange')) {
    console.log('hay naranjas para comer')
} else {
    console.log('no hay naranjas para comer :(')
}

console.log('\n')

/** se puede reescribir usando el operador ternario
* condición
*    ? si lo cumple
*    : si no lo cumple
*/
console.log('Usando operador ternario')
array.includes('orange') 
    ? console.log('hay naranjas para comer') 
    : console.log('no hay naranjas para comer :(')