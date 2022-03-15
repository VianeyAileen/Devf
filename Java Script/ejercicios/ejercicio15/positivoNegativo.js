// Saber si un número es negativo, cero o positivo
function positivoNegativo(num) {
    num = parseInt(prompt('Ingresa un número'))
    if (num == 0) {
        alert('El número ' + num + ' es cero')
    } else if (num < 0){
        alert('El número ' + num + ' es negativo') 
    } else {
        alert('El número ' + num + ' es positivo')
    }
}
positivoNegativo()