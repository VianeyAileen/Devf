/* 
EJERCICIO
Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida
por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
    Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, 
    si es “moto” ha de ser 0.10 y
    si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, 
si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. 
Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
*/

var vehiculo = prompt('Ingrese un vehículo: \n' 
                      + '- Coche \n'
                      + '- Moto \n'
                      + '- Autobús \n')
var litros = prompt('Ingrese la cantidad de litros consumidos') 
var kilometro = prompt('Ingrese los kilometros recorridos')

vehiculo = vehiculo.toLowerCase()

var total = 0
var km_coche = 0.20 * kilometro
var km_moto = 0.10 * kilometro
var km_autobus = 0.5 * kilometro

if (vehiculo === 'coche' && (litros >= 0 && litros <= 100)) {
    total = km_coche + 5
    alert('Total a pagar ' + total)
} else if(vehiculo === 'coche' && !(litros >= 0 && litros <= 100)) {
    total = km_coche + 10
    alert('Total a pagar ' + total)
}else if (vehiculo === 'moto' && (litros >= 0 && litros <= 100)) {
    total = km_moto + 5
    alert('Total a pagar ' + total)
} else if(vehiculo === 'moto' && !(litros >= 0 && litros <= 100)) {
    total = km_moto + 10
    alert('Total a pagar ' + total)
} else if (vehiculo === 'autobús' && (litros >= 0 && litros <= 100)) {
    total = km_autobus + 5
    alert('Total a pagar ' + total)
} else if(vehiculo === 'autobús' && !(litros >= 0 && litros <= 100)) {
    total = km_autobus + 10
    alert('Total a pagar ' + total)
}