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
    const h3 = document.createElement("h3");
    h3.textContent = "Customers";
    body.appendChild(h3);
    const list = document.createElement("ul");
    body.appendChild(list);
    const validEmails = Array.from(customers).filter((c) => isEmail(c.email));
    validEmails.forEach((i) => {
        const li = document.createElement("li");
        li.style.listStyle = "none";
        li.textContent = i.name + " ~ " + i.email;
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
// Función cargar inicial
function load() {
    var _a;
    showCustomers(customers);
    showProducts(); // Mostrar los productos al cargar
    (_a = document.getElementById("agregar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", handleAddProduct);
}
window.load = load;
