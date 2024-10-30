var input = document.getElementById("input");
var button = document.getElementById("button");
var paragraph = document.getElementById("paragraph");
var pcompleta = "";
button.addEventListener("click", function () {
    var valorinput = input.value;
    for (var i = 0; i < valorinput.length; i++) {
        if (i % 2 == 0) {
            pcompleta = pcompleta + valorinput.charAt(i).toUpperCase();
        }
        else {
            pcompleta = pcompleta + valorinput.charAt(i).toLowerCase();
        }
    }
    paragraph.innerHTML = pcompleta;
});
