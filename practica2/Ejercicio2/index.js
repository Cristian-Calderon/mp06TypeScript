// Creamos y asignamos una constante llamada visitasMaximas con valor numerico 3.
var visitasMaximas = 3;
// Creamos y asignamos una constante llamada nombrePagina con un valor de string;
var nombrePagina = "holamundo.ar";
// Creamos y asignamos una variable let tipo numerico valor 0
var contadordeVisitas = 1;
// Creamos y asignamos una variable let tipo string.
var mensajedeBienvenida = "hola bienvenido";
/** Con un condicional preguntamos si el contadordeVisitas
 * es menor a las visitasMaximas.
 * 1. Si se cumple aumentamos el contador.
 * 2. Mostramos por consola el nombre de la pagina.
 * 3. Mostramos un mensaje de bienvenida.
 * 4. Agregue unas lineas para separar los console.log
 * */
if (contadordeVisitas < visitasMaximas) {
    contadordeVisitas++;
    console.log(nombrePagina);
    console.log(mensajedeBienvenida);
    console.log("---------------------");
}
if (contadordeVisitas < visitasMaximas) {
    contadordeVisitas++;
    console.log(mensajedeBienvenida);
    console.log("---------------------");
}
/**
 * En esta condicional agregamos un else que en el
 * caso que no cumpla el contadordeVisitas menor al
 * de visitasMaximas.
 *
 * Nos mostrara un else que nos dira que superamos
 * el numero maximo de visitas.
 */
if (contadordeVisitas < visitasMaximas) {
    contadordeVisitas++;
    console.log(mensajedeBienvenida);
    console.log("---------------------");
}
else {
    console.log("NO ERES BIENVENIDO, POR FAVOR ABANDONA ESTE SITIO");
    console.log("---------------------");
}
/**
 * En el caso de CONST : Use dos constante porque no cambiaran, el valor sera
 * el mismo.
 *
 * En el caso de LET : Use una variable let porque puede
 * variar.
 *
 * En el caso de VAR : Lo use porque era obligatorio en el ejericicio
 * hubiera usando un LET, el VAR igual puede cambiar.
 */
