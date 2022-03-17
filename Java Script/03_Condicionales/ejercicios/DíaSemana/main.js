/* 
EJERCICIO
Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, 
otro mensaje diferente si es viernes, 
otro mensaje diferente si es sábado o domingo. 
Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
*/

var dia = prompt('Ingresa un día de la semana')
dia = dia.toLowerCase()

if (dia === 'lunes') {
    alert('Hoy es lunes')
} else if (dia === 'viernes') {
    alert('Hoy es viernes')
} else if (dia === 'sábado' || dia === 'domingo') {
    alert('Es fin de semana')
} else {
    alert ('Trata con otro día')
}