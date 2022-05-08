const array = [1, 2, 3, 4, 5, 6]

const rebanada = array.slice(2, 5) // Devuelve los elementos de un arreglo a partir de un índice dado, hasta uno antes del índice tope
console.log(rebanada) // [3, 4, 5]


array.push(7) // Agrega un elemento al final
array.unshift(0) // Agrega un elemento al incio
console.log(array) // [0, 1, 2, 3, 4, 5, 6, 7]

array.pop() // Elimina el último elemento
console.log(array) // [0, 1, 2, 3, 4, 5, 6]

array.splice(2, 1) // Elimina el elemento en el índice dado y cúantos elementos a partir de ese índice
console.log(array) // [0, 1, 3, 4, 5, 6]


const array2 = [8, 10, 50, 40, 120, 10, 11, 44, 90, 40, 9, 10]
const oneHundredTwenty = array2.find((element) => element === 120) // el arreglo busca un elemento que es igual a 120
const oneHundredTwentyIndex = array2.findIndex((element) => element === 120) // Regresa el índice del elemento que buscamos
console.log('One hundred twenty: ' + oneHundredTwenty)
console.log('One hundred twenty Index: ' + oneHundredTwentyIndex)

const tenArray = array2.filter((element) => element === 10) // Filtra el arreglo con el elemento dado
console.log('tenArray: ', tenArray)
