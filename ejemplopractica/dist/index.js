"use strict";
const customers = new Set([
    { name: "Cristian Calderon", email: "ccalderon@elpuig.com" },
    { name: "Raul Garcia", email: "raul@elpuig.com" },
    { name: "Manuel Marina", email: "manuel@elpuig.com" },
    { name: "Paco Puig", email: "paco@elpuig.com" },
    { name: "Jaume Clot", email: "jaume@elpuig.com" },
    { name: "Javier Luna", email: "javier@elpuig.com" },
    { name: "Juan Riquelme", email: "jr10boca" }, // Inválido
]);
// : (email: string) => boolean
const isEmail = (email) => {
    return email.includes("@");
};
const showCustomers = (customers) => {
    const body = document.body;
    const divmain = document.createElement("div");
    divmain.classList.add("container");
    body.appendChild(divmain);
    const h3 = document.createElement("h3");
    h3.textContent = "Customers";
    h3.classList.add("text-center");
    divmain.appendChild(h3);
    const list = document.createElement("ul");
    list.classList.add("text-center");
    list.classList.add("list-group");
    divmain.appendChild(list);
    const validEmails = Array.from(customers).filter((c) => isEmail(c.email));
    validEmails.forEach((i) => {
        const li = document.createElement("li");
        // li.style.listStyle = "none";
        li.classList.add("list-group-item");
        li.textContent = i.name + " - " + i.email;
        list.appendChild(li);
    });
};
//  Segunda parte
const products = [
    { type: "pelicula", name: "El señor de los anillos" },
    { type: "videojuego", name: "Fifa 21", platform: "PS4" },
    { type: "videojuego", name: "Dota 2", platform: "PC" },
];
function addProduct(name, platform) {
    if (platform) {
        products.push({ type: "videojuego", name, platform });
    }
    else {
        products.push({ type: "pelicula", name });
    }
}
// Mostrar productos en la lista
const showProducts = () => {
    const productList = document.getElementById("productos-list");
    productList.innerHTML = ''; // Limpiar la lista antes de añadir nuevos productos
    products.forEach((product) => {
        const li = document.createElement("li");
        li.textContent = product.type === "pelicula"
            ? `Pelicula: ${product.name}`
            : `Videojuego: ${product.name} (Plataforma: ${product.platform})`;
        productList.appendChild(li);
    });
};
// Función para manejar el evento de agregar
const handleAddProduct = () => {
    const input = document.getElementById("multimedia");
    const inputValue = input.value.trim();
    if (inputValue) {
        const [name, platform] = inputValue.split(',');
        if (platform) {
            addProduct(name.trim(), platform.trim());
        }
        else {
            addProduct(name.trim());
        }
        showProducts(); // Mostrar la lista actualizada
        input.value = ''; // Limpiar el campo de entrada
    }
};
// Tercera parte
// Función para mostrar productos en la tabla
const updateTable = (filter) => {
    const tableBody = document.querySelector("#productos-table tbody");
    const colPeliculas = document.getElementById("colPeliculas");
    const colVideojuegos = document.getElementById("colVideojuegos");
    tableBody.innerHTML = ""; // Limpiar filas de la tabla
    const peliculas = products.filter(p => p.type === "pelicula");
    const videojuegos = products.filter(p => p.type === "videojuego");
    // Configuración de encabezados
    colPeliculas.style.display = filter === "peliculas" || filter === "ambos" ? "table-cell" : "none";
    colVideojuegos.style.display = filter === "videojuegos" || filter === "ambos" ? "table-cell" : "none";
    if (filter === "peliculas" || filter === "ambos") {
        peliculas.forEach(p => {
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.textContent = p.name;
            row.appendChild(cell);
            if (filter === "ambos") {
                row.appendChild(document.createElement("td")); // Celda vacía para alinear columnas
            }
            tableBody.appendChild(row);
        });
    }
    if (filter === "videojuegos" || filter === "ambos") {
        videojuegos.forEach(v => {
            const row = document.createElement("tr");
            if (filter === "ambos") {
                row.appendChild(document.createElement("td")); // Celda vacía para alinear columnas
            }
            const cell = document.createElement("td");
            cell.textContent = `${v.name} (${v.platform})`;
            row.appendChild(cell);
            tableBody.appendChild(row);
        });
    }
};
// Cargar eventos de botones y mostrar datos iniciales
const initFilterSection = () => {
    var _a, _b, _c;
    (_a = document.getElementById("btnPeliculas")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => updateTable("peliculas"));
    (_b = document.getElementById("btnVideojuegos")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => updateTable("videojuegos"));
    (_c = document.getElementById("btnAmbos")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => updateTable("ambos"));
    // Mostrar todos los productos por defecto
    updateTable("ambos");
};
// Función cargar inicial
function load() {
    var _a;
    showCustomers(customers);
    showProducts(); // Mostrar los productos al cargar
    (_a = document.getElementById("agregar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", handleAddProduct);
    initFilterSection(); // Nueva funcionalidad
}
window.load = load;
