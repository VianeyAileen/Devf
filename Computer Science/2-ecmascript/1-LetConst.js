/**
 * Antes de ES6
 */
// console.log(text)
// var text = "Hola Devf"
// console.log(text)

// saludar(text, "vianey")

// metodo = function
// function saludar(mensaje, ) {
    
// }


function main(){
    let age = 18
    if (age >= 18) {
        var name = "vianey"
        let app = "borrás"
        console.log('Soy mayor de edad')
        console.log('en el if', app)
    } else {
        console.log(':(')
    }
    // console.log(app) => error, ya que app solo existe dentro del if
    console.log(age)
    console.log(name) // al ser global es accesible donde sea
}

main()

// console.log(age) => error, porque age solo existe dentro de la 
// función main
console.log(name) // al ser global es accesible desde donde sea
