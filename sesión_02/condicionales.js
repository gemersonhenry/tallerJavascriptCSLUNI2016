/*
SENTENCIAS CONDICIONALES:
IF, ELSE, SWITCH, WHILE, DO WHILE, FOR, FOR IN
 */


/*
IF, ELSE
 */
var n = 5;
if (true)
	n++;
console.log(n);
if (n>=6) {
	var m = 3;
	n = n+m;
}
console.log(n);
if (n<m*m)
	n = n*n;
else 
	n = n*2;
console.log(n);


/*
SWITCH
 */
var texto_switch;
var nombre = "Luis";
switch(nombre){
	case "Gemerson":
		texto_switch = "Coordinador de proyectos";
		break;
	case "Miguel":
		texto_switch = "Miembro de la CSLUNI";
		break;
	default:
		texto_switch = "No es miembro";
}
console.log(texto_switch);


/*
WHILE, DO WHILE
 */
var i = 0;
while(i<5){
	i++;
	// console.log(i);
}
console.log(i);
var j = 0;
do{
	j++;
	// console.log(j);
}while(j<5)
console.log(j);
// Diferencia principal: En el do while el bloque de código se ejecuta al menos una vez


/*
FOR, FOR IN
 */
var result = 1;
var num = '15.1945';
var arr = [ 5, 8, 12, 3.2, 4, -7, -11];
for (var i = 0; i < arr.length; i++) {
	result += arr[i];
}
console.log( result, result.toFixed(2), Math.round(result*100)/100 );
console.log( num, parseInt(num), parseFloat(num) );
var texto_in = '';
for (var i in arr) {
	texto_in += 'index: '+i+' --> '+arr[i]+'\n';
}
console.log(texto_in);