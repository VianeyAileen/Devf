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

console.log('\n------------------------------ \n')

/* 
EJERCICIO 2
Fizz bozz
Recorrer los numeros del 1 al 100
Si el número es divisible entre 5 -> 5: Fizz
Si el número es divisible entre 3 -> 3: Bozz
Si el numero es divisible entre 3 y 5 -> 15: FizzBozz
*/

for (var num = 1; num <= 100; num++) {
    if(num%5 == 0 && num%3 == 0){
        console.log(num + ': FizzBozz')
    } else if(num%5 == 0) {
        console.log(num + ': Fizz')
    }else if (num%3 == 0){
        console.log(num + ': Bozz')
    } else {
        console.log(num)
    }
}