const harryPotter = {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    wizard: true,
    ancestry: "half-blood",
    eyeColour:"green",
    hairColour:"black",
    wand : {
       wood: "holly",
       core: "phoenix feather",
       length: 11
    },
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alternate_actors: [
        {name: "Chris", app: "Evans", age: 38 , nationality:"USA"},
        {name: "Natalie", app: "Portman", age: 40 , nationality:"USA"}
    ],
    alive: true,
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
    address: {
        street: "Private Drive",
        number: "4",
        country: {
            suburb: "Little Winging",
            state: "Survey",

        }
    }
}

// suburb
// harryPotter.address.country.suburb NA => Porque si una propiedad intermedia no existe,
// falta desde el if
if (harryPotter && harryPotter.address && harryPotter.address.country && harryPotter.address.country.suburb) {
    console.log(harryPotter.address.country.suburb)
}

// Usando corto cicuito
if (harryPotter?.address?.country?.suburb) {
    console.log(harryPotter.address.country.suburb)
}

// name del segundo actor alternativo
if (harryPotter && harryPotter.alternate_actors && harryPotter.alternate_actors[1] && harryPotter.alternate_actors[1].name ) {
    console.log(harryPotter.alternate_actors[1].name)
}

// Se puede simplificar con corto circuito
if (harryPotter?.alternate_actors?.length && harryPotter?.alternate_actors[1].name) {
    console.log(harryPotter.alternate_actors[1].name)
} else {
    console.log('No existen actores alternativos')
}