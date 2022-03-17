// Función para saber área de un rombo
function areaRombo(dmayor, dmenor) {
    dmayor = parseInt(prompt('Ingresa el valor de la diagonal mayor'))
    dmenor = parseInt(prompt('Ingresa el valor de la diagonal menor'))      
    area = (dmayor * dmenor) / 2
    alert('El área del rombo es ' + area + 'cm^2')
}
areaRombo()