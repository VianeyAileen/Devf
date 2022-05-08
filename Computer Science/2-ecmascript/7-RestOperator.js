// El spread operator se puede para recibir un conjunto de parámetros, con ello lo
// convierte a un array y en este se le llama a rest operator
const operar = (operador, ...patitos) => {
    let result = 0
    if (operador === '+') {
        result = patitos.reduce((previousValue, currentValue) => previousValue + currentValue)
    } else if (operador === '-') {
        result = patitos.reduce((previousValue, currentValue) => previousValue - currentValue)
    }
    console.log('resultados ' + result)
}

operar('+', 50, 50, 50, 10);
operar('-', 50, 50, 50, 10);