var name = 'Vianey'
var app = 'Borrás'
var bookName = 'Harry poter y la piedra filosofál'

var student = {
    name: 'juanito lopez',
    age: 29,
    isMarried: true,
    matters: [10, 8, 4, 5, 2, 1, 67, 42, 99]
}

var  computer = {
    brand: 'apple',
    price: 25000,
    color: 'silver'
}

let numbers = [10,20,30,40]
var subjects = ['Math', 'English', 'History', 'English', 'Computer Science']
let gradesArr = [true, 10, 9, 0, { value: 10, nota: "excelencia academica"} ];

let matriz = [
    [0,10,9],
    [9,9,8,100,7,10,10,10,9,10,10,9],
    [9,9,8,100,7,10,10,1120,9],
    [9,9,8,100,777,10]
]

// console.log(name)
// console.log(student)
// console.log(student.name)
// console.log(numbers[2])
// console.log(subjects[4])
// console.log(gradesArr[3].nota)
// console.log(student.matters[4])
// console.log(matriz[1][3])

// imprimir la edad del student
console.log(student.age);
// imprimir el valor 67 de las matters de student
console.log(student.matters[6]);
// imprimir el valor 1120 de la matriz
console.log(matriz[2][7]);
// imprimir el valor 777 de la matriz
console.log(matriz[3][4]);
// imprimir el valor 0 de la matriz
console.log(matriz[0][0]);
// imprimir el valor true de gradesArr
console.log(gradesArr[0]);
