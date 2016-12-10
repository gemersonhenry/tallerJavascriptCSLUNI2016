/*
FUNCIONES Y SUS USOS
 */


/*
Definición
 */
function nombre_de_la_funcion(arg01, arg02, other){
	// codigo de la función
}


/*
Consideraciones
 */
function saludar(nombre){
	return 'Hola ' + nombre + '\n';
}
function despedirse(nombre){
	var nombre = nombre || 'Carlos';
	return 'Adios ' + nombre + '\n';
}
console.log( saludar("Henry"), saludar(), despedirse("Henry"), despedirse() );

/*
Ambito de una funcion
 */
var valor='global', texto='saludo';
function funcion_local(){
	var valor='local'; // Eliminar está línea de código genera un comportamiento extraño
	return valor;
}
console.log( valor, funcion_local() );


/*
CLOSURES
 */


/*
Funciones como objetos
 */
var saludar = function(nombre)
{
	if ( typeof nombre === 'string' && nombre.length > 0 ) 
	{
		return 'Hola ' + nombre + ', un gusto saludarte.\n';
	}
	else
	{
		return 'Hola visitante, un gusto saludarte.\n';	
	}
}
console.log( saludar("Henry"), saludar(), saludar(""), saludar(3) );

/*
Funciones anidadas
 */
var a = "OLA ";
function externa()
{
	var b = "K ";
	function interna()
	{
		var c = "ASE";
		return a + b + c;
	}
	return interna;
}
var m = externa;
var n = externa();
var p = externa()();
console.log( m, n, p );

/*
Funciones closure
 */
var mi_contador = (function()
{
	var _contador = 0;

	function incrementar()
	{
		_contador++;
	}

	function decrementar()
	{
		_contador--;
	}

	function valor()
	{
		return _contador;
	}

	return {
		incrementar: incrementar,
		decrementar: decrementar,
		valor: valor
	}
})();
console.log( mi_contador.valor() );

/*
Ejemplo
 */
function inventario (nombre) 
{
	var _nombre = nombre;
	var _articulos = {};

	function add (nombre, cantidad) 
	{
		_articulos[nombre] = cantidad;
	}

	function borrar (nombre) 
	{
		delete _articulos[nombre];
	}

	function cantidad (nombre) 
	{
		return _articulos[nombre];
	}

	function nombre () 
	{
		return _nombre;
	}

	function articulos ()
	{
		return _articulos;
	}

	return {
		add: add,
		borrar: borrar,
		cantidad: cantidad,
		nombre: nombre,
		articulos: articulos
	}
}

var libros = inventario("libros");
libros.add("AngularJS", 3);
libros.add("JavaScript", 10);
libros.add("NodeJS", 5);
libros.cantidad("AngularJS");
libros.cantidad("JavaScript");
libros.borrar("JavaScript");
libros.cantidad("JavaScript");

console.log(libros.articulos());











