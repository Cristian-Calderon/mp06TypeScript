var inputdiv = document.getElementById("inputdiv");
var enviardiv = document.getElementById("enviardiv");
enviardiv.addEventListener('click', function () {
    var valor = parseInt(inputdiv.value);
    if (valor % 4 == 0) {
        console.log('Si es divisible');
    }
    else {
        console.log('no es divisible');
    }
});
