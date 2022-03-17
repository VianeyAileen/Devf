/* 
EJERCICIO
Recorrer los números del 1 al 100 y decir cuál es impar
y cuál es par
*/

for (x = 1; x <= 100; x++) {
    if(x%2 === 0){
        console.log(x + ' par')
    } else {
        console.log(x + ' impar')
    }
}