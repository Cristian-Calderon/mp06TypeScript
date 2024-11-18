"use strict";
let categories = new Set();
const category = document.getElementById('category');
const addcategory = document.getElementById('addCategory');
const watchCategory = document.getElementById('watchCategory');
let parrafo = document.getElementById('parrafo');
addcategory.addEventListener('click', () => {
    categories.add(category.value);
});
watchCategory.addEventListener('click', () => {
    parrafo.innerText = '';
    categories.forEach((category) => {
        parrafo.innerText += category + '<br>';
    });
});
