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
    // Verificar si el título ya existe
    let titulo = document.querySelector("h3#tituloProductos") as HTMLHeadingElement;
    if (!titulo) {
        // Si no existe, crearlo
        titulo = document.createElement("h3");
        titulo.id = "tituloProductos"; // Asignar un ID único para identificarlo
        titulo.textContent = "Productos";
        document.body.appendChild(titulo);
    }

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


// Mostrar informacion

function mostrarInformacion(tipo: "peliculas" | "videojuegos" | "ambos") {
    const tablaExistente = document.querySelector("table.productos");
    if (tablaExistente) {
        tablaExistente.remove(); // Eliminar la tabla existente
    }

    const tabla = document.createElement("table");
    tabla.className = "productos";
    const encabezado = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");

    if (tipo === "peliculas" || tipo === "ambos") {
        const thPelicula = document.createElement("th");
        thPelicula.textContent = "Películas";
        filaEncabezado.appendChild(thPelicula);
    }

    if (tipo === "videojuegos" || tipo === "ambos") {
        const thVideojuego = document.createElement("th");
        thVideojuego.textContent = "Videojuegos";
        filaEncabezado.appendChild(thVideojuego);
    }

    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);

    const cuerpo = document.createElement("tbody");
    const maxFilas = Math.max(
        tipo === "peliculas" || tipo === "ambos" ? productos.filter(p => p.tipo === "pelicula").length : 0,
        tipo === "videojuegos" || tipo === "ambos" ? productos.filter(p => p.tipo === "videojuego").length : 0
    );

    for (let i = 0; i < maxFilas; i++) {
        const fila = document.createElement("tr");

        if (tipo === "peliculas" || tipo === "ambos") {
            const peliculas = productos.filter(p => p.tipo === "pelicula");
            const celdaPelicula = document.createElement("td");
            celdaPelicula.textContent = peliculas[i]?.nombre || "";
            fila.appendChild(celdaPelicula);
        }

        if (tipo === "videojuegos" || tipo === "ambos") {
            const videojuegos = productos.filter(p => p.tipo === "videojuego");
            const celdaVideojuego = document.createElement("td");
            celdaVideojuego.textContent = videojuegos[i]
                ? `${videojuegos[i].nombre} (${videojuegos[i].plataforma})`
                : "";
            fila.appendChild(celdaVideojuego);
        }

        cuerpo.appendChild(fila);
    }

    tabla.appendChild(cuerpo);
    document.body.appendChild(tabla);
}



function cargar() {
    console.log("Ejecutando");
    mostrarClientes(clientes);

    mostrarProductos();

    const input: HTMLInputElement = document.getElementById("multimedia") as HTMLInputElement;
    const boton: HTMLButtonElement = document.getElementById("agregar") as HTMLButtonElement;
    boton.addEventListener("click", entrada);

    const btnPeliculas = document.getElementById("mostrarPeliculas") as HTMLButtonElement;
    const btnVideojuegos = document.getElementById("mostrarVideojuegos") as HTMLButtonElement;
    const btnAmbos = document.getElementById("mostrarAmbos") as HTMLButtonElement;

    btnPeliculas.addEventListener("click", () => mostrarInformacion("peliculas"));
    btnVideojuegos.addEventListener("click", () => mostrarInformacion("videojuegos"));
    btnAmbos.addEventListener("click", () => mostrarInformacion("ambos"));
}


// Hacer accesible la función cargar al ambito global sin usar (type = "module")
(window as any).cargar = cargar;