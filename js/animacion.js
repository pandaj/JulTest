// JavaScript Document

window.onload = function(){
	var escena = document.getElementById("escena");

	if (escena.getContext) {
			
		/********* CARGA SPRITES *********/
			
			
		var posX = 20; //posicion absoluta en X
		var posY = 20; // posicion absoluta en Y
		var width = 44; // ancho de cada sprite
		var height = 63; // alto de cada sprite
		var indica = 0; // indicador del sprite actual
		var tope = 6; // cantidad total de sprites - 1
			
		var contenido = escena.getContext('2d');
		var sprites = new Image();
		sprites.src = "images/kim_anima.png";
			
		function cambiaSprite() {
			contenido.drawImage(sprites, (width*indica), 0, width, height, posX, posY, width, height);
		}
			
		sprites.onload = function() {
			limpieza();
			cambiaSprite();
			animaCirculo = setInterval(animaC, vel);
		}
			
		var animaCirculo;
		var vel = 100; // velocidad de animacion
	
		function limpieza() {
			contenido.clearRect(posX, posY, width, height);
		}
			
		function animaC() {
			if (indica == tope) {
				indica = 0;
			} else {
				indica += 1;
			}
			clearInterval(animaCirculo);
			animaCirculo = setInterval(animaC, vel);
			limpieza();
			cambiaSprite();
		}
			
			
		/************** APURAR / RETRASAR *********/
			
			
		function apurar() {
			if (vel > 10) {
				vel -= 10;
			}
		}
		
		function retrasar() {
			vel += 10;
		}
	}
}