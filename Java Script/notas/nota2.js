// boolean (true, false)
// number (numero, integer, float, doubles, etc)
// String (char, 'hola')

var miVariable = true;
var num = 10
var frase = 'Hola mundo'

// undefined: No se le asigna un valor a una variable
// null : es un valor vacio de una variable
var miVariable2
var miVariable3 = null

console.log('El tipo de dato es: ' + typeof miVariable2)
console.log('El tipo de dato es: ' + typeof miVariable3)

// Object: instancioa de una clase
console.log('Hola' + ' ' + 'soy un string.') // Primera forma para concatenar espacios
console.log('Hola ' + 'soy un string.') // Segunda forma de concatenar espacios

// Cuando temgo strings y números, la consola va a tomar todo
// como un String

console.log('Hola ' + 3 + 4)

var suma = 3 + 4
console.log('Hola ' + suma)

// Jerarquía de operaciones
var operaciones = (4 * 6 / 2 * 5) - 1

// Otros tipos de operadores
// ++ sum 1 a una variable
var sumando = 5
sumando ++
console.log(sumando)

// -- resta 1 a una variable
var restando = 5
restando --
console.log(restando)

//  AUTOASIGNAR VALOR A UNA VARIABLE
var variableOperaciones = 10
variableOperaciones = variableOperaciones * 3
variableOperaciones += 3 // Suma
variableOperaciones -= 3 // Resta 
variableOperaciones *= 3 // Multiplicación 
variableOperaciones /= 3 // División

// Operación módulo (residuo) %
// Con esta operación nos importa el residuo
var residuo = variableOperaciones % 4

// Saber si un número es par
// Si el valor es 0, entonces es par
var par = 40 % 2

// Si yo quiero saber si un número es divisible entre 7
// Si el valor es 0, entonces es divisible
var divisible = 14 % 7

// CONVERSIÓN DE STRING A NUMBER
var entradaUsuario = prompt('Dame un valor')
console.log(entradaUsuario) // despliega en consola entradaUsuario
// si no tiene paréntesis me regresa características
console.log(typeof entradaUsuario) // despliega en consola el TIPO DE DATO
// Si tiene paréntesis hace alguna acción
var valorConvertido = parseInt(entradaUsuario) // converitr string a entero
console.log(valorConvertido) // despliega la variable valorConvertido
console.log(typeof valorConvertido) // despliega el TIPO DE DATO

var resMultiplicacion = valorConvertido * 4
console.log(resMultiplicacion)

resMultiplicacion = entradaUsuario * 100
console.log(resMultiplicacion)

alert('El número es ' + resMultiplicacion)

// Strings
var miNombre = 'Vianey'
// como es un string, tiene métodos inherentes

// como no tiene paréntesis, mo modificará o realizará acciones sobre mi variable
console.log(miNombre.length)

// métodos que tiene la clase String
console.log(miNombre.toUpperCase()) // Convierte toda a mayúsculas
console.log(miNombre.toLowerCase()) // Convierte todo a minúsculas

// startsWith()
// trim() quita espacios antes y después de un stting
// charAt()
// indexOf()
// replace()
// slice()
// splice()