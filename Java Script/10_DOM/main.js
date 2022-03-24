// Acceder a etiquetas HTML

// var titulo = document.getElementById('titulo')
// var parrafo = document.getElementById('parrafo')
var boton = document.getElementById('boton')
var input = document.getElementById('input')
var respuesta = document.getElementById('respuesta')
var body = document.getElementById('body')

// console.log(titulo)
// console.log(parrafo)

// innerHTML -> Modificar el contenido de una etiqueta de tipo texto
// titulo.innerHTML = 'Hola mundo desde JS'

function cambiar () {
    // titulo.innerHTML = 'Hola mundo desde JS'
    // parrafo.innerHTML = 'Hola que tal'

    // Acceder al valor que el usuario ingresa en el input
    respuesta.innerHTML = input.value
}

boton.addEventListener('click', cambiar)

// Crear elemento :
var nuevoParrafo = document.createElement('p')
// Damos el valor a elemento
nuevoParrafo.innerHTML = 'Cree esta etiqueta'
// Agregamos el elemento al body en html
body.append(nuevoParrafo)


// Acceder a las clases
// classLIst nos permite acceder a sus clases en forma de arreglo
console.log(respuesta.classList)

// classList.add('clase nueva) -> agregar una nueva clase a mi etiqueta
respuesta.classList.add('red')
console.log(respuesta.classList)

// Remover o eliminar una clase
titulo.classList.remove('black')