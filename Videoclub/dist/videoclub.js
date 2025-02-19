"use strict";
// Arrays to store movies and games
const movies = [];
const games = [];
// Mapa inicial de clientes
const clients = new Map([
    ["Anna", { nombreCompleto: "Anna", fechaNacimiento: "2025-02-19", email: "anna@example.com", password: "12345678Ab", favoriteMovie: "Rocky I", generoPelicula: ["Acción"] }],
    ["Joan", { nombreCompleto: "Joan", fechaNacimiento: "2025-02-19", email: "joan@example.com", password: "12345678Ab", favoriteMovie: "Rocky II", generoPelicula: ["Acción"] }],
    ["Maria", { nombreCompleto: "Maria", fechaNacimiento: "2026-02-19", email: "invalidemail", password: "0000", favoriteMovie: "Rocky III", generoPelicula: ["Acción"] }]
]);
// Función para validar el formato de un email
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// Función para mostrar los clientes desde localStorage
function mostrarClientes() {
    const clientList = document.getElementById("clientList");
    clientList.innerHTML = ""; // Limpiar la lista antes de mostrar los nuevos datos
    const almacenados = localStorage.getItem("clientes");
    if (almacenados) {
        const clientes = JSON.parse(almacenados); // Recuperar clientes desde localStorage
        clientes.forEach((cliente) => {
            const li = document.createElement("li");
            li.textContent = `${cliente.nombreCompleto} - ${cliente.email}`;
            clientList.appendChild(li); // Mostrar los clientes en la lista
        });
    }
}
// Función para mostrar los clientes del mapa inicial (de prueba)
function mostrarClients(clients) {
    const clientList = document.getElementById("clientList");
    clients.forEach((cliente, key) => {
        if (isValidEmail(cliente.email)) {
            const li = document.createElement("li");
            li.textContent = `${cliente.nombreCompleto}: ${cliente.email}`;
            clientList.appendChild(li); // Mostrar los clientes en la lista
        }
    });
}
function loadData() {
    // Si hay parámetros en la URL (vienen del formulario), se procesan
    if (window.location.search) {
        processFormData(); // Procesar los datos del formulario
    }
    // Mostrar los clientes desde localStorage
    mostrarClientes();
    // Mostrar los clientes del Map inicial de prueba
    mostrarClients(clients);
    // Agregar algunos productos de ejemplo
    addProduct("Final Fantasy X, PS2");
    addProduct("Pesadilla en Elm Street");
    // Mostrar los productos (películas y videojuegos)
    showData();
}
// Función para procesar los datos del formulario (enviados por GET) y guardarlos en LocalStorage
function processFormData() {
    const urlParams = new URLSearchParams(window.location.search);
    const nombreCompleto = urlParams.get("nombreCompleto");
    const fechaNacimiento = urlParams.get("fechaNacimiento");
    const email = urlParams.get("email");
    const password = urlParams.get("password");
    const favoriteMovie = urlParams.get("favoriteMovie");
    const generoPelicula = urlParams.getAll("generoPelicula");
    // Verificamos si los parámetros del formulario son válidos
    if (nombreCompleto && fechaNacimiento && email && password) {
        let clientes = [];
        const almacenados = localStorage.getItem("clientes");
        if (almacenados) {
            clientes = JSON.parse(almacenados); // Cargar los datos anteriores de localStorage
        }
        const clienteExistente = clientes.find(cliente => cliente.email === email);
        if (!clienteExistente) {
            const nuevoCliente = {
                nombreCompleto,
                fechaNacimiento,
                email,
                password,
                favoriteMovie: favoriteMovie || "",
                generoPelicula,
            };
            clientes.push(nuevoCliente);
            console.log("Nuevo cliente añadido:", nuevoCliente);
            localStorage.setItem("clientes", JSON.stringify(clientes));
        }
    }
    mostrarClientes();
}
function addProduct(productName, platform) {
    const input = document.getElementById("itemInput");
    const value = productName
        ? `${productName}${platform ? `, ${platform}` : ""}`
        : input.value.trim();
    input.value = "";
    if (value.includes(",")) {
        const [gameName, gamePlatform] = value.split(",").map((v) => v.trim());
        if (gameName && gamePlatform) {
            games.push(gameName + ", " + gamePlatform);
        }
    }
    else if (value) {
        movies.push(value);
    }
}
// Función para escribir una tabla HTML con los datos (películas y/o videojuegos)
function escriureTaula(titol, objectes, objectes2) {
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
    const table = document.createElement("table");
    const header = document.createElement("tr");
    header.innerHTML = objectes2
        ? "<th>Películas</th><th>Videojuegos</th>"
        : `<th>${titol}</th>`;
    table.appendChild(header);
    const maxLength = Math.max(objectes.length, objectes2 ? objectes2.length : 0);
    for (let i = 0; i < maxLength; i++) {
        const row = document.createElement("tr");
        row.innerHTML = objectes2
            ? `<td>${objectes[i] || ""}</td><td>${objectes2[i] || ""}</td>`
            : `<td>${objectes[i]}</td>`;
        table.appendChild(row);
    }
    tableContainer.appendChild(table);
}
// Función para mostrar datos: películas, videojuegos o ambos
function showData(tipus) {
    switch (tipus) {
        case "Pel·licules":
            escriureTaula(tipus, movies);
            break;
        case "Videojocs":
            escriureTaula(tipus, games);
            break;
        default:
            escriureTaula("", movies, games);
            break;
    }
}
// Función para configurar la validación del formulario y mostrar mensajes de error en el propio formulario
function setupFormValidation() {
    const form = document.getElementById("formulariVideoclub");
    if (form) {
        form.addEventListener("submit", (event) => {
            let valido = true;
            // Validar nombre completo
            const nombreInput = document.getElementById("fullName");
            const nombreError = document.getElementById("nombreError");
            if (!nombreInput.value.trim()) {
                nombreError.textContent = "El nombre completo es requerido.";
                valido = false;
            }
            else {
                nombreError.textContent = "";
            }
            // Validar fecha de nacimiento
            const fechaInput = document.getElementById("birthDate");
            const fechaError = document.getElementById("fechaError");
            if (!fechaInput.value) {
                fechaError.textContent = "La fecha de nacimiento es requerida.";
                valido = false;
            }
            else {
                fechaError.textContent = "";
            }
            // Validar email
            const emailInput = document.getElementById("email");
            const emailError = document.getElementById("emailError");
            if (!emailInput.checkValidity()) {
                emailError.textContent = "Introduce un email válido.";
                valido = false;
            }
            else {
                emailError.textContent = "";
            }
            // Validar contraseña
            const passwordInput = document.getElementById("password");
            const passwordError = document.getElementById("passError");
            const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
            if (!passwordPattern.test(passwordInput.value)) {
                passwordError.textContent =
                    "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.";
                valido = false;
            }
            else {
                passwordError.textContent = "";
            }
            if (!valido) {
                event.preventDefault();
            }
        });
    }
}
// Limpiar local storage
// function limpiarLocalStorage(): void {
//   localStorage.removeItem("clientes");
//   console.log("LocalStorage limpiado.");
//   mostrarClientes();
// }
//# sourceMappingURL=videoclub.js.map