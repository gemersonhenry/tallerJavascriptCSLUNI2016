
var filas = 5;
var columnas = 10;
var count = 0;
var count_click = 0;
var total_count = 20;
var periodo; // en milisegundos
var clicked = false;
var out = document.getElementById("puntaje");
var start = true;

function empezar()
{
	if (start) 
	{
		count = 0;
		count_click = 0;
		clicked = false;
		out.value = 0;
		periodo = parseInt( document.getElementById('nivel').value ) || 1000;
		console.log(periodo);
		start = false;

		var intervalo = setInterval( 
			function() {
				get_random_id( filas-1 , columnas-1 , periodo );
				count++;
				if ( count === total_count ) {
					clearInterval( intervalo );
					start = true;
				}
			}
		,periodo );
	} 		
}	

function get_random_id(/*filas*/ m,/*columnas*/ n, /*periodo*/ r)
{
	clicked = false;
	var x = n_random(m);
	var y = n_random(n);
	var e = document.getElementById( x + '' + y );
	var r_temp = r*0.95;
	e.classList.add('active');

	setTimeout( function() {
		e.classList.remove('active');
	}, r_temp ) // ESTE CÓDIGO GENERA UN ERROR VISUAL MÁS NO FUNCIONAL
}

function n_random(/*numero entero*/ n)
{
	return Math.round(Math.random()*n);
}

function click_casillero(id)
{		
	var e = document.getElementById(id);
	
	if ( e.classList.contains('active') && !clicked ) {
		count_click++;
		clicked = true;
		out.value = count_click;
	}
}



