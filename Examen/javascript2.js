// FUNCIONES DE MAIN

var imagine=document.getElementById('imagota');

document.getElementById('carro').addEventListener('mousemove',imagen);
function imagen () {
	imagine.src="img/menu/general_road.jpg";
}

   document.getElementById('carro').addEventListener('mouseout',image);
   function image () {
   	imagine.src="";
  }


 document.getElementById('orca').addEventListener('mouseover',ballena);
function ballena () {
	 imagine.src="img/menu/orca.jpg";
}



 document.getElementById('aero').addEventListener('mouseover',aeri);
function aeri () {
	 imagine.src="img/menu/orcaAero.jpg";
}



 document.getElementById('avant').addEventListener('mouseover',avanti);
function avanti () {
	 imagine.src="img/menu/avant.jpg";
}


  document.getElementById('terra').addEventListener('mouseover',terri);
function terri () {
	 imagine.src="img/menu/terra.jpg";
}


  document.getElementById('orcados').addEventListener('mouseover',orco);
function orco () {
	 imagine.src="img/menu/personalizar-menu-orca.png";
}

  document.getElementById('aerodos').addEventListener('mouseover',aerem);
function aerem () {
	 imagine.src="img/menu/menu-personalizar-orcaaero.png";
}

  document.getElementById('terrados').addEventListener('mouseover',enterrados);
function enterrados () {
	 imagine.src="img/menu/menu-personalizar-terra.jpg";
}



// FUNCIONES DE PAGINA COMPRA

var cleta=document.getElementById('bici');
var bola=document.getElementsByClassName('bola');
var sorce=["img/orcaero/ORCA_AREO_M21eTEAM.jpg","img/orcaero/ORCA_AREO_M21eTEAMA.jpg","img/orcaero/ORCA_AREO_M21eTEAMB.jpg"]
bola[0].addEventListener('click',sorceuno);
function sorceuno () {
	cleta.src=sorce[0];
}
bola[1].addEventListener('click',sorcedos);
function sorcedos () {
	cleta.src=sorce[1];
}
bola[2].addEventListener('click',sorcetres);
function sorcetres () {
	cleta.src=sorce[2];
}






