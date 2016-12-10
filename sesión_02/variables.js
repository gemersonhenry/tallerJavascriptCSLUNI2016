/*
TEMA 01: DEFINICIÓN DE VARIABLES, CONSTANTES Y BUENAS PRÁCTICAS
 */


/*
Declaración e inicialización de variables, constantes y objetos
 */
var edad = 30, dni = 66669999, promedio = 13.72;
var nombre = 'Gemerson', apellido = 'Bendezú';
var casado = true;
var sueldo;
const SUELDO_MINIMO = 850.00;
var arreglo_number = new Array(), arreglo_string = new Array(); 
var arreglo_boolean = [], arreglo_otro = [];
var arreglo_error;


/*
Insertando datos en un array
 */
// SUELDO_MINIMO = 900.00;
arreglo_number.push(edad);
arreglo_number.push(dni);
arreglo_number.push(promedio);
arreglo_number.push(SUELDO_MINIMO);
arreglo_string.push(nombre);
arreglo_string.push(apellido);
arreglo_boolean.push(casado);
arreglo_otro.push(sueldo);
//arreglo_error.push("vector");



/*
Imprimiendo todos los datos en consola
 */
console.log(arreglo_number, arreglo_string, arreglo_boolean, arreglo_otro);


/*
Identificando los tipos de datos (Number, String, Boolean, Undefined)
 */
arreglo_number.map( x => console.log( typeof(x) ) );
arreglo_string.map( x => console.log( typeof(x) ) );
arreglo_boolean.map( x => console.log( typeof(x) ) );
arreglo_otro.map( x => console.log( typeof(x) ) );


/*
Aplicamos funciones en partes del código que se repita constantemente
1. Identificamos las partes que se repiten
2. Las partes que no se repiten se tomarán como parámetros de la función
 */
function print_typeof(arr)
{
	arr.map( x => console.log( typeof(x) ) );
}
