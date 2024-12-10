const customers = new Set<{ name: string; email: string }>([
    { name: "Cristian Calderon", email: "ccalderon@elpuig.com" },
    { name: "Raul Garcia", email: "raul@elpuig.com" },
    { name: "Manuel Marina", email: "manuel@elpuig.com" },
    { name: "Paco Puig", email: "paco@elpuig.com" },
    { name: "Jaume Clot", email: "jaume@elpuig.com" },
    { name: "Javier Luna", email: "javier@elpuig.com" },
    { name: "Juan Riquelme", email: "jr10boca" }, // Inválido
]);
// : (email: string) => boolean
const isEmail: (email: string) => boolean = (email: string): boolean => {
    return email.includes("@");
}

const showCustomers = (customers: Set<{ name: string; email: string }>): void => {

    const body: HTMLHeadingElement = document.body as HTMLHeadingElement;
    
    const h3: HTMLHeadingElement = document.createElement("h3");
    h3.textContent = "Customers";
    h3.classList.add("text-center");
    body.appendChild(h3);

    const list: HTMLUListElement = document.createElement("ul");
    list.classList.add("text-center");
    list.classList.add("list-group");
    body.appendChild(list);

    const validEmails: { name: string, email: string }[] = Array.from(customers).filter((c) => isEmail(c.email));

    validEmails.forEach((i) => {
        const li: HTMLLIElement = document.createElement("li");
        li.style.listStyle = "none";
        li.classList.add("list-group-item");
        li.textContent = i.name + " - " + i.email;
        list.appendChild(li);
    });
}


//  Segunda parte
const products: ({ type: "pelicula"; name: string } | { type: "videojuego"; name: string; platform: string })[] = [
    { type: "pelicula", name: "El señor de los anillos" },
    { type: "videojuego", name: "Fifa 21", platform: "PS4" },
    { type: "videojuego", name: "Dota 2", platform: "PC" },
];


// Sobrecarga
function addProduct(name: string): void;
function addProduct(name: string, platform: string): void;
function addProduct(name: string, platform?: string): void {
    if (platform) {
        products.push({ type: "videojuego", name, platform });
    } else {
        products.push({ type: "pelicula", name });
    }
}

// Mostrar productos en la lista
const showProducts = () => {
    const productList = document.getElementById("productos-list") as HTMLUListElement;
    productList.innerHTML = ''; // Limpiar la lista antes de añadir nuevos productos

    products.forEach((product) => {
        const li: HTMLLIElement = document.createElement("li");
        li.textContent = product.type === "pelicula"
            ? `Pelicula: ${product.name}`
            : `Videojuego: ${product.name} (Plataforma: ${product.platform})`;
        productList.appendChild(li);
    });
}

// Función para manejar el evento de agregar
const handleAddProduct = () => {
    const input = document.getElementById("multimedia") as HTMLInputElement;
    const inputValue: string = input.value.trim();

    if (inputValue) {
        const [name, platform] = inputValue.split(',');

        if (platform) {
            addProduct(name.trim(), platform.trim());
        } else {
            addProduct(name.trim());
        }

        showProducts(); // Mostrar la lista actualizada
        input.value = ''; // Limpiar el campo de entrada
    }
}

// Tercera parte

// Función para mostrar productos en la tabla
const updateTable = (filter: "peliculas" | "videojuegos" | "ambos") => {
    const tableBody = document.querySelector("#productos-table tbody") as HTMLTableSectionElement;
    const colPeliculas = document.getElementById("colPeliculas") as HTMLTableCellElement;
    const colVideojuegos = document.getElementById("colVideojuegos") as HTMLTableCellElement;

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
    document.getElementById("btnPeliculas")?.addEventListener("click", () => updateTable("peliculas"));
    document.getElementById("btnVideojuegos")?.addEventListener("click", () => updateTable("videojuegos"));
    document.getElementById("btnAmbos")?.addEventListener("click", () => updateTable("ambos"));

    // Mostrar todos los productos por defecto
    updateTable("ambos");
};


// Función cargar inicial
function load(): void {
    showCustomers(customers);
    showProducts(); // Mostrar los productos al cargar
    document.getElementById("agregar")?.addEventListener("click", handleAddProduct);

    initFilterSection();      // Nueva funcionalidad

}

(window as any).load = load;