/*
FUNCIONES PRINCIPALES USADAS PARA EL TRATAMIENTO DE NÚMEROS
 */

// parseInt();
parseInt("1111"); // Devuelve 1111
parseInt("1111", 2); // Devuelve 15
parseInt("1111", 16); // Devuelve 4369

// parseFloat();
parseFloat("5e3"); // Devuelve 5000
parseFloat("15.268"); // Devuelve 15.268

// number.toFixed(x)
var n = 2.5674;
n.toFixed(0); // Devuelve "3"
n.toFixed(2); // Devuelve "2.57"

// number.toExponential(x)
var n = 2.5674;
n.toExponential(2); // Devuelve "2.56e+0"

// number.toString(base)
(1111).toString(10); // Devuelve "1111"
(15).toString(2); // Devuelve "1111"
(4369).toString(16) // Devuelve "1111"


/*
MÓDULO MATH
 */

Math.PI // Número Pi = 3.14159265...
Math.E // Número e = 2.7182818...
Math.random() // Número aleatorio entre 0 y 1, ej: 0.45673858
Math.pow(2,6) // Potencia de 2 elevado a 6 = 64;
Math.sqrt(4) // raiz cuadrada de 4 = 2
Math.min(4,3,1) // Devuelve el mínimo del conjunto de números = 1
Math.max(4,3,1) // Devuelve el máximo del conjunto de números = 4
Math.floor(6.4) // Devuelve la parte entera más próxima por debajo, en este caso 6
Math.ceil(6.4) // Devuelve la parte entera más próxima por encima, en este caso 7
Math.round(6.4) // Redondea a la parte entera más próxima, en este caso 6
Math.abs(x); // Devuelve el valor absoluto de un número

// Funciones trigonométricas
Math.sin(x); // Función seno de un valor
Math.cos(x); // Función coseno de un valor
Math.tan(x); // Función tangente de un valor
Math.log(x); // Función logaritmo
// ... existen más funciones trigonométricas











