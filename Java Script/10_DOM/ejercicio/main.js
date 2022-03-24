// Inputs
var nombre = document.getElementById('nombre')
var direccion = document.getElementById('direccion')
var telefono = document.getElementById('telefono')
var topping = document.getElementById('topping')

// Botón
var boton = document.getElementById('boton')

// Respuestas
var nombre_respuesta = document.getElementById('nombre_respuesta')
var direccion_respuesta = document.getElementById('direccion_respuesta')
var telefono_respuesta = document.getElementById('telefono_respuesta')
// var img = document.getElementById('img')

// Imágenes
var hawaina = document.getElementById('hawaina')
var pepperoni = document.getElementById('pepperoni')

// Box respuesta
var respuesta = document.getElementById('respuesta')

function cambiar () {
    // Acceder al valor que el usuario ingresa en el input
    nombre_respuesta.innerHTML = nombre.value
    direccion_respuesta.innerHTML = direccion.value
    telefono_respuesta.innerHTML = telefono.value

    var pizza = topping.value.toLowerCase()

    if(pizza === 'con'){
        hawaina.classList.remove('none')
        pepperoni.classList.add('none')
    }else if(pizza === 'sin'){
        pepperoni.classList.remove('none')
        hawaina.classList.add('none')
    }else {
        hawaina.classList.add('none')
        pepperoni.classList.add('none')
    }

    respuesta = respuesta.classList.remove('none')

    // if (topping.value === 'con') {
    //     img.innerHTML = '<img src="./img/hawaiana.jpeg" width="150" alt="">'
    // } else if (topping.value === 'sin'){
    //     img.innerHTML = '<img src="./img/pepperoni.jpeg" width="150" alt="">'
    // }

}

boton.addEventListener('click', cambiar)
