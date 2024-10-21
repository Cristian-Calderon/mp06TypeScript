// Inicializa el dinero disponible
var dinero = parseFloat(prompt("¿Cuánto dinero tienes?"));
// Pregunta si desea introducir un producto
var deseaIntroducirProducto = prompt("¿Deseas introducir un producto? (Si/No)");
if (deseaIntroducirProducto === null || (deseaIntroducirProducto.toLowerCase() !== "si" && deseaIntroducirProducto.toLowerCase() !== "no")) {
    alert("Error: Respuesta inválida. El programa terminará.");
}
else if (deseaIntroducirProducto.toLowerCase() === "no") {
    alert("¡Gracias por usar el programa! Adiós.");
}
else {
    // Bucle para introducir productos
    var continuar = true;
    while (continuar) {
        // Pide el nombre del producto
        var nombreProducto = prompt("¿Cuál es el nombre del producto?") || "Producto desconocido";
        // Pide el precio del producto
        var precio = parseFloat(prompt("¿Cuál es el precio del producto?") || "0");
        // Pide la cantidad del producto
        var cantidad = parseInt(prompt("¿Cuántos productos tienes?") || "0");
        // Pregunta si es correcto o desea introducir otro producto
        var esCorrecto = prompt("¿Es correcto? (Si/No)");
        if (esCorrecto === null || esCorrecto.toLowerCase() !== "si") {
            // Si no es correcto, vuelve a preguntar
            alert("Por favor, vuelve a introducir los datos.");
            continue; // Reinicia el bucle
        }
        // Calcular el precio total
        var precioTotal = precio * cantidad;
        // Verificar si se puede realizar la compra
        if (precioTotal <= dinero) {
            alert("ORDEN CONFIRMADA\n" +
                "".concat(nombreProducto, " - ").concat(precio, "\n") +
                "Cantidad pedida - ".concat(cantidad, "\n") +
                "Total - ".concat(precioTotal, "\n") +
                "Dinero restante - ".concat(dinero - precioTotal));
        }
        else {
            alert("ORDEN RECHAZADA\n" +
                "".concat(nombreProducto, " - ").concat(precio, "\n") +
                "Cantidad pedida - ".concat(cantidad, "\n") +
                "Total - ".concat(precioTotal, "\n") +
                "El importe supera el dinero que tienes.");
        }
        // Salir del bucle después de procesar un producto
        continuar = false;
    }
}
