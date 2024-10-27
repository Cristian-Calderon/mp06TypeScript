var dinero = prompt("Cuanto dinero tiene? $$$");
console.log(dinero);
var producto = prompt("Desea introducir un producto? Si / No");
console.log(producto);
if (producto === 'Si' || producto === 'si') {
    var respustasi = true;
    while (respustasi) {
        var nuevoproducto = prompt('Como se llama el producto?');
        var nuevoprecio = prompt("Precio del producto? $$$");
        var preguntacorrecto = prompt("Correcto? o desea introducir otro producto responda no?");
        if (preguntacorrecto === 'si' || preguntacorrecto === 'Si') {
        }
        else if (preguntacorrecto === 'No' || preguntacorrecto === 'no') {
            respustasi = true;
        }
    }
}
else if (producto === 'No' || producto === 'no') {
    alert('La respuesta fue ' + producto + ' adios');
}
else {
    alert('Por favor responda si o no el producto');
}
