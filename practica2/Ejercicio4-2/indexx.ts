// Inicializa el dinero disponible
let dinero: number = parseFloat(prompt("¿Cuánto dinero tienes?"));

// Pregunta si desea introducir un producto
let deseaIntroducirProducto: string | null = prompt("¿Deseas introducir un producto? (Si/No)");

if (deseaIntroducirProducto === null || (deseaIntroducirProducto.toLowerCase() !== "si" && deseaIntroducirProducto.toLowerCase() !== "no")) {
    alert("Error: Respuesta inválida. El programa terminará.");
} else if (deseaIntroducirProducto.toLowerCase() === "no") {
    alert("¡Gracias por usar el programa! Adiós.");
} else {
    // Bucle para introducir productos
    let continuar: boolean = true;

    while (continuar) {
        // Pide el nombre del producto
        let nombreProducto: string = prompt("¿Cuál es el nombre del producto?") || "Producto desconocido";

        // Pide el precio del producto
        let precio: number = parseFloat(prompt("¿Cuál es el precio del producto?") || "0");

        // Pide la cantidad del producto
        let cantidad: number = parseInt(prompt("¿Cuántos productos tienes?") || "0");

        // Pregunta si es correcto o desea introducir otro producto
        let esCorrecto: string | null = prompt("¿Es correcto? (Si/No)");

        if (esCorrecto === null || esCorrecto.toLowerCase() !== "si") {
            // Si no es correcto, vuelve a preguntar
            alert("Por favor, vuelve a introducir los datos.");
            continue; // Reinicia el bucle
        }

        // Calcular el precio total
        let precioTotal: number = precio * cantidad;

        // Verificar si se puede realizar la compra
        if (precioTotal <= dinero) {
            alert("ORDEN CONFIRMADA\n" +
                `${nombreProducto} - ${precio}\n` +
                `Cantidad pedida - ${cantidad}\n` +
                `Total - ${precioTotal}\n` +
                `Dinero restante - ${dinero - precioTotal}`);
        } else {
            alert("ORDEN RECHAZADA\n" +
                `${nombreProducto} - ${precio}\n` +
                `Cantidad pedida - ${cantidad}\n` +
                `Total - ${precioTotal}\n` +
                `El importe supera el dinero que tienes.`);
        }
        // Salir del bucle después de procesar un producto
        continuar = false;
    }
}