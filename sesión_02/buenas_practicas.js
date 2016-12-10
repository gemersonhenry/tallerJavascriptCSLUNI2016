/*
BUENAS PRÁCTICAS EN JAVASCRIPT
 */


/*
Uso del for
 */

function test_rendimiento_01()
{
	var objeto_01 = {
		unArray: new Array(10000)
	}
	console.time('Test01');
	for(var i = 0; i < objeto_01.unArray.length; i++){
		objeto_01.unArray[i] = 'Hola!';
	}
	console.timeEnd('Test01');	
}

function test_rendimiento_02()
{
	var objeto_02 = {
		unArray: new Array(10000)
	}
	console.time('Test02');
	for (var j = 0, longitud = objeto_02.unArray.length; j < longitud; j++) {
		objeto_02.unArray[j] = 'Hola!';
	}
	console.timeEnd('Test02');
}

function test_rendimiento_03()
{
	var objeto_03 = {
		unArray: new Array(10000)
	}
	console.time('Test03');
	var i = 0;
	var longitud = objeto_03.unArray.length;
	while ( i < longitud ) {
		objeto_03.unArray[i] = 'Hola!';
		i++;
	}
	console.timeEnd('Test03');

}

setInterval(function() {

	test_rendimiento_01();
	test_rendimiento_02();
	test_rendimiento_03();
	console.log('---------------------');

}, 2000);

