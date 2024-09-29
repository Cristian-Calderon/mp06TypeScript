"use strict";
// Seleccionamos los elementos del DOM
const inputText = document.getElementById('text-input');
const boldCheck = document.getElementById('bold-check');
const italicCheck = document.getElementById('italic-check');
const underlineCheck = document.getElementById('underline-check');
const generateBtn = document.getElementById('generate-btn');
const paragraphContainer = document.getElementById('paragraph-container');
// Función para manejar el evento de click del botón
function ejemplo() {
}
generateBtn.addEventListener('click', () => {
    // Obtener el texto del input
    const text = inputText.value;
    // Si no hay texto, no hacer nada
    if (!text) {
        return;
    }
    // Crear el párrafo
    const paragraph = document.createElement('p');
    paragraph.innerText = text;
    // Aplicar estilos seleccionados
    let fontWeight = boldCheck.checked ? 'bold' : 'normal';
    let fontStyle = italicCheck.checked ? 'italic' : 'normal';
    let textDecoration = underlineCheck.checked ? 'underline' : 'none';
    // Asignar estilos al párrafo
    paragraph.style.fontWeight = fontWeight;
    paragraph.style.fontStyle = fontStyle;
    paragraph.style.textDecoration = textDecoration;
    // Obtener la fuente seleccionada de los radios
    const selectedFont = document.querySelector('input[name="font"]:checked').value;
    paragraph.style.fontFamily = selectedFont;
    // Limpiar el contenedor y añadir el nuevo párrafo
    paragraphContainer.innerHTML = ''; // Para que solo muestre un párrafo a la vez
    paragraphContainer.appendChild(paragraph);
});
