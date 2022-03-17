// Sintaxis del ciclo for
/* for (inicio; limite; secuencia) {
    bloque de codigo
} */

for (var i = 0; i <= 10; i++) {
   console.log(i)    
}

for(var y = 10; y >= 0; y--){
    console.log(y)
}

for (var x = 100; x <= 200; x = x + 10) {
    if (x === 150) {
        console.log('Es mi condición: ' + x)
    } else {
        console.log(x)
    }
}