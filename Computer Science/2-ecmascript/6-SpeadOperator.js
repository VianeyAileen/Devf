/**
 * Variables simples
 * Se asigna o inicializan por valor
 */

let number = 10
let numbre_two = number
numbre_two = 20
console.log('Number: ', number)
console.log('Number_two: ', numbre_two)

/**
 * Variables complejas 
 * Funcionan por paso por referencia
 */
const student = {id: 1, name: 'Vianey', app: 'Borrás'}
const student2 = { ...student }
student2.name = 'Ruben'
console.log('Student: ', student)
console.log('Student2: ', student2)

const array = [100, 90, 110, 101, 12, 70];
const array2 = [ ...array ];
array2[0] = 99;
console.log("array: ", array);
console.log("array2: ", array2);