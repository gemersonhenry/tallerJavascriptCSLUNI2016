/*
OPERADORES EN JAVASCRIPT
 */


/*
Operadores aritméticos
 */
var a=125, b=32, c=4, d=4.5, e=0, f=4;
var arreglo_operaciones = [ a+b, c-b, c*d, a/c, d/e, a%b];
b++;
c--;
--f;
++e;
--a;
console.log(b,c,f,e,a);
console.log(arreglo_operaciones);
/*if ( d/e == Infinity ) {
	console.log("Resultado: " + d/e);
} else {
	console.log("Resultado: Número real");
}*/


/*
Operador typeof
 */
var g;
console.log(typeof 5); // number
console.log(typeof false); // boolean
console.log(typeof "Carlos"); // string
console.log(typeof undefined, g); // undefined
/*if ( g == undefined ) {
	g = "Definido";
	console.log(g);
}
if ( typeof 5 == 'number' ) {
	console.log("Número");
}*/


/*
Operadores booleanos
 */
var p = true;
var q = false;
var r = true;
var m = 5, n = 7, o = 10;
var obj = { a:5, b:'Lucy', c:true };
var arr_01 = [ p, !p, !!p ];
var arr_02 = [ p&&q , p||q , p||r , 1=='1' , 1==='1' ];
var arr_03 = [ m>=n , m==n , m==o/2 ];
var var_default = obj.d || 'Valor por defecto';
console.log(arr_01, arr_02, arr_03, var_default);


/*
Consideraciones Especiales:
La doble negación es una forma sencilla de convertir cualquier valor en su BOOLEANO correspondiente
 */
var arr_boolean = [
	!!5, !!'Henry', !!undefined, !!0, !!null, !!'', !!NaN, !!-8
];
console.log(arr_boolean);



