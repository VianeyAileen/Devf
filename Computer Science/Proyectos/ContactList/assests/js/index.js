// Obtener el elemento raiz HTML
const ulElement = document.querySelector('#contacts_ul')
const searchElement = document.querySelector('#characterInput')
let contacts = []

// Obtiene la información de una api
// ('http://hp-api.herokuapp.com/api/characters')
const main = () => {
    fetch('/Computer Science/Proyectos/ContactList/api/characters.json')
     .then(response => response.json())
     .then(data => normalizeData(data))
    //  .then(contacts => contacts.forEach(renderCardContact))
     .then(contacts => {
        let i = 0
        while (i < contacts.length) {
            renderCardContact(contacts[i])
            i++
        }
    })
}

// Normaliza los datos
const normalizeData = (data) => {
    data.forEach(element => {
        const {name, image} = element
        const contact = {
            text: name,
            photo: image
        }
        contacts.push(contact)
    });
    return contacts;
}

// Muestra la información en el HTML
const renderCardContact = (element) =>{

    // Creamos los elementos
    const li = document.createElement('li')
    const cardDiv = document.createElement('div')
    const photoDiv = document.createElement('div')
    const img = document.createElement('img')
    const textDiv = document.createElement('div')

    // Le asignamos las clases
    cardDiv.classList.add('card')
    photoDiv.classList.add('photo')

    // Valida si el contacto tiene una foto
    let photo = ''
    if (element?.photo) {
        photo = element.photo
    } else {
        photo = 'https://cdn-icons-png.flaticon.com/512/456/456212.png'
    }

    img.setAttribute('src', photo)    

    textDiv.classList.add('text')
    textDiv.innerHTML = element.text

    // Hacemos aparecer a los elementos
    ulElement.appendChild(li)
    li.appendChild(cardDiv)
    cardDiv.appendChild(photoDiv)
    photoDiv.appendChild(img)
    cardDiv.appendChild(textDiv)
}

// Limpia la vista
const cleanView = () => {
    ulElement.innerHTML = ''
}

// Busca las coincidencias de texto
searchElement.addEventListener('keyup', (event) => {
    const inputText = event?.target?.value.toLocaleLowerCase() || ''
    cleanView()
    const contactsFiltered = searchingWithFilter(inputText)
    contactsFiltered.forEach(renderCardContact)
})

// Busqueda haciendo el uso de Filter
const searchingWithFilter = (searchingText) => {
    const contactsFiltered = contacts.filter(contact => {
        const name = contact.text
        return (name.toLocaleLowerCase()).includes(searchingText)
    })
    return contactsFiltered
}

/*const searchingWithFor = (searchingText) => {
    let contactsFiltered = []
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i]
        const name = contact.text
        if ((name.toLocaleLowerCase()).includes(searchingText) ) {
            contactsFiltered.push(contact)
        }        
    }
    return contactsFiltered
}*/

main()