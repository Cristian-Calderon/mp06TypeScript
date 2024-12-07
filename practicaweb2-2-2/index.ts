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

// Asignar la función y la variable al objeto window para que estén disponibles globalmente
(window as any).mostrarClientes = mostrarClientes;
(window as any).clientes = clientes;
