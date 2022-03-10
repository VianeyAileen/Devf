/* 
EJJERCICIO
Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”),
en caso de contestar sí, responder “Ciertamente”, 
en caso de contestar no, responder: “No te creo”.
Demos poder procesar la respuesta del usuario, sin importar si la escribe
con mayúsculas o minísculas
*/

var pregunta = prompt('¿Eres bellisimo/a?')
pregunta = pregunta.toLowerCase()

if (pregunta === 'si') {
    alert('Ciertamente')
} else if (pregunta  === 'no') {
    alert('No te creo')
} else {
    alert('Por favor ingresa si o no')
}