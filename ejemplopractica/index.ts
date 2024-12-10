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
    body.appendChild(h3);

    const list: HTMLUListElement = document.createElement("ul");
    body.appendChild(list);

    const validEmails: { name: string, email: string }[] = Array.from(customers).filter((c) => isEmail(c.email));

    validEmails.forEach((i) => {
        const li: HTMLLIElement = document.createElement("li");
        li.style.listStyle = "none";
        li.textContent = i.name + " ~ " + i.email;
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


// Función cargar inicial
function load(): void {
    showCustomers(customers);
    showProducts(); // Mostrar los productos al cargar
    document.getElementById("agregar")?.addEventListener("click", handleAddProduct);
}

(window as any).load = load;