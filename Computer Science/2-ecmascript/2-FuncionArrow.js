// Función tradicional
function suma (num1, num2) {
    let resultado = num1 + num2
    console.log('La suma es: ' + resultado)
}
suma(4, 5)

/**
 * Sintaxis de las funciones flechas
 * Función flecha ordinaria (con muchos parámetros y cuerpo)
 * (param1, param2, paramN) => {cuerpo de la función}
 * 
 * Función flecha con un solo parámetro (no requiere paréntesis en los parámetros)
 * param1 => {cuerpo de la función}
 * 
 * Función flecha con una sola línea de retorno (no tiene cuerpo {})
 * (param1, param2, paramN) => result
 * 
 * Función flecha con un solo parámetro y una sola línea como retorno (no tiene ni parénteis ni cuerpo)
 * param1 => result
 * 
 * Función  flecha sin parámetros
 * () => result
 */

// Función flecha (Arrow Function)
let resta = (num1, num2) => {
    let resultado = num1 - num2
    console.log('La resta es: ' + resultado)
}
resta(5, 4)

let saludo = name => {
    console.log('Hola ' + name)
}
saludo('Vianey')

let adios = name => {
    console.log('Hasta luego ' + name)
}
adios('Vianey')

let comida = () => console.log('Comiendo...')
comida()