"use strict";
// Map que contiene clientes y sus correos electrónicos
const clients = new Map([
    ["Anna", "anna@example.com"],
    ["Joan", "joan@example.com"],
    ["Maria", "invalidemail"],
]);
// Arrays para películas y videojuegos
const movies = [];
const games = [];
// Función flecha para validar correos electrónicos
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// Función para mostrar clientes
function showClients(clients) {
    const clientList = document.getElementById("clientList");
    // Limpiar lista anterior
    clientList.innerHTML = "";
    // Verificamos cada valor de cada clave si el correo es correcto y si lo es, lo escribimos en el HTML
    clients.forEach((value, key) => {
        if (isValidEmail(value)) {
            const li = document.createElement("li");
            li.textContent = `${key}: ${value}`;
            clientList.appendChild(li);
        }
    });
}
// Función para agregar un videojuego o película
function addProduct(productName, platform) {
    const input = document.getElementById("itemInput");
    // Usar valores de parámetros si se proporcionan, o del input si no
    const value = productName ? `${productName}${platform ? `,${platform}` : ""}` : input.value.trim();
    input.value = ""; // Vaciar el input después de agregar
    // Verificamos si hay una coma para distinguir entre videojuego y película
    if (value.includes(",")) {
        const [gameName, gamePlatform] = value.split(",").map(v => v.trim());
        if (gameName && gamePlatform) {
            games.push(gameName + "," + gamePlatform);
        }
    }
    else if (value) {
        movies.push(value);
    }
}
// Función genérica para escribir en la tabla HTML. Si recibe un array, imprime con su título y si recibe los dos, imprime todo
function writeTable(title, items, items2) {
    const tableContainer = document.getElementById("tableContainer");
    // Limpiar información anterior
    tableContainer.innerHTML = "";
    // Creamos tabla y cabecera con los datos correspondientes
    const table = document.createElement("table");
    const header = document.createElement("tr");
    header.innerHTML = items2 ? "<th>Movies</th><th>Video Games</th>" : `<th>${title}</th>`;
    table.appendChild(header);
    // Obtenemos el máximo entre las dos listas para ver hasta qué punto recorrer
    const maxLength = Math.max(items.length, items2 ? items2.length : 0);
    // Creamos una fila por cada posición y la agregamos
    for (let i = 0; i < maxLength; i++) {
        const row = document.createElement("tr");
        row.innerHTML = items2 ? `<td>${items[i] || ""}</td><td>${items2[i] || ""}</td>` : `<td>${items[i]}</td>`;
        table.appendChild(row);
    }
    tableContainer.appendChild(table);
}
// Función para mostrar los datos según la selección del usuario
function displayData(type) {
    switch (type) {
        case "Movies":
            writeTable(type, movies);
            break;
        case "Video Games":
            writeTable(type, games);
            break;
        default:
            writeTable("", movies, games);
            break;
    }
}
// Mostrar clientes cuando se carga la página
function loadData() {
    addProduct("Final Fantasy X, PS2");
    addProduct("A Nightmare on Elm Street");
    showClients(clients);
}
;
// Codigo agregado:
// Capturar los parámetros de la URL y procesarlos
function processFormData() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    if (name && email) {
        clients.set(name, email);
    }
    console.log(clients);
    showClients(clients);
}
// Llamar a la función para procesar los datos del formulario cuando se carga la página
window.onload = () => {
    processFormData();
    loadData();
};
//# sourceMappingURL=videoclub%20copy.js.map