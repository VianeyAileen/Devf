const formElement = document.querySelector('#language-form')
let languages = []
// Selección del elemento padre
const ulElement =  document.querySelector('#list-languages')

// Constantes de aplicación
const STARTED_STATUS = 'started'
const FINISHED_STATUS = 'finished'
const STANDBY = 'standBy'

formElement.addEventListener('submit', (event) => {

    // clean
    cleanView()

    event.preventDefault()
    // destructuring
    const {languageElement, statusRadioElement} = event.target
    const languageValue = languageElement.value
    const radiosNodeList = statusRadioElement    
    const checkedElement = Array.from(radiosNodeList).find(element => element.checked)
    const statusValue = checkedElement.value
    const language = {
        text: languageValue,
        status: statusValue
    }
    // Agrega los lenguajes a un arreglo
    languages.push(language)

    renderLanguagesList(languages)
    renderContador(languages)
    resetForm(languageElement, statusRadioElement)
})

const renderLanguagesList = (languages) => {
    if (languages.length > 0) {
        languages.forEach(renderElementList)
    } else {
        const newDiv = document.createElement('div')
        const newContent = document.createTextNode('No hay lenguajes en la lista')
        newDiv.appendChild(newContent)
        ulElement.appendChild(newDiv)
    }
}

// Construye los elementos en la vista
const renderElementList = (element, index) => {
    // Creación de elementos hijos
    const liElement = document.createElement('li')
    const divElement = document.createElement('div')
    const iElement = document.createElement('i')
    const buttonElement =  document.createElement('button')

    // Agegado de clases a los nuevos elementos
    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    setClassForIcon(iElement, element.status)
    buttonElement.classList.add('bi', 'bi-trash3-fill', 'text-danger')
    buttonElement.setAttribute('type', 'button')
    buttonElement.setAttribute('index', index)
    buttonElement.addEventListener('click', handleDeleteClick)

    // Agregando nombre de lenguajes
    liElement.innerHTML = element.text

    // Hace aparecer los elementos
    ulElement.appendChild(liElement)
    liElement.appendChild(divElement)
    divElement.appendChild(iElement)
    divElement.appendChild(buttonElement)
}

// Asigna el icono de acuerdo al status que se hay seleccionado
const setClassForIcon = (iElement, status) => {
    if (status === STARTED_STATUS) {
        iElement.classList.add('bi', 'bi-play-circle-fill', 'text-primary')
    } else if (status === FINISHED_STATUS){
        iElement.classList.add('bi', 'bi-check-circle-fill', 'text-success')
    } else if (status === STANDBY) {
        iElement.classList.add('bi', 'bi-pause-circle-fill', 'text-warning')
    }
    // iElement.classList.add('bi', 'bi-pause-circle-fill', 'text-warning')
}

// Limpia el formulario
const resetForm = (languageElement, statusRadioElement) => {
    languageElement.value = ''
    Array.from(statusRadioElement).forEach(element => element.checked = false)
}

// Limpia al HTML
const cleanView = () => {
    ulElement.innerHTML = ''
}

// Elimina a los lengaujes seleccionados y reajusta el contador
const handleDeleteClick = (event) => {
    const positionStr = event.target.getAttribute('index')
    const position = parseInt(positionStr)
    languages.splice(position, 1)
    renderContador(languages)
    cleanView()
    renderLanguagesList(languages)
}

// Muestra el contador
const renderContador = (languagesArray) => {
    const countAll = document.querySelector('#language-all')
    const countComplete = document.querySelector('#languages-complete')
    const countPending = document.querySelector('#languages-pending')

    countAll.innerHTML = languagesArray.length

    // Calcular completados
    const completes = getCompletes(languagesArray)
    countComplete.innerHTML = completes

    // Calcular pendientes
    const pendings = getPendings(languagesArray)
    countPending.innerHTML = pendings
}

// Obtiene el conteo para los lenguajes cuyo status ha sido termiando
const getCompletes = (languagesArray) => {
    const completeElementsArray = languagesArray.filter(element => element.status === FINISHED_STATUS)
    return completeElementsArray.length
}

// Obtiene el conteo para los lenguajes cuto status es iniciado o standBy
function getPendings(languagesArray) {
    let num = 0
    for (let i = 0; i < languagesArray.length; i++) {
        const iterador = languagesArray[i]
        if (iterador.status === STARTED_STATUS || iterador.status === STANDBY) {
            num++
        }
    }
    return num
}