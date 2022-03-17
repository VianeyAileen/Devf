/* 
EJERCICIO
Solicitar al usuario un número de cliente. 
Si el número es el 1000, imprimir "Ganaste un premio",
en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
*/

var num = prompt('Ingresa un número')
num = parseInt(num) // convertimos string a number

if (num === 1000) {
    alert('Ganasta un premio')
} else {
    alert('Lo sentimos sigue participando')
}