//JS Común

//PRUEBA DESPLEGAR CON JS

document.getElementById('pchambu').addEventListener('click',funciono);
	var a=0;
	var lacru=document.getElementById('hambur');
function funciono() {
	
	if (a==0) {
		a=1;
		document.getElementById('otrom').style.display="block";
		lacru.className="fas fa-window-close";
		
	} 
	else {
		a=0;
		document.getElementById('otrom').style.display="none";
		lacru.className="fas fa-bars";
	}

}

//desplegar menú móvil

document.getElementById('hambur').addEventListener('click',funciona);
	var i=0;
	var lacru=document.getElementById('hambur');
function funciona() {
	
	if (i==0) {
		i=1;
		document.getElementById('este').style.display="block";
		lacru.className="fas fa-window-close"
	} 
	else {
		i=0;
		document.getElementById('este').style.display="none";
		lacru.className="fas fa-bars";
	}

}

document.getElementById('dosci').addEventListener('click',venga);
	var x=0;
function venga() {
	if (x==0) {
		x=1;
		document.getElementById('izquierda').style.display="block";
	} 
	else {
		x=0;
		document.getElementById('izquierda').style.display="none";
	}

}

document.getElementById('carro').addEventListener('click',vaya);
	var y=0;
function vaya() {
	if (y==0) {
		y=1;
		document.getElementById('desplegado').style.display="block";
		document.getElementById('desplegadodos').style.display="block";
	} 
	else {
		y=0;
		document.getElementById('desplegado').style.display="none";
		document.getElementById('desplegadodos').style.display="none";
	}

}


// Funciones img menú pc

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


//FUNCIONES DE ELEGIR 

document.getElementById('siesta').addEventListener('click',esto);
function esto () {
	var source=document.getElementById('bici').src;
	var elege=document.getElementById('eleccion');
	 	elege.style.display="block";
	 	document.getElementById('siesta').style.display="none";
	 	document.getElementById('cesta').style.display="block";
	 	document.getElementById('bicielect').src=source;
	 }

document.getElementById('cruz').addEventListener('click',aquello);
function aquello () {
	var elege=document.getElementById('eleccion');
	 	elege.style.display="none";
	 	document.getElementById('siesta').style.display="block";
	 	document.getElementById('cesta').style.display="none";
	 }











