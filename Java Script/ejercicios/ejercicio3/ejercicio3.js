/* 
EJERCICIO
En un prompt van a pedir el nombre al usuario
En otro van a pedir la edad
Luego van a convertir el nombre a mayúsculas
Van a convertir la edad del usuario en años perro
(cado uno de los dos primeros años valen por 10.5)
(cada año subsequente equivale a 4 años)
Van a mostrar un alert que diga:
"Tu nombre es NOMBREUSUARIO y tu edad EDAD en años perro son EDADPERRO"
*/

var nombre = prompt('Ingresa tu nombre') // pedimos el nombre
var edad = prompt('Ingresa tu edad') // pedimos la edad

nombreMayus = nombre.toUpperCase() // convertimos el nombre a mayúscula

var primerosDos = 2 * 10.5
var subsequente = (edad - 2) * 4

var edadPerro = primerosDos + subsequente
alert('Tu nombre es ' + nombreMayus + ' y tu edad ' + edad + ' en años perro son ' + edadPerro)
