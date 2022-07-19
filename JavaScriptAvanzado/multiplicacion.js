// Función que calcula la multiplicación
// de dos números sin usar el símbolo *

function multiplicacion(num1, num2) {
    var resultado = 0
    if (num1 === 0 || num2 === 0) {
       return 0
    } else if(num2 > 0 ) {
        resultado = (num1 + multiplicacion(num1, num2-1))
        return resultado

    } else if(num2 < 0) {
        resultado =  -multiplicacion(num1, -num2)
        return resultado
    }
}

console.log(multiplicacion(7, 3))
