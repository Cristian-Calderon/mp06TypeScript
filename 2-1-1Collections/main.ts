let categories: Set<string> = new Set();

const category: HTMLInputElement = document.getElementById('category')! as HTMLInputElement;
const addcategory: HTMLButtonElement = document.getElementById('addCategory')! as HTMLButtonElement;
const watchCategory: HTMLButtonElement = document.getElementById('watchCategory')! as HTMLButtonElement;
let parrafo: HTMLParagraphElement = document.getElementById('parrafo'!) as HTMLParagraphElement;



addcategory.addEventListener('click', () => {
    categories.add(category.value);
});


watchCategory.addEventListener('click', () => {
    parrafo.innerText = '';
    categories.forEach((category) => {
        parrafo.innerText += category + '<br>';
    });
}
);
