// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
// Dentro de la prueba llamamos a nuestra funcion sum con 2 numeros
let total = sum (14, 9);

//Esperamos que la suma de esos 2 numeros sea 23
expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const toBe = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(toBe); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)

})

test("One dollar should be 154.36 yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(3.5);

    // Si 1 dolar son 154.36 yenes, entonces 3.5 dolares debe ser (3.5 * 154.36)
    const toBe = 3.5 * 154.36;

    // Hago mi comparación (la prueba)
    expect(yenes).toBe(toBe); // 1 dolar son 154.36 yenes, entonces 3.5 dolares deberían ser = (3.5 * 154.36)

})

test("One yen should be 0.0052 libras esterlinas", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const libras = fromYenToPound(3.5);

    // Si 1 yen son 0.0052 libras esterlinas, entonces 3.5 yenes debe ser (3.5 * 0.0052)
    const toBe = 3.5 * 0.0052;

    // Hago mi comparación (la prueba)
    expect(libras).toBe(toBe); // 1 yen son 0.0052 libras esterlinas, entonces 3.5 yenes deberían ser = (3.5 * 0.0052)

})


