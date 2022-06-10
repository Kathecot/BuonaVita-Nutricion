var paciente = document.querySelector("#primer-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");

pesoEsValido = true;
alturaEsValida = true;

if ((peso < 0) || (peso > 1000)) {
    console.log("Peso incorrecto");
    tdIMC.textContent = "Peso incorrecto";
    pesoEsValido = false;
}

if ((altura < 0) || (altura > 2.5)) {
    console.log("Altura incorrecta");
    tdIMC.textContent = "Altura incorrecta";
    alturaEsValida = false;
}

if (pesoEsValido && alturaEsValida) {
    var imc = peso / (altura * altura);
    tdIMC.textContent = imc;
}