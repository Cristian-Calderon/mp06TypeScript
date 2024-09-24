function cambioTitulo() {
    let titulo: HTMLElement = document.getElementById("titulo")!;
    if (titulo != null) titulo.innerHTML = "Título complejo";
    titulo.style.color = "Blue";
    titulo.remove();
}

let contador: number = 0;

function addToList() {
    let lista: HTMLElement = document.getElementById("lista")!;
    contador++;
    let nuevoElemento = document.createElement("li");
    nuevoElemento.id = contador.toString();
    lista.append(nuevoElemento);
    nuevoElemento.innerHTML = "Elemento" + contador.toString();
}

// Desde aca es mi codigo Cris
let input1: HTMLInputElement = document.getElementById("input1")! as HTMLInputElement;
let input2: HTMLInputElement = document.getElementById("input2")! as HTMLInputElement;
let button1: HTMLElement = document.getElementById("button1")!;
let div: HTMLElement = document.getElementById("lis")!;
let button2: HTMLElement = document.getElementById("button2")!;

button1.addEventListener("click", crearli);
button2.addEventListener("click", borrarli);

// Funcion crear li
let arrey: string[] = [];

function crearli() {
    let nuevoElemento = document.createElement("li");
    let texto: string = input1.value;
    // console.log(texto);
    arrey.push(texto);
    for (let i = 0; i < arrey.length; i++) {
        nuevoElemento.innerHTML = arrey[i]
    }
    div.append(nuevoElemento)
}

// Borrar li
function borrarli() {

    let ultimoLi = div.querySelector("li:last-child");
    for (let i = 0; i < arrey.length; i++) {
        if (input2.value === arrey[i]) {
            arrey.pop();
            div.removeChild(ultimoLi);
        } else {
            console.log("No hay elementos para borrar");
        }

    }
}