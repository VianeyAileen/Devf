/**
 * Antes de ES6
 */

// No. pares => 100, 98, 96, ..., 2
// -- Operador de decremento i = i-1
// ++ Operador de incremento i = i+1
// % Operador de residuo
for (let i = 100; i >= 2; i--) {
    if (i % 2 === 0) {
        console.log('Soy par: ', i)
    }
}

// Imprimir valores mayores a 100
const array = [100, 90, 110, 101, 12, 70]
for (let j = 0; j < array.length; j++) {
    const numberInArray = array[j];
    if (numberInArray > 100) {
        console.log('Yo soy mayor a 100 =>' + numberInArray)
    }
}

/**
 * Con ES6 => for in y for of
 */

const student = {id: 1, name: 'Vianey', app: 'Borrás'}

/** for in => OBJECTS */
//student.name
for (const property in student) {
    console.log(property + ' : ' + student[property])
}

// iterador => comodin
/** for of => ARRAYS */
for (const iterador of array) {
    console.log('iterador: ' + iterador)    
}