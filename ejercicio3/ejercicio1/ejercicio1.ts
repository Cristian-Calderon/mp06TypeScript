const inputData: HTMLInputElement = document.getElementById('data')! as HTMLInputElement;

function diaDeLaSemana() {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    // .test = Comprueba si cumple el regexp, si es verdad es true, si no devuelve un false.
    if (!regex.test(inputData.value)) {
        alert('El formato no es valido');
        return;
    }

    let numeroFechas: number[] = inputData.value.split('/').map(x => parseInt(x));
    console.log(numeroFechas);
    let numeraDate: Date = new Date(numeroFechas[2],numeroFechas[1] -1,numeroFechas[0]);
    let diaSemana: number = numeraDate.getDay();

    let raizcuadra:number = parseFloat(Math.sqrt(diaSemana).toFixed(2));
    console.log(raizcuadra)





}