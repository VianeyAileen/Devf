// Función para saber área de un rectángulo
function areaRectangulo(base, altura) {
    base = parseInt(prompt('Ingresa la base'))
    altura = parseInt(prompt('Ingresa la altura'))        
    area = base * altura
    alert('El área del rectángulo es ' + area + 'cm^2')
}
areaRectangulo()