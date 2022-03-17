/* 
EJERCICIO
Solicitar al usuario una calificación (entre 1 y 10)
Se debe comprobar que el número efectivamente esté en ese rango
si no lo está imprima un mensaje de error.
Si la calificación es inferior a 6 "Reprobado" 
Si esta entre 6 y 8 "Regular"
Si es 9 "Bien"
Si es 10 "Excelente"
*/

var calificacion = prompt('Ingresa un calificación entre 1 y 10')
var num = parseInt(calificacion) // convertimos string a number

if (!(num >= 1 && num <= 10)) {
    alert('No está dentro del rango solicitado')
} else if (num <= 5) {
    alert('Reprobado')
} else if (num <= 8){
    alert('Regular')
} else if (num === 9){
    alert('Bien')
} else {
    alert('Excelente')
}