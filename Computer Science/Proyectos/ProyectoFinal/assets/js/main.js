// Get the root element
const containerElement = document.querySelector('.container')
const searchPokemon = document.querySelector('#pokemonInput')
let pokemons = []

const main = () => {
    fetch('/Computer Science/Proyectos/ProyectoFinal/api/character.json')
     .then(response => response.json())
     .then(data => normalizeData(data))
    //  .then(data => data.forEach(renderPokemons))
     .then(pokemons => {
         let i = 0
         while (i < pokemons.length) {
             renderPokemons(pokemons[i])
             i++
        }
    })
}
main()

// Normalize the data
const normalizeData = (data) => {
    data.forEach(element => {
        const {ThumbnailImage, number, name, type, abilities, weight, height} = element
        const pokemon = {
            image: ThumbnailImage,
            number: number,
            name: name,
            type: type,
            abilities: abilities,
            weight: weight,
            height: height
        }
        pokemons.push(pokemon)
    })
    return pokemons
}

const fetchPokemons = (number) => {
    for (let i = 0; i <= number; i++) {
        main(i)        
    }
}

// Show pokemons in the HTML
const renderPokemons = (element) => {
    // Create elements
    const card = document.createElement('div')
    const cardInner = document.createElement('div')
    const cardFront = document.createElement('div')
    const pNumber = document.createElement('p')
    const pName = document.createElement('p')
    const img = document.createElement('img')
    const cardBack = document.createElement('div')
    const h2 = document.createElement('h2')
    const pType = document.createElement('p')
    const pAbilities = document.createElement('p')
    const pWeight = document.createElement('p')
    const pHeight = document.createElement('p')

    // Asign class to the elements created previously
    card.classList.add('flip-card')
    cardInner.classList.add('flip-card-inner')
    cardFront.classList.add('flip-card-front')
    pNumber.classList.add('number')
    pNumber.innerHTML= '#' + element.number
    pName.innerHTML = element.name
    cardBack.classList.add('flip-card-back')
    h2.innerHTML = element.name
    pType.innerHTML = 'Type: ' + element.type
    pAbilities.innerHTML = 'Abilities: ' + element.abilities
    pWeight.innerHTML = 'Weight: ' + element.weight
    pHeight.innerHTML = 'Height: ' + element.height

    img.setAttribute('src', element.image)

    // Show the elements created on the HTML
    containerElement.appendChild(card)
    card.appendChild(cardInner)
    cardInner.appendChild(cardFront)
    cardFront.appendChild(img)
    cardFront.appendChild(pNumber)
    cardFront.appendChild(pName)
    cardInner.appendChild(cardBack)
    cardBack.appendChild(h2)
    cardBack.appendChild(pType)
    cardBack.appendChild(pAbilities)
    cardBack.appendChild(pWeight)
    cardBack.appendChild(pHeight)
}

// Find text matches
searchPokemon.addEventListener('keyup', (event) => {
    const inputText = event?.target?.value.toLocaleLowerCase() || ''
    cleanView()
    const pokemonsFiltered = filterPokemon(inputText)
    pokemonsFiltered.forEach(renderPokemons)
})

// Limpia la vista
const cleanView = () => {
    containerElement.innerHTML = ''
}

// Search using Filter
const filterPokemon = (searchingText) => {
    const pokemonsFiltered = pokemons.filter(pokemon => {
        const name = pokemon.name
        const number = pokemon.number
        return (name.toLocaleLowerCase()).includes(searchingText) || number.includes(searchingText)
    })
    return pokemonsFiltered
}
