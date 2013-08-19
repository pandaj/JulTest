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
		
		if (lista == monsters) {
			$('#ficha-char').html(
			'<div id="ficha-titulo">' + 
				'<h1>' + fichaNombre + '</h1>' + 
				'<a id="ficha-volver" href="#">[ volver ]</a>' + 
			'</div>' + 
			'<div class="ficha-clases">' + 
				'<h2>CLASES: </h2>' + fichaClases + 
			'</div>');
		}
		else {
			
		$('#ficha-char').html(
			'<div id="ficha-titulo">' + 
				'<h1>' + fichaNombre + '</h1>' + 
				'<a id="ficha-volver" href="#">[ volver ]</a>' + 
			'</div>' + 
			'<div class="ficha-clases">' + 
				'<h2>CLASES: </h2>' + fichaClases + 
			'</div>'); /* + 
			<div class="ficha-armas">
				<h2>ARMAS: </h2>
				<div class="ficha-arma">
					<b>Nudillos</b> : Max Nv 6
				</div>
				<div class="ficha-arma">
					<b>Espada</b> : Max Nv 4
				</div>
			</div>
			<div class="ficha-skills">
				<h2>SKILLS: </h2>
				<div class="ficha-skill">
					<h3>Triple Strike</h3>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr><td width="80">Daño</td><td>C</td></tr>
						<tr><td>Atributo</td><td>ATK</td></tr>
						<tr><td>Elemento</td><td>Fuego</td></tr>
						<tr><td>Altura</td><td>20/20</td></tr>
						<tr><td>Rango</td><td>[ imagen ]</td></tr>
						<tr><td>Info</td><td>Puede quemar a los enemigos</td></tr>
					</table>
				</div>
				<div class="ficha-skill">
					<h3>Triple Strike</h3>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr><td width="80">Daño</td><td>C</td></tr>
						<tr><td>Atributo</td><td>ATK</td></tr>
						<tr><td>Elemento</td><td>Fuego</td></tr>
						<tr><td>Altura</td><td>20/20</td></tr>
						<tr><td>Rango</td><td>[ imagen ]</td></tr>
						<tr><td>Info</td><td>Puede quemar a los enemigos</td></tr>
					</table>
				</div>
				<div class="ficha-skill">
					<h3>Triple Strike</h3>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr><td width="80">Daño</td><td>C</td></tr>
						<tr><td>Atributo</td><td>ATK</td></tr>
						<tr><td>Elemento</td><td>Fuego</td></tr>
						<tr><td>Altura</td><td>20/20</td></tr>
						<tr><td>Rango</td><td>[ imagen ]</td></tr>
						<tr><td>Info</td><td>Puede quemar a los enemigos</td></tr>
					</table>
				</div>
			</div>
			<div class="ficha-unskills">
				<h2>SKILLS UNICAS: </h2>
				<div class="ficha-skill">
					<h3>Triple Strike</h3>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr><td width="80">Daño</td><td>C</td></tr>
						<tr><td>Atributo</td><td>ATK</td></tr>
						<tr><td>Elemento</td><td>Fuego</td></tr>
						<tr><td>Altura</td><td>20/20</td></tr>
						<tr><td>Rango</td><td>[ imagen ]</td></tr>
						<tr><td>Info</td><td>Puede quemar a los enemigos</td></tr>
					</table>
				</div>
				<div class="ficha-skill">
					<h3>Triple Strike</h3>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr><td width="80">Daño</td><td>C</td></tr>
						<tr><td>Atributo</td><td>ATK</td></tr>
						<tr><td>Elemento</td><td>Fuego</td></tr>
						<tr><td>Altura</td><td>20/20</td></tr>
						<tr><td>Rango</td><td>[ imagen ]</td></tr>
						<tr><td>Info</td><td>Puede quemar a los enemigos</td></tr>
					</table>
				</div>
				<div class="ficha-skill">
					<h3>Triple Strike</h3>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr><td width="80">Daño</td><td>C</td></tr>
						<tr><td>Atributo</td><td>ATK</td></tr>
						<tr><td>Elemento</td><td>Fuego</td></tr>
						<tr><td>Altura</td><td>20/20</td></tr>
						<tr><td>Rango</td><td>[ imagen ]</td></tr>
						<tr><td>Info</td><td>Puede quemar a los enemigos</td></tr>
					</table>
				</div>
			</div>
			<div class="ficha-evilities">
				<h2>EVILITIES: </h2>
				<div class="ficha-evility">
					<h3>Triple Strike</h3>
					<p>Aasdas asdasda sdasd</p>
					<p><b>Aasdas asdasda sdasd</b></p>
				</div>
				<div class="ficha-evility">
					<h3>Triple Strike</h3>
					<p>Aasdas asdasda sdasd</p>
					<p><b>Aasdas asdasda sdasd</b></p>
				</div>
				<div class="ficha-evility">
					<h3>Triple Strike</h3>
					<p>Aasdas asdasda sdasd</p>
					<p><b>Aasdas asdasda sdasd</b></p>
				</div>
			</div>
			<div class="ficha-unevilities">
				<h2>EVILITIES UNICAS: </h2>
				<div class="ficha-evility">
					<h3>Triple Strike</h3>
					<p>Aasdas asdasda sdasd</p>
					<p><b>Aasdas asdasda sdasd</b></p>
				</div>
				<div class="ficha-evility">
					<h3>Triple Strike</h3>
					<p>Aasdas asdasda sdasd</p>
					<p><b>Aasdas asdasda sdasd</b></p>
				</div>
				<div class="ficha-evility">
					<h3>Triple Strike</h3>
					<p>Aasdas asdasda sdasd</p>
					<p><b>Aasdas asdasda sdasd</b></p>
				</div>
			</div>'); */
		}
		
		$('#ficha-char').show();
		$('#ficha-char').animate({opacity:0.9},500);
		$('#ficha-volver').click(function() {
			$('#ficha-char').animate({opacity:0},500, function(){
				$('#ficha-char').hide();
			});
		});
	});
}