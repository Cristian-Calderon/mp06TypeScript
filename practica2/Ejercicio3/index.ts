// No tuve el problema de las constante porque dividi cada ejercicio en carpetas diferentes.
// Creamos y asignamos una constante llamada visitasMaximas con valor numerico 3.
const visitasMaximas: number = 3;
// Creamos y asignamos una constante llamada nombrePagina con un valor de string;
const nombrePagina: string = "holamundo.ar";
// Creamos y asignamos una variable let tipo numerico valor 0
let contadordeVisitas: number = 1;
// Creamos y asignamos una variable let tipo string.
var mensajedeBienvenida: string = "hola bienvenido";

/**
 * El "do" ejecuta todo el contenido que en globa y luego ejecuta el "while"
 * en este caso las dos primeras veces no cumple y en el ultimo caso cuando
 * el contador es mayor a visitasMaximas ejecuta el ultimo console.log().
 */
do {
    console.log(nombrePagina)
    console.log(mensajedeBienvenida)
    console.log("---------------------")
    contadordeVisitas++;

} while (contadordeVisitas < visitasMaximas){
    console.log("NO ERES BIENVENIDO, POR FAVOR ABANDONA ESTE SITIO")

}
