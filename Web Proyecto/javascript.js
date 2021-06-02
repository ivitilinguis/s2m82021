
document.getElementById('grupos').addEventListener('click',hola);
var grupi = document.getElementById('grup');
	var i=0;
function hola () {
	if (i==0) {
		i=1;
		grupi.style.display=('block');	
	}
	else {
		i=0;
		grupi.style.display=('none');
		
	} }

	document.getElementById('hambur').addEventListener('click',display);
	var a=0;
	function display () {
		if (a==0) {
		a=1;
		document.getElementById('nav').style.display=('block');
		document.getElementById('hambur').className="fas fa-window-close";	
	}
	else {
		a=0;
		document.getElementById('nav').style.display=('none');
		document.getElementById('hambur').className="fas fa-bars";		
	} }


document.getElementById('laflecha').addEventListener('click',scroll);

function scroll () {

  document.getElementById('lasesion').scrollTop = 0;
}





