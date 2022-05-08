const superhero = {id: 1, name: 'peter', app: 'parker', alias: 'spiderman'}

// Object => Objeto o entidad (excepción: Si el objeto estpa con mayúsculas
//es porque es un método estático)
// entries => método o funciones
 
console.log(Object.entries(superhero)) // Obtiene un arreglo de arreglos con [Key, value] de un objeto.
console.log(Object.keys(superhero)) // Obtiene las llave del arreglo.
console.log(Object.values(superhero)) // Obtiene los valores del arreglo.

const superhero2 = Object.create(superhero) // Crea un nuevo objeto
superhero2.name = 'pedro'
console.log(superhero.name, superhero2.name)