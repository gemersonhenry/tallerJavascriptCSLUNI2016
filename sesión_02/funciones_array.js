/*
METODOS QUE SON APLICABLES A UN ARRAY
 */

var miArray = [1, 2, 3, 4]; // Array de números
var miArray = ["Hola", "que", "tal"]; // Array de Strings
var miArray = [ {propiedad: "valor1" }, { propiedad: "valor2" }]; // Array de objetos
var miArray = [[2, 4], [3, 6]]; // Array de arrays, (Matriz);
var miArray = [1, true, [3,2], "Hola", {clave: "valor"}]; // Array mixto

/*
Métodos
 */

var miArray = [3, 6, 1, 4];
miArray.length; // Devuelve 4
miArray.sort(); // Devuelve un nuevo array con los valores ordenados: [1, 3, 4, 6]
miArray.pop(); // Devuelve el último elemento del array y lo saca. Devuelve 6 y miArray queda [1, 3, 4] 
miArray.push(2); // Inserta un nuevo elemento en el array al final de este, devuelve el nuevo array [1, 3, 4, 2]
miArray.reverse(); // Invierte el array, [2,4,3,1]
miArray.join(',') // Devuelve un string formado por la concatenación de sus elementos y la ,


