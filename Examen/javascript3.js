//JS Index

//cambio background img

document.getElementById('flechde').addEventListener('click', alante);
var fondos=["url('img/home.jpg')","url('img/home2.jpg')","url('img/home3.jpg')","url('img/home4.jpg')"];
	var q=0;
function alante () {
		if (q<fondos.length-1) {
		q++;
		document.getElementById('potaca').style.backgroundImage=fondos[q];
	} else {
		q=0;
		document.getElementById('potaca').style.backgroundImage=fondos[q];
	}
}

document.getElementById('flechiz').addEventListener('click', patras);
function patras () {
		if (q>0) {
		q--;	
		document.getElementById('potaca').style.backgroundImage=fondos[q];
	} else {
		q=3;
		document.getElementById('potaca').style.backgroundImage=fondos[q];
	}
}
