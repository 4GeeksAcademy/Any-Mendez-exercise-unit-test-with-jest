// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

let oneDollarIs = {
    "JPY": 154.36
}

let oneYenIs = {
    "GBP": 0.0052
}
    

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let resultInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return resultInDollar;
}

const fromDollarToYen = function (valueInDollar){
    let resultInYen = valueInDollar * oneDollarIs.JPY;
    return resultInYen;
}

const fromYenToPound = function(valueInYen){
    let resultInPound = valueInYen * oneYenIs.GBP;
    return resultInPound;
}


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromYenToPound };

