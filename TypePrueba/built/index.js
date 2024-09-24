"use strict";
function cambioTitulo() {
    let titulo = document.getElementById("titulo");
    if (titulo != null)
        titulo.innerHTML = "Título complejo";
    titulo.style.color = "Blue";
    titulo.remove();
}
let contador = 0;
function addToList() {
    let lista = document.getElementById("lista");
    contador++;
    let nuevoElemento = document.createElement("li");
    nuevoElemento.id = contador.toString();
    lista.append(nuevoElemento);
    nuevoElemento.innerHTML = "Elemento" + contador.toString();
}
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
        nuevoElemento.innerHTML = arrey[i];
    }
    div.append(nuevoElemento);
}
// Borrar li
function borrarli() {
    let ultimoLi = div.querySelector("li:last-child");
    for (let i = 0; i < arrey.length; i++) {
        if (input2.value === arrey[i]) {
            arrey.pop();
            div.removeChild(ultimoLi);
        }
        else {
            console.log("No hay elementos para borrar");
        }
    }
}
