document.getElementById('botdia').addEventListener('click',showdia);
var s=0
var muestra=document.getElementById('dia');
function showdia () {
if (s==0) {
	s++;
	muestra.style.display="inline-flex";
	}
else {
	s--;
	muestra.style.display="none";
}
}

document.getElementById('bothora').addEventListener('click',showhora);
var h=0
var muestre=document.getElementById('hora');
function showhora () {
if (h==0) {
	h++;
	muestre.style.display="inline-flex";
	}
else {
	h--;
	muestre.style.display="none";
}
}

document.getElementById('botesce').addEventListener('click',showesce);
var e=0
var muestro=document.getElementById('escenario');
function showesce () {
if (e==0) {
	e++;
	muestro.style.display="inline-flex";
	}
else {
	e--;
	muestro.style.display="none";
}
}

document.getElementById('escenario1').addEventListener('click',filtroesce1);
var escena1=document.getElementsByClassName('esc1');
var j=0;
console.log('escena1');
function filtroesce1 () { if (j==0) {

	for (var i=0; i<escena1.length; i++) {
	escena1[i].style.display="none";
	// escena1[1].style.display="none";
	// escena1[2].style.display="none";
	// escena1[3].style.display="none";
	// escena1[4].style.display="none";
	// escena1[5].style.display="none";
	// escena1[6].style.display="none";
	// escena1[7].style.display="none";
	// escena1[8].style.display="none";
	// escena1[9].style.display="none";
	// escena1[10].style.display="none";
	// escena1[11].style.display="none";
	// escena1[12].style.display="none";
	// escena1[13].style.display="none";
	// escena1[14].style.display="none";
	// escena1[15].style.display="none";
	}
	j++;
}
else {
	for (var i=0; i<escena1.length; i++) {
		escena1[i].style.display="block"; }
	j--;
	// escena1[0].style.display="block";
	// escena1[1].style.display="block";
	// escena1[2].style.display="block";
	// escena1[3].style.display="block";
	// escena1[4].style.display="block";
	// escena1[5].style.display="block";
	// escena1[6].style.display="block";
	// escena1[7].style.display="block";
	// escena1[8].style.display="block";
	// escena1[9].style.display="block";
	// escena1[10].style.display="block";
	// escena1[11].style.display="block";
	// escena1[12].style.display="block";
	// escena1[13].style.display="block";
	// escena1[14].style.display="block";
	// escena1[15].style.display="block";
}
}


var escena2=document.getElementsByClassName('esc2');
var scena2=0;
document.getElementById('escenario2').addEventListener('click',filtroesce2);
function filtroesce2 () { if (scena2==0) {
	scena2++;
	escena2[0].style.display="none";
	escena2[1].style.display="none";
	escena2[2].style.display="none";
	escena2[3].style.display="none";
	escena2[4].style.display="none";
	escena2[5].style.display="none";
	escena2[6].style.display="none";
	escena2[7].style.display="none";
	escena2[8].style.display="none";
	escena2[9].style.display="none";
	escena2[10].style.display="none";
	escena2[11].style.display="none";
	escena2[12].style.display="none";
	escena2[13].style.display="none";
	escena2[14].style.display="none";
	escena2[15].style.display="none";

	}
else {
	scena2--;
	escena2[0].style.display="block";
	escena2[1].style.display="block";
	escena2[2].style.display="block";
	escena2[3].style.display="block";
	escena2[4].style.display="block";
	escena2[5].style.display="block";
	escena2[6].style.display="block";
	escena2[7].style.display="block";
	escena2[8].style.display="block";
	escena2[9].style.display="block";
	escena2[10].style.display="block";
	escena2[11].style.display="block";
	escena2[12].style.display="block";
	escena2[13].style.display="block";
	escena2[14].style.display="block";
	escena2[15].style.display="block";
}
}



var primero=document.getElementsByClassName('toca1');
var segundo=document.getElementsByClassName('toca2');
var tercero=document.getElementsByClassName('toca3');
var cuarto=document.getElementsByClassName('toca4');
var jour1=0
var jour2=0
var jour3=0
var jour4=0
document.getElementById('dia1').addEventListener('click',filtrodia1);
function filtrodia1 () { if (jour1==0) {
	jour1++;
	primero[0].style.display="none";
	primero[1].style.display="none";
	primero[2].style.display="none";
	primero[3].style.display="none";
	primero[4].style.display="none";
	primero[5].style.display="none";
	primero[6].style.display="none";
	primero[7].style.display="none";
	}
else {
	jour1--;
	primero[0].style.display="block";
	primero[1].style.display="block";
	primero[2].style.display="block";
	primero[3].style.display="block";
	primero[4].style.display="block";
	primero[5].style.display="block";
	primero[6].style.display="block";
	primero[7].style.display="block";
}
}

document.getElementById('dia2').addEventListener('click',filtrodia2);
function filtrodia2 () { if (jour2==0) {
	jour2++;
	segundo[0].style.display="none";
	segundo[1].style.display="none";
	segundo[2].style.display="none";
	segundo[3].style.display="none";
	segundo[4].style.display="none";
	segundo[5].style.display="none";
	segundo[6].style.display="none";
	segundo[7].style.display="none";
	}
else {
	jour2--;
	segundo[0].style.display="block";
	segundo[1].style.display="block";
	segundo[2].style.display="block";
	segundo[3].style.display="block";
	segundo[4].style.display="block";
	segundo[5].style.display="block";
	segundo[6].style.display="block";
	segundo[7].style.display="block";
}
}

document.getElementById('dia3').addEventListener('click',filtrodia3);
function filtrodia3 () { if (jour3==0) {
	jour3++;
	tercero[0].style.display="none";
	tercero[1].style.display="none";
	tercero[2].style.display="none";
	tercero[3].style.display="none";
	tercero[4].style.display="none";
	tercero[5].style.display="none";
	tercero[6].style.display="none";
	tercero[7].style.display="none";
	}
else {
	jour3--;
	tercero[0].style.display="block";
	tercero[1].style.display="block";
	tercero[2].style.display="block";
	tercero[3].style.display="block";
	tercero[4].style.display="block";
	tercero[5].style.display="block";
	tercero[6].style.display="block";
	tercero[7].style.display="block";
}
}
document.getElementById('dia4').addEventListener('click',filtrodia4);
function filtrodia4 () { if (jour4==0) {
	jour4++;
	cuarto[0].style.display="none";
	cuarto[1].style.display="none";
	cuarto[2].style.display="none";
	cuarto[3].style.display="none";
	cuarto[4].style.display="none";
	cuarto[5].style.display="none";
	cuarto[6].style.display="none";
	cuarto[7].style.display="none";
	}
else {
	jour4--;
	cuarto[0].style.display="block";
	cuarto[1].style.display="block";
	cuarto[2].style.display="block";
	cuarto[3].style.display="block";
	cuarto[4].style.display="block";
	cuarto[5].style.display="block";
	cuarto[6].style.display="block";
	cuarto[7].style.display="block";
}
}

var primera=document.getElementsByClassName('16');
var segunda=document.getElementsByClassName('18');
var tercera=document.getElementsByClassName('20');
var cuarta=document.getElementsByClassName('22');
var heure1=0
var heure2=0
var heure3=0
var heure4=0

document.getElementById('hora1').addEventListener('click',filtrohora1);
function filtrohora1 () { if (heure1==0) {
	heure1++;
	primera[0].style.display="none";
	primera[1].style.display="none";
	primera[2].style.display="none";
	primera[3].style.display="none";
	primera[4].style.display="none";
	primera[5].style.display="none";
	primera[6].style.display="none";
	primera[7].style.display="none";
	}
else {
	heure1--;
	primera[0].style.display="block";
	primera[1].style.display="block";
	primera[2].style.display="block";
	primera[3].style.display="block";
	primera[4].style.display="block";
	primera[5].style.display="block";
	primera[6].style.display="block";
	primera[7].style.display="block";
}
}

document.getElementById('hora2').addEventListener('click',filtrohora2);
function filtrohora2 () { if (heure2==0) {
	heure2++;
	segunda[0].style.display="none";
	segunda[1].style.display="none";
	segunda[2].style.display="none";
	segunda[3].style.display="none";
	segunda[4].style.display="none";
	segunda[5].style.display="none";
	segunda[6].style.display="none";
	segunda[7].style.display="none";
	}
else {
	heure2--;
	segunda[0].style.display="block";
	segunda[1].style.display="block";
	segunda[2].style.display="block";
	segunda[3].style.display="block";
	segunda[4].style.display="block";
	segunda[5].style.display="block";
	segunda[6].style.display="block";
	segunda[7].style.display="block";
}
}

document.getElementById('hora3').addEventListener('click',filtrohora3);
function filtrohora3 () { if (heure3==0) {
	heure3++;
	tercera[0].style.display="none";
	tercera[1].style.display="none";
	tercera[2].style.display="none";
	tercera[3].style.display="none";
	tercera[4].style.display="none";
	tercera[5].style.display="none";
	tercera[6].style.display="none";
	tercera[7].style.display="none";
	}
else {
	heure3--;
	tercera[0].style.display="block";
	tercera[1].style.display="block";
	tercera[2].style.display="block";
	tercera[3].style.display="block";
	tercera[4].style.display="block";
	tercera[5].style.display="block";
	tercera[6].style.display="block";
	tercera[7].style.display="block";

}
}

document.getElementById('hora4').addEventListener('click',filtrohora4);
function filtrohora4 () { if (heure4==0) {
	heure4++;
	cuarta[0].style.display="none";
	cuarta[1].style.display="none";
	cuarta[2].style.display="none";
	cuarta[3].style.display="none";
	cuarta[4].style.display="none";
	cuarta[5].style.display="none";
	cuarta[6].style.display="none";
	cuarta[7].style.display="none";
	}
else {
	heure4--;
	cuarta[0].style.display="block";
	cuarta[1].style.display="block";
	cuarta[2].style.display="block";
	cuarta[3].style.display="block";
	cuarta[4].style.display="block";
	cuarta[5].style.display="block";
	cuarta[6].style.display="block";
	cuarta[7].style.display="block";

}
}