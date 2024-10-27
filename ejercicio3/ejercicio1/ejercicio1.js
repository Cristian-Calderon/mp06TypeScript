var inputData = document.getElementById('data');
function diaDeLaSemana() {
    var regex = /^\d{2}\/\d{2}\/\d{4}$/;
    // .test = Comprueba si cumple el regexp, si es verdad es true, si no devuelve un false.
    if (!regex.test(inputData.value)) {
        alert('El formato no es valido');
        return;
    }
    var numeroFechas = inputData.value.split('/').map(function (x) { return parseInt(x); });
    console.log(numeroFechas);
    var numeraDate = new Date(numeroFechas[2], numeroFechas[1] - 1, numeroFechas[0]);
    var diaSemana = numeraDate.getDay();
    var raizcuadra = parseFloat(Math.sqrt(diaSemana).toFixed(2));
    console.log(raizcuadra);
}
