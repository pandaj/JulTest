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
	/*
	$('#' + lista[num].nombre + ' a img').css({opacity:0.5});
	$('#' + lista[num].nombre + ' a').hover(
		function(){
			$('#' + lista[num].nombre + ' a img').stop().animate({opacity:1}, 400);
		},
		function(){
			$('#' + lista[num].nombre + ' a img').stop().animate({opacity:0.5}, 400);
		}
	);
	*/
	
	
	$('#' + lista[num].nombre + ' a').click(function(){
		var fichaNombre = lista[num].nombre.split("_");
		fichaNombre = fichaNombre.join(" ");

/*----- CLASES -----*/
		var fichaClases = '';
		var claseNombre = '';
		
		for (var f = 0; f < lista[num].clases.length; f++) {
			claseNombre = lista[num].clases[f].nombre.split("_");
			claseNombre = claseNombre.join(" ");
			
			if (lista == monsters) {
				fichaClases = fichaClases + 
					'<div class="ficha-clase">' + 
						'<img src="disgaea/M_' + lista[num].nombre + '_0' + (f + 1) + '.gif" />' +
						'<p><b>' + claseNombre + '</b> : ' + lista[num].clases[f].requiere + '</p>' +
					'</div>';
			} else {
				fichaClases = fichaClases + 
					'<div class="ficha-clase">' + 
						'<img src="disgaea/D_' + lista[num].nombre + '_0' + (f + 1) + '.gif" />' +
						'<p><b>' + claseNombre + '</b> : ' + lista[num].clases[f].requiere + '</p>' +
					'</div>';
			}
		}


/*----- SKILLS -----*/


		var fichaSkills = '';		
		for (var s = 0; s < lista[num].skills.length; s++) {
			fichaSkills = fichaSkills + 
				'<div class="ficha-skill">' + 
					'<h3>' + lista[num].skills[s] + '</h3>' + 
					'<table width="100%" border="0" cellspacing="0" cellpadding="0">' + 
						'<tr><td width="80">Daño</td><td>C</td></tr>' + 
						'<tr><td>Atributo</td><td>ATK</td></tr>' + 
						'<tr><td>Elemento</td><td>Fuego</td></tr>' + 
						'<tr><td>Altura</td><td>20/20</td></tr>' + 
						'<tr><td>Rango</td><td>[ imagen ]</td></tr>' + 
						'<tr><td>Info</td><td>Puede quemar a los enemigos</td></tr>' + 
					'</table>' + 
				'</div>';
		}


/*----- UNIQUE SKILLS -----*/


		var fichaUnSkills = '';		
		for (var us = 0; us < lista[num].unskills.length; us++) {
			fichaUnSkills = fichaSkills + 
				'<div class="ficha-skill">' + 
					'<h3>' + lista[num].unskills[us].nombre + '</h3>' + 
					'<table width="100%" border="0" cellspacing="0" cellpadding="0">' + 
						'<tr><td width="80">Daño</td><td>' + lista[num].unskills[us].poder + '</td></tr>' + 
						'<tr><td>Atributo</td><td>' + lista[num].unskills[us].atrib + '</td></tr>' + 
						'<tr><td>Elemento</td><td>' + lista[num].unskills[us].elem + '</td></tr>' + 
						'<tr><td>Altura</td><td>' + lista[num].unskills[us].alto + '</td></tr>' + 
						'<tr><td>Rango</td><td>' + lista[num].unskills[us].rango + '</td></tr>' + 
						'<tr><td>Info</td><td>' + lista[num].unskills[us].info + '</td></tr>' + 
					'</table>' + 
				'</div>';
		}


/*----- EVILITIES -----*/


		var fichaEvility = '';		
		for (var s = 0; s < lista[num].evility.length; s++) {
			fichaEvility = fichaEvility + 
				'<div class="ficha-skill">' + 
					'<h3>' + lista[num].evility[s] + '</h3>' + 
					'<p><b>Requiere Phantom Nv 30</b></p>' + 
					'<p>Esta es una habilidad muy bakan xD</p>' + 
				'</div>';
		}

		
/*----- UNIQUE EVILITIES -----*/


		var fichaUnEvility = '';
		for (var ue = 0; ue < lista[num].unevility.length; ue++) {
			fichaUnEvility = fichaUnEvility + 
				'<div class="ficha-skill">' + 
					'<h3>' + lista[num].unevility[ue].nombre + '</h3>' + 
					'<p><b>' + lista[num].unevility[ue].requiere + '</b></p>' + 
					'<p>' + lista[num].unevility[ue].info + '</p>' + 
				'</div>';
		}
		
		$('#ficha-char').html(
			'<div id="ficha-titulo">' + 
				'<h1>' + fichaNombre + '</h1>' + 
				'<a id="ficha-volver" href="#">[ volver ]</a>' + 
			'</div>' + 
			'<div class="ficha-clases">' + 
				'<h2>CLASES: </h2>' + fichaClases + 
			'</div>' + 
			'<div class="ficha-skills">' + 
				'<h2>SKILLS: </h2>' + fichaSkills + 
			'</div>' + 
			'<div class="ficha-unskills">' + 
				'<h2>SKILLS UNICAS: </h2>' + fichaUnSkills + 
			'</div>' + 
			'<div class="ficha-evilities">' + 
				'<h2>EVILITIES: </h2>' + fichaEvility + 
			'</div>' + 
			'<div class="ficha-unevilities">' + 
				'<h2>EVILITIES UNICAS: </h2>' + fichaUnEvility + 
			'</div>'
		);
		
		$('#ficha-char').show();
		$('#ficha-char').animate({opacity:0.9},500);
		$('#ficha-volver').click(function() {
			$('#ficha-char').animate({opacity:0},500, function(){
				$('#ficha-char').hide();
			});
		});
	});
}