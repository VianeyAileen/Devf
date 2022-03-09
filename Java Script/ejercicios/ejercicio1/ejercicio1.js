// Ejercicios

// 1.- Preguntar la edad, el nombre, el apellido, el teléfono, y la dirección del usuario
// -> Nombre: ....
// -> Edad: ....
// -> Apellido: ....
// -> Teléfono: ....
// -> Dirección: ....

var nombre = prompt('Ingresa tu nombre:')
var apellido = prompt('Ingresa tu apellido:')
var edad = prompt('Ingresa tu edad:')
var telefono = prompt('Ingresa tu número telefónico:')
var direccion = prompt('Ingresa tu dirección:')

console.log('Nombre: ' + nombre + '\n' +
            'Apellido: ' + apellido + '\n' +
            'Edad: ' + edad + '\n' +
            'Teléfono: ' + telefono + '\n' +
            'Dirección: ' + direccion + '\n')


//  2.- Van a preguntar su año de nacimiento y en la consola pondrán 
// que edad tienen/van a cumplir este año
var año = prompt('Ingresa tu año de nacimiento:')
var edad = 2022 - año
console.log('Actualmente tienes o vas a cumplir ' + edad + ' años')