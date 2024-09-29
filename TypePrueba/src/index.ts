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
let input1: HTMLInputElement = document.getElementById("input1")! as HTMLInputElement;
let input2: HTMLInputElement = document.getElementById("input2")! as HTMLInputElement;
let button1: HTMLElement = document.getElementById("button1")!;
let div: HTMLElement = document.getElementById("lis")!;
let button2: HTMLElement = document.getElementById("button2")!;

// Crear parrafo:
let valuep: HTMLInputElement = document.getElementById("valuep")! as HTMLInputElement;
let buttonp: HTMLElement = document.getElementById("buttonp")!;
let rnormal: HTMLElement = document.getElementById("rnormal")!;
let rbold: HTMLElement = document.getElementById("rbold")!;
let ritalic: HTMLElement = document.getElementById("ritalic")!;
let cblue: HTMLElement = document.getElementById("cblue")!;
let cverde: HTMLElement = document.getElementById("cverde")!;
let divson : HTMLElement = document.getElementById("divson")!;



button1.addEventListener("click", crearli );
button2.addEventListener("click", borrarli);

// Funcion crear li
let arrey: string[] = [];

function crearli() {
    let nuevoElemento = document.createElement("li");
    let texto: string = input1.value;
    // console.log(texto);
    arrey.push(texto);
    for (let i = 0; i < arrey.length; i++) {
        console.log(arrey[i]);
        nuevoElemento.innerHTML = arrey[i]

    }
    div.append(nuevoElemento)
}

function borrarli() {
    let valorABorrar: string = input2.value;
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

function crearparrafo() {

}