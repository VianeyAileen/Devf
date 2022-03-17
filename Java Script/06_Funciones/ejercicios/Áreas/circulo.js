// Función para saber área de un círculo
function areaCirculo(radio) {
    radio = parseInt(prompt('Ingresa un radio'))       
    area = 3 * (radio * radio)
    alert('El área del círculo es ' + area + 'cm^2')
}
areaCirculo()