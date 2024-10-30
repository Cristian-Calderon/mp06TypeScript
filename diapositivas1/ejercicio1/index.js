var inputdiv = document.getElementById("inputdiv");
var enviardiv = document.getElementById("enviardiv");
var pdiv = document.getElementById("pdiv");
enviardiv.addEventListener("click", function (event) {
    var valor = parseInt(inputdiv.value);
    if (valor % 4 == 0) {
        pdiv.innerHTML = "".concat(valor, ": Si es divisible");
        console.log('Si es divisible');
    }
    else {
        pdiv.innerHTML = "".concat(valor, ": No es divisible");
        console.log('No es divisible');
    }
});
