let inputdiv:HTMLInputElement = document.getElementById("inputdiv") as HTMLInputElement;
let enviardiv: HTMLButtonElement = document.getElementById("enviardiv") as HTMLButtonElement;
let pdiv: HTMLParagraphElement = document.getElementById("pdiv") as HTMLParagraphElement;

enviardiv.addEventListener("click", (event) => {
    let valor:number = parseInt(inputdiv.value);
    if (valor % 4 == 0){
        pdiv.innerHTML = `${valor}: Si es divisible`;
        console.log('Si es divisible');
    }else {
        pdiv.innerHTML = `${valor}: No es divisible`;
        console.log('No es divisible')
    }
})


