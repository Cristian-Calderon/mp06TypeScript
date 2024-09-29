// Seleccionamos los elementos del DOM
const inputText = document.getElementById('text-input') as HTMLInputElement;
const boldCheck = document.getElementById('bold-check') as HTMLInputElement;
const italicCheck = document.getElementById('italic-check') as HTMLInputElement;
const underlineCheck = document.getElementById('underline-check') as HTMLInputElement;
const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
const paragraphContainer = document.getElementById('paragraph-container') as HTMLDivElement;

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
  const selectedFont = (document.querySelector('input[name="font"]:checked') as HTMLInputElement).value;
  paragraph.style.fontFamily = selectedFont;

  // Limpiar el contenedor y añadir el nuevo párrafo
  paragraphContainer.innerHTML = ''; // Para que solo muestre un párrafo a la vez
  paragraphContainer.appendChild(paragraph);
});
