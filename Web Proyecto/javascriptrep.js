var flaco=document.getElementsByClassName('video');
var gordo=document.getElementById('videogor');
var posta=["img/nachovegas0.jpg","img/mafalda0.jpg","img/lesbian0.jpg","img/napoleon0.jpg","img/calavento0.jpg","img/triangulo0.jpg","img/ivanes0.jpg","img/mutantes0.jpg","img/hinds0.jpg","img/botitas0.jpg"];
var sorce=["img/video1.mp4","img/video2.mp4","img/video3.mp4","img/video4.mp4","img/video5.mp4","img/video6.mp4","img/video7.mp4","img/video8.mp4","img/video9.mp4","img/video10.mp4"];
console.log(flaco.length);
console.log(sorce.length);

flaco[i].addEventListener('click', chang);
function chang () {
	flaco[i].poster=gordo.poster;
 	flaco[i].src=gordo.src;
 	gordo.src=sorce[i];
 	gordo.poster=posta[i];
}

function chang () { 
	for (var i=0; i<flaco.length; i++) {
	flaco[i].style.display="none";
	}
	j++;
}
else {
	for (var i=0; i<escena1.length; i++) {
		escena1[i].style.display="block"; }
	j--;
}




 flaco[1].addEventListener('click', changa);
 function changa () {
 	flaco[1].poster=gordo.poster;
 	flaco[1].src=gordo.src;
 	gordo.src=sorce[1];
 	gordo.poster=posta[1];
 }
  flaco[2].addEventListener('click', changb);
 function changb () {
 	flaco[2].poster=gordo.poster;
 	flaco[2].src=gordo.src;
 	gordo.src=sorce[2];
 	gordo.poster=posta[2];
 }
 flaco[3].addEventListener('click', changc);
 function changc () {
 	flaco[3].poster=gordo.poster;
 	flaco[3].src=gordo.src;
 	gordo.src=sorce[3];
 	gordo.poster=posta[3];
 }
 flaco[4].addEventListener('click', changd);
 function changd () {
 	flaco[4].poster=gordo.poster;
 	flaco[4].src=gordo.src;
 	gordo.src=sorce[4];
 	gordo.poster=posta[4];
 }
 flaco[5].addEventListener('click', change);
 function change () {
 	flaco[5].poster=gordo.poster;
 	flaco[5].src=gordo.src;
 	gordo.src=sorce[5];
 	gordo.poster=posta[5];
 }
 flaco[6].addEventListener('click', changf);
 function changf () {
 	flaco[6].poster=gordo.poster;
 	flaco[6].src=gordo.src;
 	gordo.src=sorce[6];
 	gordo.poster=posta[6];
 }
 flaco[7].addEventListener('click', changg);
 function changg () {
 	flaco[7].poster=gordo.poster;
 	flaco[7].src=gordo.src;
 	gordo.src=sorce[7];
 	gordo.poster=posta[7];
 }
 flaco[8].addEventListener('click', changh);
 function changh () {
 	flaco[8].poster=gordo.poster;
 	flaco[8].src=gordo.src;
 	gordo.src=sorce[8];
 	gordo.poster=posta[8];
 }
 flaco[9].addEventListener('click', changi);
 function changi () {
 	flaco[9].poster=gordo.poster;
 	flaco[9].src=gordo.src;
 	gordo.src=sorce[9];
 	gordo.poster=posta[9];
 }
 flaco[0].addEventListener('click', changj);
 function changj () {
 	flaco[0].poster=gordo.poster;
 	flaco[0].src=gordo.src;
 	gordo.src=sorce[0];
 	gordo.poster=posta[0];
 }






// 	// NESCAFE

// document.getElementById('nescafe').addEventListener('click',nescvis);
// 	var inve = document.getElementById('nescontinv');
// 	function nescvis() {
// 		inve.id='nescont';
// 		}

// var crus = document.getElementsByClassName('cruz');
// 	crus[0].addEventListener('click',nescnovis);
// 	function nescnovis() {
// 	document.getElementById('nescont').id='nescontinv';
// 	}

// var cafeses = ["img/Nescaf.png","img/Nescaf2.png","img/Nescaf3.png","img/Nescaf4.png","img/Nescaf5.png","img/Nescaf8.png"];
// document.getElementById('flechader1').addEventListener('click', alante1);
// var q=0;

// 	function alante1 () {
// 		if (q<cafeses.length-1) {
// 		q++;
// 		document.getElementById('nesimg').src=cafeses[q];
// 	 } else {
// 		q=0;
// 		document.getElementById('nesimg').src=cafeses[q];
// 	}
// 	}

// document.getElementById('flechaizq1').addEventListener('click', patras);
// function patras () {
// 		if (q>0) {
// 		q--;	
// 		document.getElementById('nesimg').src=cafeses[q];
// 	} else {
// 		q=3;
// 		document.getElementById('nesimg').src=cafeses[q];
// 	} }

// 	// JERARQUIA
// document.getElementById('triatlon').addEventListener('click',triatvis);
// 	var trinv = document.getElementById('triatloninv')
// 	function triatvis() {
// 		trinv.id='triatcont';
// 		}


// 	crus[1].addEventListener('click',triatnovis);
// 	function triatnovis() {
// 	document.getElementById('triatcont').id='triatloninv';
// 	}

// var jerarquia = ["img/jerarquica2.png","img/jerarquica3.png","img/jerarquica4.png","img/jerarquica5.png","img/jerarquica6.png"];
// document.getElementById('flechader2').addEventListener('click', alante2);
// var r=0;

// 	function alante2 () {
// 		if (r<jerarquia.length-1) {
// 		r++;
// 		document.getElementById('trimg').src=jerarquia[r];
// 	 } else {
// 		r=0;
// 		document.getElementById('trimg').src=jerarquia[r];
// 	}
// 	}

// document.getElementById('flechaizq2').addEventListener('click', patras2);
// function patras2 () {
// 		if (r>0) {
// 		r--;	
// 		document.getElementById('trimg').src=jerarquia[r];
// 	} else {
// 		r=3;
// 		document.getElementById('trimg').src=jerarquia[r];
// 	} }

// 		// DAYO

// document.getElementById('rediseno').addEventListener('click',redvis);
// 	var redinve = document.getElementById('redinv')
// 	function redvis() {
// 		redinve.id='redcont';
// 		}

// 	crus[2].addEventListener('click',daynovis);
// 	function daynovis() {
// 	document.getElementById('redcont').id='redinv';
// 	}

// var dayo = ["img/dayorig.jpg","img/dayo1.jpg","img/dayo2.jpg","img/dayo3.jpg","img/dayo4.jpg","img/dayo5.jpg"];
// document.getElementById('flechader3').addEventListener('click', alante3);
// var s=0;

// 	function alante3 () {
// 		if (s<dayo.length-1) {
// 		s++;
// 		document.getElementById('dayoimg').src=dayo[s];
// 	 } else {
// 		s=0;
// 		document.getElementById('dayoimg').src=dayo[s];
// 	}
// 	}

// document.getElementById('flechaizq3').addEventListener('click', patras3);
// function patras3 () {
// 		if (s>0) {
// 	s--;	
// 		document.getElementById('dayoimg').src=dayo[s];
// 	} else {
// 		s=3;
// 		document.getElementById('dayoimg').src=dayo[s];
// 	} }