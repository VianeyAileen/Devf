/* 
EJJERCICIO
Solicitar al usuario un número, y determinar si es divisible entre dos o no.
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm
*/

var num = prompt('Ingresa un número')

if (num % 2 === 0) {
    alert(num + ' es divisible entre 2')
} else {
    alert(num + ' no es divisible entre 2')
}