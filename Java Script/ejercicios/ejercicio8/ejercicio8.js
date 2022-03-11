/* 
Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
No considerar el caso en que ambos números son iguales.
*/

var num1 = prompt('Ingresa el primer número')
var num2 = prompt('Ingresa el segundo número')

num1 = parseInt(num1) // convertimos string a number
num2 = parseInt(num2)

if (num1 < num2) {
    alert('El número ' + num1 + ' es menor que el número ' + num2)
} else {
    alert('El número ' + num2 + ' es menor que el número ' + num1)
}