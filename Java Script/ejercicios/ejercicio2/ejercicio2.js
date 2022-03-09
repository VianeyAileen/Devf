/*
    EJERCICIO
    Voy a pedir la temperatura en Kelvin al usuario (273K)
    la van a guardar en una variable
    van a conertir la temperatura en °C (Kelvin - 273)
    van a convertir la temperatura en °F ((Celsius * 9/5) + 32)
    Mostear en un alert "La temperatura TEMPKELVIN K es igual a TEMPFARENHEIT °F
                            TEMPKELVIN = temperatura en Kelvin
                            TEMPFAHRENHEIT = temperatura en Fahrenheit"
*/

var tempKelvin = prompt('Hola, por favor ngresa la temperatura') // pedimos la temperatura
var tempCelsius = (tempKelvin - 273) // convertimos a °C
var tempFahrenheit = ((tempCelsius * (9/5)) + 32) // convertimos a °F

alert('La temperatura ' + tempKelvin + ' K es igual a ' + tempFahrenheit + ' °F') // regresamos el resultado
