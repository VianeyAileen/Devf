/* 
EJERCICIO
Escribe un programa que responda a un usuario que quiere comprar un helado 
en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
    El helado sin topping cuesta 50 MXN.
    El topping de oreo cuesta 10 MXN.
    El topping de KitKat cuesta 15 MXN.
    El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.”
y a continuación le informará el precio del helado sin ningún topping.
*/

var topping = prompt('Deseas alguno de nuestros toppings en tu helado? \n' 
                     + '- Ninguno \n'                    
                      + '- Oreo \n'
                      + '- KitKat \n'
                      + '- Brownie \n')

topping = topping.toLowerCase()
var helado = 50
var suma = 0

if (topping === 'ninguno') {
    alert('El precio total es de: 50 MXN')
} else if (topping === 'oreo'){
    suma = helado + 10
    alert('El precio total es de: ' + suma + ' MXN')
} else if (topping === 'kitkat'){
    suma = helado + 15
    alert('El precio total es de: ' + suma + ' MXN')
} else if (topping === 'brownie'){
    suma = helado + 20
    alert('El precio total es de: ' + suma + ' MXN')
} else {
    alert('No tenemos este topping, lo sentimos.')
}