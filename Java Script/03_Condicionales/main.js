// Condicionales
// si hay pan
var hayPan = true
hayPan = false

console.log('Valor de mi variable ' + hayPan)
if (hayPan) { // esto debe ser true o false
    console.log('Desayno Pan')
} else {
    console.log('Desayuno otra cosa')
}

// Comparadores
// < > <= =>
// == igual
// === igual, compara el valor y el tipo de dato
// != diferente
// !== diferente, compara el valor y el tipo de dato

if (6 == '6') { // true
    console.log('Si son iguales')
}

// Se recomienda usar esta forma
if (6 === '6') {
    console.log('Si son iguales')
} else {
    console.log('=== No son iguales')
}

var calificacion = 10

// cuando el valor de mi condición es true, deja de evaluar
// todas las demás condicionales
// esto es lo recomendado
if (calificacion <= 5) {
    console.log('Reprobaste :(')
} else if (calificacion < 6){
    console.log('Estudia más')
} else if (calificacion >= 9) {
    console.log('Excelente :D')
}

// esto no es lo recomendado
if (calificacion <= 5) {
    console.log('Dos Reprobaste :(')
} 
if (calificacion === 6){
    console.log('Dos Estudia más')
} 
if (calificacion > 6) {
    console.log('Dos Excelente :D')
}

// Operadores Lógicos
// && AND
// || OR
if (calificacion >=0 && calificacion <= 5) { // 10, true AND false --> False
    console.log('Reprobaste :(')
} else if (calificacion >= 6 && calificacion <= 8){ //10, true AND false --> False
    console.log('Estudia más')
} else if (calificacion >= 9) { // 10, true AND true --> True
    console.log('Excelente :D')
}

var diaSemana = 'sábado'
var ganasDeSalir = true
var quincena = true

if (diaSemana === 'martes' && ganasDeSalir) {
    console.log('Sal poquito')
} else if(diaSemana === 'viernes' && ganasDeSalir){
    console.log('Alócate')
    // si es quincena + es viernes o sábado + tienes ganas de salir -- sal
} else if (quincena && (diaSemana === 'viernes' || diaSemana === 'sábado') && ganasDeSalir) {
    console.log('Ve con tus amigos')
}

// negación !
var hayPan = true
console.log('Valor de mi variable ' + hayPan)

if (!hayPan) { // si hayPan es false, ejecuta este código
    console.log('Compra Pan')
} else {
    console.log('Desayuna pan')
    
}

var clima = 'nublado'
var ropaLimpia = 'playera'

if (!(clima === 'soleado' && ropaLimpia === 'short')) { // si la condición es false, ejecuta
    console.log('Sal a la calle')
} else {
    console.log('Se cumple el else')
}

if (clima !== 'soleado' && ropaLimpia !== 'short') { // si la condición es false, ejecuta
    console.log('Sal a la calle')
} else {
    console.log('Se cumple el else')
}

var miNombre

if (miNombre) {
    console.log('Mi nombre es ' + miNombre)
} else {
   console.log('No tengo nombre')
   console.log(typeof miNombre)
}

// OPERADOR TERNARIO
var tengoHambre = true
if (tengoHambre) {
    console.log('Come miel')
    console.log(3*5)
} else {
    console.log('Me duermo')
}

tengoHambre ? (console.log('Come miel'), console.log(3*5)) : console.log('Me duermo')