var btnEnviar = document.getElementById("mande");
var textoIntr = document.getElementById("mensaje");
var cajaComent = document.getElementById("conv");

btnEnviar.addEventListener("click", enviaText);

function enviaText(){
cajaComent.innerHTML += textoIntr.value +'<br>';
	textoIntr.value= ''; }
textoIntr.addEventListener("keydown", enviaTexto);

function enviaTexto(event) {
  var x = event.key;

  if (x == "Enter") { 
    cajaComent.innerHTML += textoIntr.value +'<br>';
	textoIntr.value= '';
  }
}
