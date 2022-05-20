// Compartir métodos
const autoMethods = {
    arranca: function(aceleracion) {
        console.log('arranca...', aceleracion)
    },
    frena: function() {
        console.log('frena...');
    }
}

function createAuto(name, price, noLlantas, dimensiones, millas) {
    const auto = {
        name: name,
        price: price,
        noLlantas: noLlantas,
        dimensiones: dimensiones,
        millas: millas,
        arranca: autoMethods.arranca,
        frena: autoMethods.frena
    }
    return auto
}

const tsuru = createAuto('tsuru', 200, 4, '20x120x80', 100)
const mazda = createAuto('mazda', 400, 4, '30x130x90', 50)

console.log(tsuru.arranca(10));
console.log(mazda.arranca(100));