const matrizA = [
    [2, 0, 1],
    [3, 2, 0],
    [5, 4, 1]
]

const matrizB = [
    [4, 0, 3],
    [1, 2, 7],
    [4, 5, 0]
]

const matrizResultado = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

// Suma de Matrices
for (var i = 0; i < 3; i++) { //filas
    for (var j= 0; j < 3; j++) { //columnas
        matrizResultado[i][j] = matrizA[i][j] + matrizB[i][j]
    }    
}
console.log('matrizResultado(suma) =>', matrizResultado)

// Resta de Matrices
for (var i = 0; i < 3; i++) { //filas
    for (var j= 0; j < 3; j++) { //columnas
        matrizResultado[i][j] = matrizA[i][j] - matrizB[i][j]
    }    
}
console.log('matrizResultado(resta) =>', matrizResultado)

const matrizA2 = [
    [1, 6, 0],
    [-1, 3, 1],
    [4, 6, 2]
]

const matrizB2 = [
    [0, 4, 0],
    [2, 3, 1],
    [1, -2, 1]
]
const matrizResultado2 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]


// Multiplicación de Matrices
/**
 * Reglas de la multiplicación de matrices
 * 1. matrizResultado[filasM1][columnasM2]
 * 2. Solo se puede multiplicar M1 y M2 si columnasM1 === filasM2 
 */
for (var i = 0; i < matrizResultado2.length; i++) { //filas
    for (var j = 0; j < matrizResultado2.length; j++) { //columnas
        for (var aux = 0; aux < matrizResultado2.length; aux++) {
            matrizResultado2[i][j] = matrizResultado2[i][j] + (matrizA2[i][aux] * matrizB2[aux][j])
            
        }
    }    
}
console.log('matrizResultado(multiplicación) =>', matrizResultado2)