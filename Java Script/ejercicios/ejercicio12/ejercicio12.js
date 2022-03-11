/* 
EJERCICIO
Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones.
Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
    Course: $4999 MXN
    Carrera $3999 MXN
    Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
    Beca Facebook: 20% de descuento.
    Beca Google: 15% de descuento.
    Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido,
tomando en cuenta las siguientes duraciones:
    Course: 2 meses
    Carrera 6 meses
    Master: 12 meses
*/

// Solicitamos la información al usuario
var curso = prompt('Qué nivel te interesa tomar? \n'
                    + '- Course \n'
                    + '- Carrera \n'
                    + '- Master')

var beca = prompt('Cuál de las siguientes becas tienes? \n'
                    + '- Facebook \n'
                    + '- Google \n'
                    + '- Jesua \n'
                    + '- Ninguna')

// Pasamos a minúsculas el string
curso = curso.toLowerCase()
beca = beca.toLowerCase()

// Inicualizamos valores
var course = 4999
var carrera = 3999
var master = 2999
var total = 0
var mensual = 0
var descuento = 0

if (curso === 'course' && beca === 'ninguna') {
    total = course * 2
    alert('El curso Course dura 2 meses \n'
           + 'El costo mensual es de $4999 MXN \n'
           + 'Entonces el precio total es de $ ' + total + 'MXN')
} else if (curso === 'course' && beca === 'facebook') {
    descuento = course * 0.20
    mensual = course - descuento
    total = (mensual) * 2
    alert('El curso Course dura 2 meses \n'
           + '- El costo mensual es de $4999 MXN \n'
           + '- Tienes la Beca Facebook 20% \n'
           + '- Mensualmente pagarías $' + mensual + 'MXN \n'
           + '- Entonces el precio total es de $' + total + 'MXN')
} else if (curso === 'course' && beca === 'google') {
    descuento = course * 0.15
    mensual = course - descuento
    total = (mensual) * 2
    alert('El curso Course dura 2 meses \n'
           + '- El costo mensual es de $4999 MXN \n'
           + '- Tienes la Beca Google 15% \n'
           + '- Mensualmente pagarías $' + mensual + 'MXN \n'
           + '- Entonces el precio total es de $' + total + 'MXN')
}else if (curso === 'course' && beca === 'jesua') {
    descuento = course * 0.50
    mensual = course - descuento
    total = (mensual) * 2
    alert('El curso Course dura 2 meses \n'
           + '- El costo mensual es de $4999 MXN \n'
           + '- Tiene la Beca Jesua 50% \n'
           + '- Mensualmente pagarías $' + mensual + 'MXN \n'
           + '- Entonces el precio total es de $' + total + 'MXN')
// Curso Carrera
} else if (curso === 'carrera' && beca === 'ninguna') {
    total = carrera * 6
    alert('El curso Carrera dura 6 meses \n'
           + 'El costo mensual es de $3999 MXN \n'
           + 'Entonces el precio total es de $ ' + total + 'MXN')
} else if (curso === 'carrera' && beca === 'facebook') {
    descuento = carrera * 0.20
    mensual = carrera - descuento
    total = (mensual) * 6
    alert('El curso Carrera dura 6 meses \n'
           + '- El costo mensual es de $3999 MXN \n'
           + '- Tienes la Beca Facebook 20% \n'
           + '- Mensualmente pagarías $' + mensual + 'MXN \n'
           + '- Entonces el precio total es de $' + total + 'MXN')
} else if (curso === 'carrera' && beca === 'google') {
    descuento = carrera * 0.15
    mensual = carrera - descuento
    total = (mensual) * 6
    alert('El curso Carrea dura 6 meses \n'
           + '- El costo mensual es de $3999 MXN \n'
           + '- Tienes la Beca Google 15% \n'
           + '- Mensualmente pagarías $' + mensual + 'MXN \n'
           + '- Entonces el precio total es de $' + total + 'MXN')
} else if (curso === 'carrera' && beca === 'jesua') {
    descuento = carrera * 0.50
    mensual = carrera - descuento
    total = (mensual) * 6
    alert('El curso Carrea dura 6 meses \n'
           + '- El costo mensual es de $3999 MXN \n'
           + '- Tienes la Beca Jesua 50% \n'
           + '- Mensualmente pagarías $' + mensual + 'MXN \n'
           + '- Entonces el precio total es de $' + total + 'MXN')
// Curso Master
} else if (curso === 'master' && beca === 'ninguna') {
    total = master * 12
    alert('El curso Master dura 12 meses \n'
           + 'El costo mensual es de $2999 MXN \n'
           + 'Entonces el precio total es de $ ' + total + 'MXN')
} else if (curso === 'master' && beca === 'facebook') {
    descuento = master * 0.20
    mensual = master - descuento
    total = (mensual) * 12
    alert('El curso Master dura 12 meses \n'
           + '- El costo mensual es de $2999 MXN \n'
           + '- Tienes la Beca Facebook 20% \n'
           + '- Mensualmente pagarías $' + mensual + 'MXN \n'
           + '- Entonces el precio total es de $' + total + 'MXN')
} else if (curso === 'master' && beca === 'google') {
    descuento = master * 0.15
    mensual = master - descuento
    total = (mensual) * 12
    alert('El curso Master dura 12 meses \n'
           + '- El costo mensual es de $2999 MXN \n'
           + '- Tienes la Beca Google 15% \n'
           + '- Mensualmente pagarías $' + mensual + 'MXN \n'
           + '- Entonces el precio total es de $' + total + 'MXN')
} else if (curso === 'master' && beca === 'jesua') {
    descuento = master * 0.50
    mensual = master - descuento
    total = (mensual) * 12
    alert('El curso Master dura 12 meses \n'
           + '- El costo mensual es de 23999 MXN \n'
           + '- Tiene la Beca Jesua 50% \n'
           + '- Mensualmente pagarías $' + mensual + 'MXN \n'
           + '- Entonces el precio total es de $' + total + 'MXN')
}
