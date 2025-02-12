"use strict";
// ejecuta cuando index se carga completamente
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("miFormulario");
    const inputEdad = document.getElementById("edad");
    const mensajeEdad = document.getElementById("mensajeEdad");
    formulario.addEventListener("submit", (event) => {
        const edad = parseInt(inputEdad.value, 10); // Convertir la entrada en número
        // Verificar si la edad es diferente de 0 y par
        if (edad === 0 || edad % 2 !== 0 || isNaN(edad)) {
            event.preventDefault(); // Evita el envío del formulario
            mensajeEdad.textContent = "Error: Ingresa un número par y diferente de 0.";
            mensajeEdad.style.color = "red";
        }
        else {
            mensajeEdad.textContent = "";
        }
    });
});
