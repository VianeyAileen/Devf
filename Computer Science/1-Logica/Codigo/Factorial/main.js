function factorial(num) {
    var num = prompt('Dame un número entero')
    var total = 1
    for (var i = 1; i <= num; i++) {
        total = total * i
        
    }
    alert('El factorial de ' + num + 'es: ' + total)
}
factorial()
