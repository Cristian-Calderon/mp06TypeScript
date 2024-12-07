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
// Asignar la función y la variable al objeto window para que estén disponibles globalmente
window.mostrarClientes = mostrarClientes;
window.clientes = clientes;
