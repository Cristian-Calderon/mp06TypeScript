// Pensar mejor tematica
let clientes: { nombre: string; email: string }[] = [
    { nombre: "Cristian Calderon", email: "ccalderon@elpuig.com" },
    { nombre: "Raul Garcia", email: "raul@elpuig.com" },
    { nombre: "Manuel Marina", email: "manuel@elpuig.com" },
    { nombre: "Paco Puig", email: "paco@elpuig.com" },
    { nombre: "Jaume Clot", email: "jaume@elpuig.com" },
    { nombre: "Javier Luna", email: "javier@elpuig.com" },
    { nombre: "Juan Riquelme", email: "jr10boca" },
];

const correo = (email: string): boolean => {
    return email.includes("@");
}

const mostrarClientes = (clientes: { nombre: string; email: string }[]): void => {
    const body = document.body;

    const h3: HTMLHeadingElement = document.createElement("h3");
    h3.textContent = "Clientes";
    body.appendChild(h3);

    const lista: HTMLUListElement = document.createElement("ul");
    body.appendChild(lista);

    // Comprobamos si es un correo válido
    const correosvalidos: { nombre: string; email: string }[] = clientes.filter(c => correo(c.email));

    // Mostramos los correos válidos
    correosvalidos.forEach(c => {
        const li: HTMLLIElement = document.createElement("li");
        li.style.listStyle = "none";
        li.textContent = `${c.nombre} ${c.email}`;
        lista.appendChild(li);
    });
}

// Peliculas y videojuegos
type Peliculas = { tipo: "pelicula"; nombre: string };
type Videojuego = { tipo: "videojuego"; nombre: string; plataforma: string };
type Producto = Peliculas | Videojuego;

// Lista de productos
let productos: Producto[] = [
    { tipo: "pelicula", nombre: "El señor de los anillos" },
    { tipo: "videojuego", nombre: "Fifa 21", plataforma: "PS4" },
    { tipo: "videojuego", nombre: "Dota 2", plataforma: "PC" },
];

// funciones de sobrecarga
function agregarProducto(nombre: string): void;
function agregarProducto(nombre: string, plataforma: string): void;
function agregarProducto(nombre: string, plataforma?: string): void {
    if (plataforma) {
        productos.push({ tipo: "videojuego", nombre, plataforma });
    } else {
        productos.push({ tipo: "pelicula", nombre });
    }
}

// Mostrar productos 
function mostrarProductos() {
    // Verificar si la lista ya existe
    let lista: HTMLUListElement | null = document.querySelector("ul.productos");

    if (!lista) {
        // Si la lista no existe, crearla
        lista = document.createElement("ul");
        lista.className = "productos"; // Clase específica para identificarla
        document.body.appendChild(lista);
        
    } else {
        // Si la lista ya existe, vaciarla antes de llenarla de nuevo
        lista.innerHTML = "";
    }

    // Llenar la lista con los productos
    productos.forEach((p) => {
        const li: HTMLLIElement = document.createElement("li");
        li.style.listStyle = "none";

        if (p.tipo === "pelicula") {
            li.textContent = `Película: ${p.nombre}`;
        } else {
            li.textContent = `Videojuego: ${p.nombre} Plataforma: ${p.plataforma}`;
        }

        lista.appendChild(li);
    });
}

function entrada() {
    const input = document.getElementById("multimedia") as HTMLInputElement;
    // Para quitar espacios en blanco
    const valor: string = input.value.trim();

    if (valor.includes(",")) {
        const [nombre, plataforma] = valor.split(",").map((v) => v.trim());
        if (nombre && plataforma) {
            agregarProducto(nombre, plataforma);
        } else {
            console.log("Formato incorrecto. Incluye un nombre y una plataforma");
        }
    } else {
        if (valor) {
            agregarProducto(valor);
        } else {
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

    const input: HTMLInputElement = document.getElementById("multimedia") as HTMLInputElement;
    const boton: HTMLButtonElement = document.getElementById("agregar") as HTMLButtonElement;
    boton.addEventListener("click", entrada);
}

// Hacer accesible la función cargar al ambito global sin usar (type = "module")
(window as any).cargar = cargar;