var campoFiltro = document.querySelector("#filtrar-tabla");
//console.log(campoFiltro);

campoFiltro.addEventListener("input",function(){
  //console.log("Escribieron en el input");
  //console.log(this.value);
  var pacientes = document.querySelectorAll(".paciente");
  //console.log(pacientes);

  if (this.value.length > 0) {
    //console.log("Hay algo digitado");
    for (let i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNombre = paciente.querySelector(".info-nombre");
      var nombre = tdNombre.textContent;
      //console.log(nombre);
      var expresion = new RegExp(this.value,"i");

      if(!expresion.test(nombre)){
        paciente.classList.add("invisible")
      }else{
        paciente.classList.remove("invisible")
      }
    }
  } else {
    for (let i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      paciente.classList.remove("invisible");
    }
  }

});
