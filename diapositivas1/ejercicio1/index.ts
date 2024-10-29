let inputdiv:HTMLInputElement= document.getElementById("inputdiv")! as HTMLInputElement;
let enviardiv:HTMLButtonElement = document.getElementById("enviardiv") as HTMLButtonElement;

enviardiv.addEventListener('click', () => {
    let valor:number = parseInt(inputdiv.value);
    if (valor % 4 == 0){
        console.log('Si es divisible')
    }else {
        console.log('no es divisible');
    }
})