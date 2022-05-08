const superhero = {id: 1, name: 'peter', app: 'parker', alias: 'spiderman'}

// Sin usar literal template
console.log('Hola soy ' + superhero.name + ' ' + superhero.app + ' y yo soy ' + superhero.alias)
// Con literal templat
console.log(`Hola soy ${superhero.name} ${superhero.app} y yo soy ${superhero.alias}`)