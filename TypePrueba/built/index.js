"use strict";
// function cambioTitulo() {
//     let titulo: HTMLElement = document.getElementById("titulo")!;
//     if (titulo != null) titulo.innerHTML = "Título complejo";
//     titulo.style.color = "Blue";
//     titulo.remove();
// }
// let contador: number = 0;
// function addToList() {
//     let lista: HTMLElement = document.getElementById("lista")!;
//     contador++;
//     let nuevoElemento = document.createElement("li");
//     nuevoElemento.id = contador.toString();
//     lista.append(nuevoElemento);
//     nuevoElemento.innerHTML = "Elemento" + contador.toString();
// }
// Desde aca es mi codigo Cris
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button1 = document.getElementById("button1");
let div = document.getElementById("lis");
let button2 = document.getElementById("button2");
button1.addEventListener("click", crearli);
button2.addEventListener("click", borrarli);
// Funcion crear li
let arrey = [];
function crearli() {
    let nuevoElemento = document.createElement("li");
    let texto = input1.value;
    // console.log(texto);
    arrey.push(texto);
    for (let i = 0; i < arrey.length; i++) {
        console.log(arrey[i]);
        nuevoElemento.innerHTML = arrey[i];
    }
    div.append(nuevoElemento);
}
function borrarli() {
    let valorABorrar = input2.value;
    // Filtrar el array eliminando el valor que se ingresó en input2
    arrey = arrey.filter(item => item !== valorABorrar);
    // Limpiar el contenido actual del div (lista de elementos)
    div.innerHTML = "";
    // Re-generar la lista actualizada
    arrey.forEach(item => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerHTML = item;
        div.append(nuevoElemento);
    });
}
function name(params) {
}
