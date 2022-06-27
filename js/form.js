var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var nombre = form.nombre.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;


    var pacienteTr = document.createElement("tr");

    var nombreTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nombreTd.textContent = nombre;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;
    // imcTd.textContent = imc;

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabla = document.querySelector("#tabla-pacientes");

    tabla.appendChild(pacienteTr);

})