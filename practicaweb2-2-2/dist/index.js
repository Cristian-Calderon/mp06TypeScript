"use strict";
// Pensar mejor tematica
let clientes = [
    { nombre: "Cristian Calderon", email: "ccalderon@elpuig.com" },
    { nombre: "Raul Garcia", email: "raul@elpuig.com" },
    { nombre: "Manuel Marina", email: "manuel@elpuig.com" },
    { nombre: "Paco Puig", email: "paco@elpuig.com" },
    { nombre: "Jaume Clot", email: "jaume@elpuig.com" },
    { nombre: "Javier Luna", email: "javier@elpuig.com" },
    { nombre: "Juan Riquelme", email: "jr10boca" },
];
const correo = (email) => {
    return email.includes("@");
};
const mostrarClientes = (clientes) => {
    const body = document.body;
    const h3 = document.createElement("h3");
    h3.textContent = "Clientes";
    body.appendChild(h3);
    const lista = document.createElement("ul");
    body.appendChild(lista);
    // Comprobamos si es un correo válido
    const correosvalidos = clientes.filter(c => correo(c.email));
    // Mostramos los correos válidos
    correosvalidos.forEach(c => {
        const li = document.createElement("li");
        li.style.listStyle = "none";
        li.textContent = `${c.nombre} ${c.email}`;
        lista.appendChild(li);
    });
};
// Lista de productos
let productos = [
    { tipo: "pelicula", nombre: "El señor de los anillos" },
    { tipo: "videojuego", nombre: "Fifa 21", plataforma: "PS4" },
    { tipo: "videojuego", nombre: "Dota 2", plataforma: "PC" },
];
function agregarProducto(nombre, plataforma) {
    if (plataforma) {
        productos.push({ tipo: "videojuego", nombre, plataforma });
    }
    else {
        productos.push({ tipo: "pelicula", nombre });
    }
}
// Mostrar productos 
function mostrarProductos() {
    // Verificar si la lista ya existe
    let lista = document.querySelector("ul.productos");
    if (!lista) {
        // Si la lista no existe, crearla
        lista = document.createElement("ul");
        lista.className = "productos"; // Clase específica para identificarla
        document.body.appendChild(lista);
    }
    else {
        // Si la lista ya existe, vaciarla antes de llenarla de nuevo
        lista.innerHTML = "";
    }
    // Llenar la lista con los productos
    productos.forEach((p) => {
        const li = document.createElement("li");
        li.style.listStyle = "none";
        if (p.tipo === "pelicula") {
            li.textContent = `Película: ${p.nombre}`;
        }
        else {
            li.textContent = `Videojuego: ${p.nombre} Plataforma: ${p.plataforma}`;
        }
        lista.appendChild(li);
    });
}
function entrada() {
    const input = document.getElementById("multimedia");
    // Para quitar espacios en blanco
    const valor = input.value.trim();
    if (valor.includes(",")) {
        const [nombre, plataforma] = valor.split(",").map((v) => v.trim());
        if (nombre && plataforma) {
            agregarProducto(nombre, plataforma);
        }
        else {
            console.log("Formato incorrecto. Incluye un nombre y una plataforma");
        }
    }
    else {
        if (valor) {
            agregarProducto(valor);
        }
        else {
            console.log("Formato incorrecto. Incluye un nombre");
        }
    }
    input.value = "";
    actualizarProductos();
}
function actualizarProductos() {
    const listaExistente = document.querySelector("ul.productos");
    if (listaExistente) {
        listaExistente.remove(); // Eliminar solo la lista de productos
    }
    mostrarProductos();
}
function cargar() {
    console.log("Ejecutando");
    mostrarClientes(clientes);
    mostrarProductos();
    const input = document.getElementById("multimedia");
    const boton = document.getElementById("agregar");
    boton.addEventListener("click", entrada);
}
// Hacer accesible la función cargar al ambito global sin usar (type = "module")
window.cargar = cargar;
