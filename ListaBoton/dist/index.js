"use strict";
const list = document.getElementById('list');
const button = document.getElementById('add');
button.addEventListener('click', () => {
    const item = document.createElement('li');
    item.style.listStyle = 'none';
    item.textContent = 'ejemplo';
    list.appendChild(item);
});
