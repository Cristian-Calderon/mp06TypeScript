// Listas tipo set
let categories: Set<string> = new Set();
let products: Set<string> = new Set();


// Elementos del DOM
const category: HTMLInputElement = document.getElementById('category')! as HTMLInputElement;
const addcategory: HTMLButtonElement = document.getElementById('addCategory')! as HTMLButtonElement;
const watchCategory: HTMLButtonElement = document.getElementById('watchCategory')! as HTMLButtonElement;
let parrafo: HTMLParagraphElement = document.getElementById('texto')! as HTMLParagraphElement;

addcategory.addEventListener('click', () => {
    categories.add(category.value);
});

watchCategory.addEventListener('click', () => {
    parrafo.innerHTML = ''; 
    categories.forEach((category) => {
        parrafo.innerHTML += category + '<br>';
    });
});
