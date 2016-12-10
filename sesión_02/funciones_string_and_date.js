/*
FUNCIONES Y MÉTODOS APLICABLES A STRING
 */

// Supongamos el string con el texto "javascript"
"javascript"[2] // Acceso como array, devuelve el tercer carácter "v", ya que la primera posición ES 0 
"javascript".length() // Devuelve 10
"javascript".charCodeAt(2) // Devuelve el caracter en formato UNICODE de "v", el 118
"javascript".indexOf("script"); // Devuelve el índice donde comienza el string "script", el 4
"javascript".substring(4,10); // Devuelve la parte del string comprendida entre los valores 4 y 10


/*
FUNCIONES Y MÉTODOS APLICABLES A DATE
 */

var fecha = new Date();
fecha = fecha.toString(); // "Wed May 20 2015 20:16:25 GMT+0200 (CEST)"
fecha = fecha.split(" "); // ["Wed", "May", "20", "2015", "20:16:25", "GMT+0200", "(CEST)"]
fecha[4]; // "20:16:25"













