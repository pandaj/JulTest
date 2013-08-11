// JavaScript Document

window.onload = function(){
	for (var d = 0; d < demiHumans.length; d++) {
		var nombreD = demiHumans[d].nombre.split("_");
		nombreD = nombreD.join(" ");
		
		$('#select-char').append(
			'<div id="' + demiHumans[d].nombre + '" class="char-face">' +
				'<a class="char-boton" href="#">' + 
					'<img src="' + 'disgaea/faces/D_' + demiHumans[d].nombre + '.jpg' + '" />' + 
					'<p>' + nombreD + '</p>' + 
				'</a>' + 
			'</div>'
		);
		botonChar(d, demiHumans);
	}
	for (var m = 0; m < monsters.length; m++) {
		var nombreM = monsters[m].nombre.split("_");
		nombreM = nombreM.join(" ");
		
		$('#select-char').append(
			'<div id="' + monsters[m].nombre + '" class="char-face">' +
				'<a class="char-boton" href="#">' + 
					'<img src="' + 'disgaea/faces/M_' + monsters[m].nombre + '.jpg' + '" />' + 
					'<p>' + nombreM + '</p>' + 
				'</a>' + 
			'</div>'
		);
		botonChar(m, monsters);
	}
}

function botonChar(num, lista) {
	//$('#' + lista[num].nombre)
}