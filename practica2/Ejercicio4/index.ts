let dinero: string = prompt("Cuanto dinero tiene? $$$");

let producto: string = prompt("Desea introducir un producto? Si / No");

if (producto === 'Si' || producto === 'si') {

    let respustasi: boolean = true;
    do {
        let nuevoproducto: string = prompt('Como se llama el producto?');
        let nuevoprecio: string = prompt("Precio del producto? $$$");
        let cantidad: number = parseInt(prompt("Cuantos productos tienes?"));
        let escorrecto: string = prompt('Tu cantidad es' + cantidad + 'es correcto Si/No');

        if (escorrecto === 'Si' || escorrecto === 'si') {
            alert('Vuelva a introducir los datos.');
            respustasi;
        }
        let total: number = parseFloat(nuevoprecio) + cantidad;

        if (total <= parseFloat(dinero)) {
            alert("ORDEN CONFIRMADA\n" +
                `${nuevoproducto} - ${nuevoprecio}\n` +
                `Cantidad pedida - ${cantidad}\n` +
                `Total - ${total}\n` +
                `Dinero restante - ${parseFloat(dinero) - total}`);
        } else {
            alert("ORDEN RECHAZADA\n" +
                `${nuevoproducto} - ${nuevoprecio}\n` +
                `Cantidad pedida - ${cantidad}\n` +
                `Total - ${total}\n` +
                `El importe supera el dinero que tienes.`);
        }
        let respuesta: string = prompt("¿Deseas introducir otro producto? (Si/No)");
        respustasi = respuesta !== null && respuesta.toLowerCase() === "si";


    } while (respustasi)
}