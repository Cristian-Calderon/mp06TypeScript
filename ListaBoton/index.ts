const list :HTMLElement = document.getElementById('list') as HTMLElement;

const button =  document.getElementById('add') as HTMLButtonElement;

button.addEventListener('click', () => {

    const item = document.createElement('li');
    item.style.listStyle = 'none';
    item.textContent = 'ejemplo';
    list.appendChild(item);
});