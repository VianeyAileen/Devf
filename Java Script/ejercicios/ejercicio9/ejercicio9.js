/* 
EJERCICIO
Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. 
Considerar el caso en que 2 números sean iguales.
*/

var num1 = prompt('Ingresa el primer número')
var num2 = prompt('Ingresa el segundo número')
var num3 = prompt('Ingresa el tercer número')

num1 = parseInt(num1) // convertimos string a number
num2 = parseInt(num2)
num3 = parseInt(num3)

if (num1 === num2 && num1 === num3) {
    alert('Los tres números son iguales')
} else if(num1 > num2 && num1 > num3) {
    alert('El número ' + num1 + ' es mayor')
} else if(num2 > num1 && num2 > num3) {
    alert('El número ' + num2 + ' es mayor')
}else {
    alert('El número ' + num3 + ' es mayor')
}