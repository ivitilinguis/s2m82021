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
	}
	j++;
}
else {
	for (var i=0; i<escena1.length; i++) {
		escena1[i].style.display="block"; }
	j--;
}
}

document.getElementById('escenario2').addEventListener('click',filtroesce2);
var escena2=document.getElementsByClassName('esc2');
var k=0;
function filtroesce2 () { if (k==0) {
for (var i=0; i<escena2.length; i++) {
	escena2[i].style.display="none";
	}
	k++;
}
else {
	for (var i=0; i<escena2.length; i++) {
		escena2[i].style.display="block"; }
	k--;
}}


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
	for (var i=0; i<primero.length; i++) {
	primero[i].style.display="none";
	}
	jour1++;
}
else {
	for (var i=0; i<primero.length; i++) {
		primero[i].style.display="block"; }
	jour1--;
}
}
document.getElementById('dia2').addEventListener('click',filtrodia2);
function filtrodia2 () { if (jour2==0) {
	for (var i=0; i<segundo.length; i++) {
	segundo[i].style.display="none";
	}
	jour2++;
}
else {
	for (var i=0; i<segundo.length; i++) {
		segundo[i].style.display="block"; }
	jour2--;
}
}
document.getElementById('dia3').addEventListener('click',filtrodia3);
function filtrodia3 () { if (jour3==0) {
	for (var i=0; i<tercero.length; i++) {
	tercero[i].style.display="none";
	}
	jour3++;
}
else {
	for (var i=0; i<tercero.length; i++) {
		tercero[i].style.display="block"; }
	jour3--;
}
}
document.getElementById('dia4').addEventListener('click',filtrodia4);
function filtrodia4 () { if (jour4==0) {
	for (var i=0; i<cuarto.length; i++) {
	cuarto[i].style.display="none";
	}
	jour4++;
}
else {
	for (var i=0; i<cuarto.length; i++) {
		cuarto[i].style.display="block"; }
	jour4--;
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
	for (var i=0; i<primera.length; i++) {
	primera[i].style.display="none";
	}
	heure1++;
}
else {
	for (var i=0; i<primera.length; i++) {
		primera[i].style.display="block"; }
	heure1--;
}
}
document.getElementById('hora2').addEventListener('click',filtrohora2);
function filtrohora2 () { if (heure2==0) {
	for (var i=0; i<segunda.length; i++) {
	segunda[i].style.display="none";
	}
	heure2++;
}
else {
	for (var i=0; i<segunda.length; i++) {
		segunda[i].style.display="block"; }
	heure2--;
}
}
document.getElementById('hora3').addEventListener('click',filtrohora3);
function filtrohora3 () { if (heure3==0) {
	for (var i=0; i<tercera.length; i++) {
	tercera[i].style.display="none";
	}
	heure3++;
}
else {
	for (var i=0; i<tercera.length; i++) {
		tercera[i].style.display="block"; }
	heure3--;
}
}
document.getElementById('hora4').addEventListener('click',filtrohora4);
function filtrohora4 () { if (heure4==0) {
	for (var i=0; i<cuarta.length; i++) {
	cuarta[i].style.display="none";
	}
	heure4++;
}
else {
	for (var i=0; i<cuarta.length; i++) {
		cuarta[i].style.display="block"; }
	heure4--;
}
}


// document.getElementById('hora4').addEventListener('click',filtrohora4);
// function filtrohora4 () { if (heure4==0) {
// 	heure4++;
// 	cuarta[0].style.display="none";
// 	cuarta[1].style.display="none";
// 	cuarta[2].style.display="none";
// 	cuarta[3].style.display="none";
// 	cuarta[4].style.display="none";
// 	cuarta[5].style.display="none";
// 	cuarta[6].style.display="none";
// 	cuarta[7].style.display="none";
// 	}
// else {
// 	heure4--;
// 	cuarta[0].style.display="block";
// 	cuarta[1].style.display="block";
// 	cuarta[2].style.display="block";
// 	cuarta[3].style.display="block";
// 	cuarta[4].style.display="block";
// 	cuarta[5].style.display="block";
// 	cuarta[6].style.display="block";
// 	cuarta[7].style.display="block";

// }	