document.getElementById('proyectos').addEventListener('click',hola);
var proyi = document.getElementById('proy');
	var i=0;
function hola () {
	if (i==0) {
		i=1;
		proyi.style.display=('block');	
	}
	else {
		i=0;
		proyi.style.display=('none');
		
	} }

