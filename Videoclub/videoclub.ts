
interface Cliente {
  nombreCompleto: string;
  fechaNacimiento: string;
  email: string;
  contrasenya: string;
  peliculaPreferida: string;
  generoPelicula: string[];
}

// Arrays to store movies and games
const movies: string[] = [];
const games: string[] = [];

// Mapa inicial de clientes (por ejemplo, algunos de prueba)
const clients: Map<string, Cliente> = new Map<string, Cliente>([
  ["Anna", { nombreCompleto: "Anna", fechaNacimiento: "1990-05-05", email: "anna@example.com", contrasenya: "1234", peliculaPreferida: "Inception", generoPelicula: ["Acción", "Ciencia Ficción"] }],
  ["Joan", { nombreCompleto: "Joan", fechaNacimiento: "1985-08-12", email: "joan@example.com", contrasenya: "abcd", peliculaPreferida: "Titanic", generoPelicula: ["Romántico", "Drama"] }],
  ["Maria", { nombreCompleto: "Maria", fechaNacimiento: "1992-11-22", email: "invalidemail", contrasenya: "5678", peliculaPreferida: "El Señor de los Anillos", generoPelicula: ["Aventura", "Fantasía"] }]
]);

// Función para validar el formato de un email
const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Función para mostrar los clientes desde localStorage
function mostrarClientes(): void {
  const clientList = document.getElementById("clientList")!;
  clientList.innerHTML = ""; // Limpiar la lista antes de mostrar los nuevos datos

  const almacenados = localStorage.getItem("clientes");
  if (almacenados) {
    const clientes: Cliente[] = JSON.parse(almacenados); // Recuperar clientes desde localStorage
    clientes.forEach((cliente) => {
      const li = document.createElement("li");
      li.textContent = `${cliente.nombreCompleto} - ${cliente.email}`;
      clientList.appendChild(li); // Mostrar los clientes en la lista
    });
  }
}

// Función para mostrar los clientes del mapa inicial (de prueba)
function mostrarClients(clients: Map<string, Cliente>): void {
  const clientList = document.getElementById("clientList")!;
  clients.forEach((cliente, key) => {
    if (isValidEmail(cliente.email)) {
      const li = document.createElement("li");
      li.textContent = `${cliente.nombreCompleto}: ${cliente.email}`;
      clientList.appendChild(li); // Mostrar los clientes en la lista
    }
  });
}

// Función para cargar los datos al inicio de la página principal
function carregarDades(): void {


  
  // Si hay parámetros en la URL (vienen del formulario), se procesan
  if (window.location.search) {
    processFormData(); // Procesar los datos del formulario
  }

  // Mostrar los clientes desde localStorage
  mostrarClientes(); // Mostrar los clientes almacenados en localStorage

  // Mostrar los clientes del Map inicial de prueba
  mostrarClients(clients); // Mostrar los clientes de prueba

  // Agregar algunos productos de ejemplo
  afegirProducte("Final Fantasy X, PS2");
  afegirProducte("Pesadilla en Elm Street");

  // Mostrar los productos (películas y videojuegos)
  mostrarDades();
  
}

// Función para procesar los datos del formulario (enviados por GET) y guardarlos en LocalStorage
function processFormData(): void {
  const urlParams = new URLSearchParams(window.location.search);
  const nombreCompleto = urlParams.get("nombreCompleto");
  const fechaNacimiento = urlParams.get("fechaNacimiento");
  const email = urlParams.get("email");
  const contrasenya = urlParams.get("contrasenya");
  const peliculaPreferida = urlParams.get("peliculaPreferida");
  const generoPelicula = urlParams.getAll("generoPelicula");

  // Verificamos si los parámetros del formulario son válidos
  if (nombreCompleto && fechaNacimiento && email && contrasenya) {
    let clientes: Cliente[] = [];
    const almacenados = localStorage.getItem("clientes");

    if (almacenados) {
      clientes = JSON.parse(almacenados); // Cargar los datos anteriores de localStorage
    }

    // Comprobamos si el cliente ya está registrado por su email
    const clienteExistente = clientes.find(cliente => cliente.email === email);
    
    if (!clienteExistente) {
      const nuevoCliente: Cliente = {
        nombreCompleto,
        fechaNacimiento,
        email,
        contrasenya,
        peliculaPreferida: peliculaPreferida || "",
        generoPelicula,
      };

      // Añadir el nuevo cliente
      clientes.push(nuevoCliente);
      localStorage.setItem("clientes", JSON.stringify(clientes)); // Guardar todo de nuevo
    }
  }
  mostrarClientes(); 
  
}

// Función para agregar productos (películas y videojuegos)
function afegirProducte(productName?: string, platform?: string): void {
  const input = document.getElementById("itemInput") as HTMLInputElement;
  const value = productName
    ? `${productName}${platform ? `, ${platform}` : ""}`
    : input.value.trim();
  input.value = "";
  if (value.includes(",")) {
    const [gameName, gamePlatform] = value.split(",").map((v) => v.trim());
    if (gameName && gamePlatform) {
      games.push(gameName + ", " + gamePlatform);
    }
  } else if (value) {
    movies.push(value);
  }
}

// Función para escribir una tabla HTML con los datos (películas y/o videojuegos)
function escriureTaula(
  titol: string,
  objectes: string[],
  objectes2?: string[]
) {
  const tableContainer = document.getElementById("tableContainer")!;
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
function mostrarDades(tipus?: string): void {
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
  const form = document.getElementById("formulariVideoclub") as HTMLFormElement;
  if (form) {
    form.addEventListener("submit", (event) => {
      let valido = true;

      // Validar nombre completo
      const nombreInput = document.getElementById("nomComplet") as HTMLInputElement;
      const nombreError = document.getElementById("nombreError") as HTMLElement;
      if (!nombreInput.value.trim()) {
        nombreError.textContent = "El nombre completo es requerido.";
        valido = false;
      } else {
        nombreError.textContent = "";
      }

      // Validar fecha de nacimiento
      const fechaInput = document.getElementById("dataNaixement") as HTMLInputElement;
      const fechaError = document.getElementById("fechaError") as HTMLElement;
      if (!fechaInput.value) {
        fechaError.textContent = "La fecha de nacimiento es requerida.";
        valido = false;
      } else {
        fechaError.textContent = "";
      }

      // Validar email
      const emailInput = document.getElementById("email") as HTMLInputElement;
      const emailError = document.getElementById("emailError") as HTMLElement;
      if (!emailInput.checkValidity()) {
        emailError.textContent = "Introduce un email válido.";
        valido = false;
      } else {
        emailError.textContent = "";
      }

      // Validar contraseña
      const passInput = document.getElementById("contrasenya") as HTMLInputElement;
      const passError = document.getElementById("passError") as HTMLElement;
      const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      if (!passPattern.test(passInput.value)) {
        passError.textContent =
          "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.";
        valido = false;
      } else {
        passError.textContent = "";
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


// Llamar a cargar los datos cuando se carga la página
// window.onload = carregarDades;
