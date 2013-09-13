

/*----- DEMI-HUMANS -----*/


var demiHumans = new Array();

/*FEMALE ARCHER*/
/*
Move: 5
Jump: 25
Range: 1
Throw: 4
Counter: 1
Critical: 5%
*/
demiHumans[0] = new Object();
demiHumans[0].nombre = "Archer";
demiHumans[0].clases = new Array();
demiHumans[0].clases[0] = new Object();
demiHumans[0].clases[0].nombre = "Archer";
demiHumans[0].clases[0].requiere = 'Female Fighter y Female Healer Nv 15, y aprobar "Make a Female Archer"';
demiHumans[0].clases[1] = new Object();
demiHumans[0].clases[1].nombre = "Hunter";
demiHumans[0].clases[1].requiere = "Archer Nv 20";
demiHumans[0].clases[2] = new Object();
demiHumans[0].clases[2].nombre = "Shooter";
demiHumans[0].clases[2].requiere = "Hunter Nv 50";
demiHumans[0].clases[3] = new Object();
demiHumans[0].clases[3].nombre = "Bow Master";
demiHumans[0].clases[3].requiere = "Shooter Nv 100";
demiHumans[0].clases[4] = new Object();
demiHumans[0].clases[4].nombre = "Cupid";
demiHumans[0].clases[4].requiere = "Bow Master Nv 200";
demiHumans[0].clases[5] = new Object();
demiHumans[0].clases[5].nombre = "Feischutz";
demiHumans[0].clases[5].requiere = "Cupid Nv 400";
demiHumans[0].skills = new Array();
demiHumans[0].skills[0] = "Skill 1";
demiHumans[0].skills[1] = "Skill 2";
demiHumans[0].skills[2] = "Skill 3";
demiHumans[0].unskills = new Array();
demiHumans[0].unskills[0] = new Object();
demiHumans[0].unskills[0].nombre = "";
demiHumans[0].unskills[0].poder = "";
demiHumans[0].unskills[0].atrib = "";
demiHumans[0].unskills[0].elem = "";
demiHumans[0].unskills[0].alto = "";
demiHumans[0].unskills[0].rango = "";
demiHumans[0].unskills[0].info = "";
demiHumans[0].unskills[1] = new Object();
demiHumans[0].unskills[1].nombre = "";
demiHumans[0].unskills[1].poder = "";
demiHumans[0].unskills[1].atrib = "";
demiHumans[0].unskills[1].elem = "";
demiHumans[0].unskills[1].alto = "";
demiHumans[0].unskills[1].rango = "";
demiHumans[0].unskills[1].info = "";
demiHumans[0].evility = new Array();
demiHumans[0].evility[0] = "Evility 1";
demiHumans[0].evility[1] = "Evility 2";
demiHumans[0].evility[2] = "Evility 3";
demiHumans[0].unevility = new Array();
demiHumans[0].unevility[0] = new Object();
demiHumans[0].unevility[0].nombre = "Accel Shot";
demiHumans[0].unevility[0].info = "Su ATK aumenta en un 5% por cada panel de distancia entre el enemigo.";
demiHumans[0].unevility[0].requiere = "Inicial";
demiHumans[0].unevility[1] = new Object();
demiHumans[0].unevility[1].nombre = "Hawk Down";
demiHumans[0].unevility[1].info = "Si el enemigo puede volar, este recibe 50% mas de daño.";
demiHumans[0].unevility[1].requiere = "Hunter Nv 25";
demiHumans[0].unevility[2] = new Object();
demiHumans[0].unevility[2].nombre = "Boy Hunt";
demiHumans[0].unevility[2].info = "Si el enemigo es macho, este recibe 20% mas de daño.";
demiHumans[0].unevility[2].requiere = "Bow Master Nv 120";
demiHumans[0].unevility[3] = new Object();
demiHumans[0].unevility[3].nombre = "Bow Range";
demiHumans[0].unevility[3].info = "Su rango de ataque aumenta en 1 panel cuando su arma es un Arco.";
demiHumans[0].unevility[3].requiere = "Feischutz Nv 600";

/*BEAST MASTER*/
/*
Move: 4
Jump: 25
Range: 1
Throw: 5
Counter: 2
Critical: 5%
*/
demiHumans[1] = new Object();
demiHumans[1].nombre = "Beast_Master";
demiHumans[1].clases = new Array();
demiHumans[1].clases[0] = new Object();
demiHumans[1].clases[0].nombre = "Beast Tamer";
demiHumans[1].clases[0].requiere = 'Female Fighter y Female Brawler Nv 15, y aprobar "Make a Beast Master"';
demiHumans[1].clases[1] = new Object();
demiHumans[1].clases[1].nombre = "Beast Leader";
demiHumans[1].clases[1].requiere = "Beast Tamer Nv 20";
demiHumans[1].clases[2] = new Object();
demiHumans[1].clases[2].nombre = "Beast Lord";
demiHumans[1].clases[2].requiere = "Beast Leader Nv 50";
demiHumans[1].clases[3] = new Object();
demiHumans[1].clases[3].nombre = "Beast Queen";
demiHumans[1].clases[3].requiere = "Beast Lord Nv 100";
demiHumans[1].clases[4] = new Object();
demiHumans[1].clases[4].nombre = "Beast Master";
demiHumans[1].clases[4].requiere = "Beast Queen Nv 200";
demiHumans[1].clases[5] = new Object();
demiHumans[1].clases[5].nombre = "Beast Savior";
demiHumans[1].clases[5].requiere = "Beast Master Nv 400";
demiHumans[1].skills = new Array();
demiHumans[1].skills[0] = "Skill 1";
demiHumans[1].skills[1] = "Skill 2";
demiHumans[1].skills[2] = "Skill 3";
demiHumans[1].unskills = new Array();
demiHumans[1].unskills[0] = new Object();
demiHumans[1].unskills[0].nombre = "";
demiHumans[1].unskills[0].poder = "";
demiHumans[1].unskills[0].atrib = "";
demiHumans[1].unskills[0].elem = "";
demiHumans[1].unskills[0].alto = "";
demiHumans[1].unskills[0].rango = "";
demiHumans[1].unskills[0].info = "";
demiHumans[1].unskills[1] = new Object();
demiHumans[1].unskills[1].nombre = "";
demiHumans[1].unskills[1].poder = "";
demiHumans[1].unskills[1].atrib = "";
demiHumans[1].unskills[1].elem = "";
demiHumans[1].unskills[1].alto = "";
demiHumans[1].unskills[1].rango = "";
demiHumans[1].unskills[1].info = "";
demiHumans[1].evility = new Array();
demiHumans[1].evility[0] = "Evility 1";
demiHumans[1].evility[1] = "Evility 2";
demiHumans[1].evility[2] = "Evility 3";
demiHumans[1].unevility = new Array();
demiHumans[1].unevility[0] = new Object();
demiHumans[1].unevility[0].nombre = "Dark Tamer";
demiHumans[1].unevility[0].info = "Aumenta los Atributos de los Mounstros aliados adyacentes (pegados a este personaje) en un 20%.";
demiHumans[1].unevility[0].requiere = "Inicial";
demiHumans[1].unevility[1] = new Object();
demiHumans[1].unevility[1].nombre = "Synchronize";
demiHumans[1].unevility[1].info = "La posibilidad de Combo en Cadena con los Moustros aliados aumenta a un 99%.";
demiHumans[1].unevility[1].requiere = "Beast Leader Nv 25";
demiHumans[1].unevility[2] = new Object();
demiHumans[1].unevility[2].nombre = "Dark Blood";
demiHumans[1].unevility[2].info = "Sus Atributos aumentan un 5% por cada Mounstro en el mapa.";
demiHumans[1].unevility[2].requiere = "Beast Queen Nv 120";
demiHumans[1].unevility[3] = new Object();
demiHumans[1].unevility[3].nombre = "M Weapon Master";
demiHumans[1].unevility[3].info = "Sus Aptitudes aumentan un 20% cuando su arma es un arma de Magichange.";
demiHumans[1].unevility[3].requiere = "Beast Savior Nv 600";

/*BERSERKER*/
/*
Move: 4
Jump: 20
Range: 1
Throw: 5
Counter: 2
Critical: 5%
*/
demiHumans[2] = new Object();
demiHumans[2].nombre = "Berserker";
demiHumans[2].clases = new Array();
demiHumans[2].clases[0] = new Object();
demiHumans[2].clases[0].nombre = "Barbarian";
demiHumans[2].clases[0].requiere = 'Heavy Knight y Beast Master Nv 40, y aprobar "Make a Brute Warrior"';
demiHumans[2].clases[1] = new Object();
demiHumans[2].clases[1].nombre = "Crusher";
demiHumans[2].clases[1].requiere = "Barbarian Nv 45";
demiHumans[2].clases[2] = new Object();
demiHumans[2].clases[2].nombre = "Marauder";
demiHumans[2].clases[2].requiere = "Crusher Nv 100";
demiHumans[2].clases[3] = new Object();
demiHumans[2].clases[3].nombre = "Berserker";
demiHumans[2].clases[3].requiere = "Marauder Nv 200";
demiHumans[2].clases[4] = new Object();
demiHumans[2].clases[4].nombre = "Avenger";
demiHumans[2].clases[4].requiere = "Berserker Nv 400";
demiHumans[2].clases[5] = new Object();
demiHumans[2].clases[5].nombre = "Genocider";
demiHumans[2].clases[5].requiere = "Avenger Nv 800";
demiHumans[2].skills = new Array();
demiHumans[2].skills[0] = "Skill 1";
demiHumans[2].skills[1] = "Skill 2";
demiHumans[2].skills[2] = "Skill 3";
demiHumans[2].unskills = new Array();
demiHumans[2].unskills[0] = new Object();
demiHumans[2].unskills[0].nombre = "";
demiHumans[2].unskills[0].poder = "";
demiHumans[2].unskills[0].atrib = "";
demiHumans[2].unskills[0].elem = "";
demiHumans[2].unskills[0].alto = "";
demiHumans[2].unskills[0].rango = "";
demiHumans[2].unskills[0].info = "";
demiHumans[2].unskills[1] = new Object();
demiHumans[2].unskills[1].nombre = "";
demiHumans[2].unskills[1].poder = "";
demiHumans[2].unskills[1].atrib = "";
demiHumans[2].unskills[1].elem = "";
demiHumans[2].unskills[1].alto = "";
demiHumans[2].unskills[1].rango = "";
demiHumans[2].unskills[1].info = "";
demiHumans[2].evility = new Array();
demiHumans[2].evility[0] = "Evility 1";
demiHumans[2].evility[1] = "Evility 2";
demiHumans[2].evility[2] = "Evility 3";
demiHumans[2].unevility = new Array();
demiHumans[2].unevility[0] = new Object();
demiHumans[2].unevility[0].nombre = "Madness";
demiHumans[2].unevility[0].info = "Su ATK aumenta en un 50% cuando su HP esta bajo el 25%.";
demiHumans[2].unevility[0].requiere = "Inicial";
demiHumans[2].unevility[1] = new Object();
demiHumans[2].unevility[1].nombre = "Super Adrenaline";
demiHumans[2].unevility[1].info = "Sus Atributos aumentan en un 5% por cada enemigo derrotado durante una batalla.";
demiHumans[2].unevility[1].requiere = "Crusher Nv 30";
demiHumans[2].unevility[2] = new Object();
demiHumans[2].unevility[2].nombre = "Forgotten Arts";
demiHumans[2].unevility[2].info = "Su ATK aumenta en 50% cuando tiene el estado alterado Olvido.";
demiHumans[2].unevility[2].requiere = "Berserker Nv 150";
demiHumans[2].unevility[3] = new Object();
demiHumans[2].unevility[3].nombre = "Fury Strike";
demiHumans[2].unevility[3].info = "El daño de sus Golpes Criticos aumenta en un 100%, pero su HIT se reduce en un 30% cuando su arma es un Hacha.";
demiHumans[2].unevility[3].requiere = "Genocider Nv 800";

/*CHEERLEADER*/
/*
Move: 4
Jump: 25
Range: 1
Throw: 4
Counter: 1
Critical: 5%
*/
demiHumans[3] = new Object();
demiHumans[3].nombre = "Cheerleader";
demiHumans[3].clases = new Array();
demiHumans[3].clases[0] = new Object();
demiHumans[3].clases[0].nombre = "Brand New Idol";
demiHumans[3].clases[0].requiere = 'Geomancer y Male/Female Healer Nv 25, y aprobar "Make a Cheerleader';
demiHumans[3].clases[1] = new Object();
demiHumans[3].clases[1].nombre = "Summer Idol";
demiHumans[3].clases[1].requiere = "Brand New Idol Nv 30";
demiHumans[3].clases[2] = new Object();
demiHumans[3].clases[2].nombre = "Celestial Idol";
demiHumans[3].clases[2].requiere = "Summer Idol Nv 70";
demiHumans[3].clases[3] = new Object();
demiHumans[3].clases[3].nombre = "Dream Idol";
demiHumans[3].clases[3].requiere = "Celestial Idol Nv 140";
demiHumans[3].clases[4] = new Object();
demiHumans[3].clases[4].nombre = "Brilliant Idol";
demiHumans[3].clases[4].requiere = "Dream Idol Nv 280";
demiHumans[3].clases[5] = new Object();
demiHumans[3].clases[5].nombre = "Idol Master";
demiHumans[3].clases[5].requiere = "Brilliant Idol Nv 560";
demiHumans[3].skills = new Array();
demiHumans[3].skills[0] = "Skill 1";
demiHumans[3].skills[1] = "Skill 2";
demiHumans[3].skills[2] = "Skill 3";
demiHumans[3].unskills = new Array();
demiHumans[3].unskills[0] = new Object();
demiHumans[3].unskills[0].nombre = "";
demiHumans[3].unskills[0].poder = "";
demiHumans[3].unskills[0].atrib = "";
demiHumans[3].unskills[0].elem = "";
demiHumans[3].unskills[0].alto = "";
demiHumans[3].unskills[0].rango = "";
demiHumans[3].unskills[0].info = "";
demiHumans[3].unskills[1] = new Object();
demiHumans[3].unskills[1].nombre = "";
demiHumans[3].unskills[1].poder = "";
demiHumans[3].unskills[1].atrib = "";
demiHumans[3].unskills[1].elem = "";
demiHumans[3].unskills[1].alto = "";
demiHumans[3].unskills[1].rango = "";
demiHumans[3].unskills[1].info = "";
demiHumans[3].evility = new Array();
demiHumans[3].evility[0] = "Evility 1";
demiHumans[3].evility[1] = "Evility 2";
demiHumans[3].evility[2] = "Evility 3";
demiHumans[3].unevility = new Array();
demiHumans[3].unevility[0] = new Object();
demiHumans[3].unevility[0].nombre = "Lovely Song";
demiHumans[3].unevility[0].info = "Aumenta los Atributos de los aliados en el mapa en un 5%.";
demiHumans[3].unevility[0].requiere = "Inicial";
demiHumans[3].unevility[1] = new Object();
demiHumans[3].unevility[1].nombre = "Charmy Song";
demiHumans[3].unevility[1].info = "Aumenta las posbilidades de Combo en Cadena de los aliados en el mapa en un 10%.";
demiHumans[3].unevility[1].requiere = "Summer Idol Nv 30";
demiHumans[3].unevility[2] = new Object();
demiHumans[3].unevility[2].nombre = "Lucky Song";
demiHumans[3].unevility[2].info = "Aumenta el daño de los Golpes Criticos de los aliados en el mapa en un 20%.";
demiHumans[3].unevility[2].requiere = "Dream Idol Nv 150";
demiHumans[3].unevility[3] = new Object();
demiHumans[3].unevility[3].nombre = "Happy Song";
demiHumans[3].unevility[3].info = "Aumenta la EXP que ganan los aliados en el mapa en un 20%.";
demiHumans[3].unevility[3].requiere = "Idol Master Nv 800";

/*FEMALE BRAWLER*/
/*
Move: 5
Jump: 25
Range: 1
Throw: 5
Counter: 3
Critical: 5%
*/
demiHumans[4] = new Object();
demiHumans[4].nombre = "Female_Brawler";
demiHumans[4].clases = new Array();
demiHumans[4].clases[0] = new Object();
demiHumans[4].clases[0].nombre = "Wind Spinner";
demiHumans[4].clases[0].requiere = 'Inicial';
demiHumans[4].clases[1] = new Object();
demiHumans[4].clases[1].nombre = "Thunder Fist";
demiHumans[4].clases[1].requiere = "Wind Spinner Nv 20";
demiHumans[4].clases[2] = new Object();
demiHumans[4].clases[2].nombre = "Storm Bringer";
demiHumans[4].clases[2].requiere = "Thunder Fist Nv 40";
demiHumans[4].clases[3] = new Object();
demiHumans[4].clases[3].nombre = "Sky Faller";
demiHumans[4].clases[3].requiere = "Storm Bringer Nv 80";
demiHumans[4].clases[4] = new Object();
demiHumans[4].clases[4].nombre = "Star Warrior";
demiHumans[4].clases[4].requiere = "Sky Faller Nv 160";
demiHumans[4].clases[5] = new Object();
demiHumans[4].clases[5].nombre = "God Buster";
demiHumans[4].clases[5].requiere = "Star Warrior Nv 360";
demiHumans[4].skills = new Array();
demiHumans[4].skills[0] = "Triple Fist";
demiHumans[4].skills[1] = "Phantom Fist";
demiHumans[4].skills[2] = "Blazing Palm";
demiHumans[4].unskills = new Array();
demiHumans[4].unskills[0] = new Object();
demiHumans[4].unskills[0].nombre = "Self Heal";
demiHumans[4].unskills[0].poder = "---";
demiHumans[4].unskills[0].atrib = "---";
demiHumans[4].unskills[0].elem = "Neutral";
demiHumans[4].unskills[0].alto = "???";
demiHumans[4].unskills[0].rango = "1self1";
demiHumans[4].unskills[0].info = "Recupera el 50% de su HP.";
demiHumans[4].unskills[1] = new Object();
demiHumans[4].unskills[1].nombre = "Absolute Combo";
demiHumans[4].unskills[1].poder = "D";
demiHumans[4].unskills[1].atrib = "???";
demiHumans[4].unskills[1].elem = "???";
demiHumans[4].unskills[1].alto = "???";
demiHumans[4].unskills[1].rango = "1front1";
demiHumans[4].unskills[1].info = "Si elimina al enemigo, puede repetir sus acciones en el turno (solo 1 vez).";
demiHumans[4].evility = new Array();
demiHumans[4].evility[0] = "Evility 1";
demiHumans[4].evility[1] = "Evility 2";
demiHumans[4].evility[2] = "Evility 3";
demiHumans[4].unevility = new Array();
demiHumans[4].unevility[0] = new Object();
demiHumans[4].unevility[0].nombre = "Feint";
demiHumans[4].unevility[0].info = "Cancel out the enemy's counter attack.";
demiHumans[4].unevility[0].requiere = "Inicial";
demiHumans[4].unevility[1] = new Object();
demiHumans[4].unevility[1].nombre = "Impromptu";
demiHumans[4].unevility[1].info = "Team chance increased by 50%.";
demiHumans[4].unevility[1].requiere = "Thunder Fist Nv 20";
demiHumans[4].unevility[2] = new Object();
demiHumans[4].unevility[2].nombre = "Counter Chance";
demiHumans[4].unevility[2].info = "Aumenta en un 50% las posibilidades de Critico de sus ContraAtaques.";
demiHumans[4].unevility[2].requiere = "Sky Faller Nv 100";
demiHumans[4].unevility[3] = new Object();
demiHumans[4].unevility[3].nombre = "Hurt Me, Kill You";
demiHumans[4].unevility[3].info = "Sus ContraAtaques siempre golpean.";
demiHumans[4].unevility[3].requiere = "God Buster Nv 500";

/*FEMALE FIGHTER*/
/*
Move: 4
Jump: 20
Range: 1
Throw: 5
Counter: 2
Critical: 5%
*/
demiHumans[5] = new Object();
demiHumans[5].nombre = "Female_Fighter";
demiHumans[5].clases = new Array();
demiHumans[5].clases[0] = new Object();
demiHumans[5].clases[0].nombre = "Lady Fighter";
demiHumans[5].clases[0].requiere = 'Inicial';
demiHumans[5].clases[1] = new Object();
demiHumans[5].clases[1].nombre = "Lady Warrior";
demiHumans[5].clases[1].requiere = "Lady Fighter Nv 15";
demiHumans[5].clases[2] = new Object();
demiHumans[5].clases[2].nombre = "Valkyrie";
demiHumans[5].clases[2].requiere = "Lady Warrior Nv 40";
demiHumans[5].clases[3] = new Object();
demiHumans[5].clases[3].nombre = "Minerva Lass";
demiHumans[5].clases[3].requiere = "Valkyrie Nv 80";
demiHumans[5].clases[4] = new Object();
demiHumans[5].clases[4].nombre = "Freya";
demiHumans[5].clases[4].requiere = "Minerva Lass Nv 160";
demiHumans[5].clases[5] = new Object();
demiHumans[5].clases[5].nombre = "Iron Maiden";
demiHumans[5].clases[5].requiere = "Freya Nv 360";
demiHumans[5].skills = new Array();
demiHumans[5].skills[0] = "Skill 1";
demiHumans[5].skills[1] = "Skill 2";
demiHumans[5].skills[2] = "Skill 3";
demiHumans[5].unskills = new Array();
demiHumans[5].unskills[0] = new Object();
demiHumans[5].unskills[0].nombre = "Shock Fixer";
demiHumans[5].unskills[0].poder = "F";
demiHumans[5].unskills[0].atrib = "ATK";
demiHumans[5].unskills[0].elem = "Neutral";
demiHumans[5].unskills[0].alto = "???";
demiHumans[5].unskills[0].rango = "4free1";
demiHumans[5].unskills[0].info = "Ataca a 1 solo enemigo sin fallar.";
demiHumans[5].unskills[1] = new Object();
demiHumans[5].unskills[1].nombre = "Axel Charge";
demiHumans[5].unskills[1].poder = "F";
demiHumans[5].unskills[1].atrib = "ATK";
demiHumans[5].unskills[1].elem = "Neutral";
demiHumans[5].unskills[1].alto = "???";
demiHumans[5].unskills[1].rango = "3line1";
demiHumans[5].unskills[1].info = "Ataca a 1 solo enemigo. Si lo elimina, sus Movimientos aumentan en 1 panel durante el resto de la batalla.";
demiHumans[5].evility = new Array();
demiHumans[5].evility[0] = "Evility 1";
demiHumans[5].evility[1] = "Evility 2";
demiHumans[5].evility[2] = "Evility 3";
demiHumans[5].unevility = new Array();
demiHumans[5].unevility[0] = new Object();
demiHumans[5].unevility[0].nombre = "Assault Attack";
demiHumans[5].unevility[0].info = "Aumenta su daño en un 10% por cada panel que se mueva durante su turno.";
demiHumans[5].unevility[0].requiere = "Inicial";
demiHumans[5].unevility[1] = new Object();
demiHumans[5].unevility[1].nombre = "Shield Mastery";
demiHumans[5].unevility[1].info = "Reduce el daño de los Ataques Normales en un 50%.";
demiHumans[5].unevility[1].requiere = "Lady Warrior Nv 20";
demiHumans[5].unevility[2] = new Object();
demiHumans[5].unevility[2].nombre = "Power Shot";
demiHumans[5].unevility[2].info = "30% de su ATK base es añadido a su HIT cuando su arma es un Arco.";
demiHumans[5].unevility[2].requiere = "Minerva Lass Nv 100";
demiHumans[5].unevility[3] = new Object();
demiHumans[5].unevility[3].nombre = "Spear Sting";
demiHumans[5].unevility[3].info = "30% de su HIT base es añadido a su ATK cuando su arma es una Lanza.";
demiHumans[5].unevility[3].requiere = "Iron Maiden Nv 500";

/*FEMALE HEALER*/
/*
Move: 4
Jump: 20
Range: 1
Throw: 4
Counter: 0
Critical: 5%
*/
demiHumans[6] = new Object();
demiHumans[6].nombre = "Female_Healer";
demiHumans[6].clases = new Array();
demiHumans[6].clases[0] = new Object();
demiHumans[6].clases[0].nombre = "Healer";
demiHumans[6].clases[0].requiere = 'Inicial';
demiHumans[6].clases[1] = new Object();
demiHumans[6].clases[1].nombre = "Acolyte";
demiHumans[6].clases[1].requiere = "Healer Nv 15";
demiHumans[6].clases[2] = new Object();
demiHumans[6].clases[2].nombre = "Priest";
demiHumans[6].clases[2].requiere = "Acolyte Nv 40";
demiHumans[6].clases[3] = new Object();
demiHumans[6].clases[3].nombre = "Bishop";
demiHumans[6].clases[3].requiere = "Priest Nv 80";
demiHumans[6].clases[4] = new Object();
demiHumans[6].clases[4].nombre = "Cardinal";
demiHumans[6].clases[4].requiere = "Bishop Nv 160";
demiHumans[6].clases[5] = new Object();
demiHumans[6].clases[5].nombre = "Saint";
demiHumans[6].clases[5].requiere = "Cardinal Nv 360";
demiHumans[6].skills = new Array();
demiHumans[6].skills[0] = "Skill 1";
demiHumans[6].skills[1] = "Skill 2";
demiHumans[6].skills[2] = "Skill 3";
demiHumans[6].unskills = new Array();
demiHumans[6].unskills[0] = new Object();
demiHumans[6].unskills[0].nombre = "";
demiHumans[6].unskills[0].poder = "";
demiHumans[6].unskills[0].atrib = "";
demiHumans[6].unskills[0].elem = "";
demiHumans[6].unskills[0].alto = "";
demiHumans[6].unskills[0].rango = "";
demiHumans[6].unskills[0].info = "";
demiHumans[6].unskills[1] = new Object();
demiHumans[6].unskills[1].nombre = "";
demiHumans[6].unskills[1].poder = "";
demiHumans[6].unskills[1].atrib = "";
demiHumans[6].unskills[1].elem = "";
demiHumans[6].unskills[1].alto = "";
demiHumans[6].unskills[1].rango = "";
demiHumans[6].unskills[1].info = "";
demiHumans[6].evility = new Array();
demiHumans[6].evility[0] = "Evility 1";
demiHumans[6].evility[1] = "Evility 2";
demiHumans[6].evility[2] = "Evility 3";
demiHumans[6].unevility = new Array();
demiHumans[6].unevility[0] = new Object();
demiHumans[6].unevility[0].nombre = "Light's Blessing";
demiHumans[6].unevility[0].info = "Reduce el daño por Magias que reciban los aliados adyacentes a este personaje en un 50.";
demiHumans[6].unevility[0].requiere = "Inicial";
demiHumans[6].unevility[1] = new Object();
demiHumans[6].unevility[1].nombre = "Heal Mastery";
demiHumans[6].unevility[1].info = "Aumenta el efecto de sus Magias tipo Heal en un 100%.";
demiHumans[6].unevility[1].requiere = "Acolyte Nv 20";
demiHumans[6].unevility[2] = new Object();
demiHumans[6].unevility[2].nombre = "Light Grace";
demiHumans[6].unevility[2].info = "Aumenta el efecto de sus Magias tipo Bendiciones en un 50%.";
demiHumans[6].unevility[2].requiere = "Bishop Nv 100";
demiHumans[6].unevility[3] = new Object();
demiHumans[6].unevility[3].nombre = "Heart's Fertility";
demiHumans[6].unevility[3].info = "Aumenta en un 50% el mana obtenido de un enemigo cuando realiza un Golpe Letal.";
demiHumans[6].unevility[3].requiere = "Saint ";

/*FEMALE SAMURAI*/
/*
Move: 4
Jump: 20
Range: 1
Throw: 4
Counter: 2
Critical: 5%
*/
demiHumans[7] = new Object();
demiHumans[7].nombre = "Female_Samurai";
demiHumans[7].clases = new Array();
demiHumans[7].clases[0] = new Object();
demiHumans[7].clases[0].nombre = "Exorcist";
demiHumans[7].clases[0].requiere = 'Female Fighter y Archer Nv 35, y aprobar "Make a Female Samurai"';
demiHumans[7].clases[1] = new Object();
demiHumans[7].clases[1].nombre = "Diabolist";
demiHumans[7].clases[1].requiere = "Exorcist Nv 40";
demiHumans[7].clases[2] = new Object();
demiHumans[7].clases[2].nombre = "Holy Swordswoman";
demiHumans[7].clases[2].requiere = "Diabolist Nv 90";
demiHumans[7].clases[3] = new Object();
demiHumans[7].clases[3].nombre = "Battle Maiden";
demiHumans[7].clases[3].requiere = "Holy Swordswoman Nv 180";
demiHumans[7].clases[4] = new Object();
demiHumans[7].clases[4].nombre = "Carnage Princess";
demiHumans[7].clases[4].requiere = "Battle Maiden Nv 360";
demiHumans[7].clases[5] = new Object();
demiHumans[7].clases[5].nombre = "Blade Master";
demiHumans[7].clases[5].requiere = "Carnage Princess Nv 720";
demiHumans[7].skills = new Array();
demiHumans[7].skills[0] = "Skill 1";
demiHumans[7].skills[1] = "Skill 2";
demiHumans[7].skills[2] = "Skill 3";
demiHumans[7].unskills = new Array();
demiHumans[7].unskills[0] = new Object();
demiHumans[7].unskills[0].nombre = "";
demiHumans[7].unskills[0].poder = "";
demiHumans[7].unskills[0].atrib = "";
demiHumans[7].unskills[0].elem = "";
demiHumans[7].unskills[0].alto = "";
demiHumans[7].unskills[0].rango = "";
demiHumans[7].unskills[0].info = "";
demiHumans[7].unskills[1] = new Object();
demiHumans[7].unskills[1].nombre = "";
demiHumans[7].unskills[1].poder = "";
demiHumans[7].unskills[1].atrib = "";
demiHumans[7].unskills[1].elem = "";
demiHumans[7].unskills[1].alto = "";
demiHumans[7].unskills[1].rango = "";
demiHumans[7].unskills[1].info = "";
demiHumans[7].evility = new Array();
demiHumans[7].evility[0] = "Evility 1";
demiHumans[7].evility[1] = "Evility 2";
demiHumans[7].evility[2] = "Evility 3";
demiHumans[7].unevility = new Array();
demiHumans[7].unevility[0] = new Object();
demiHumans[7].unevility[0].nombre = "Calm Waters";
demiHumans[7].unevility[0].info = "Su ATK aumenta en un 30% cuando ataca a un solo objetivo.";
demiHumans[7].unevility[0].requiere = "Inicial";
demiHumans[7].unevility[1] = new Object();
demiHumans[7].unevility[1].nombre = "Mind's Eye";
demiHumans[7].unevility[1].info = "Anula el bono al HIT del enemigo cuando este personaje es atacado por atras.";
demiHumans[7].unevility[1].requiere = "Diabolist Nv 30";
demiHumans[7].unevility[2] = new Object();
demiHumans[7].unevility[2].nombre = "Euthanasia";
demiHumans[7].unevility[2].info = "Sus Ataques Normales eliminan instantaneamente a enemigos con menos del 25% de HP.";
demiHumans[7].unevility[2].requiere = "Battle Maiden Nv 150";
demiHumans[7].unevility[3] = new Object();
demiHumans[7].unevility[3].nombre = "Cleanse Evil";
demiHumans[7].unevility[3].info = "Aumenta el daño que hace a los enemigos tipo Mounstro en un 25%.";
demiHumans[7].unevility[3].requiere = "Blade Master Nv 800";

/*GEOMANCER*/
/*
Move: 4
Jump: 20
Range: 1
Throw: 3
Counter: 0
Critical: 5%
*/
demiHumans[8] = new Object();
demiHumans[8].nombre = "Geomancer";
demiHumans[8].clases = new Array();
demiHumans[8].clases[0] = new Object();
demiHumans[8].clases[0].nombre = "Druid";
demiHumans[8].clases[0].requiere = 'Male/Female Healer y Male/Female Brawler Nv 20, y aprobar "Make a Geo Master"';
demiHumans[8].clases[1] = new Object();
demiHumans[8].clases[1].nombre = "Mystic";
demiHumans[8].clases[1].requiere = "Druid Nv 25";
demiHumans[8].clases[2] = new Object();
demiHumans[8].clases[2].nombre = "Sage";
demiHumans[8].clases[2].requiere = "Mystic Nv 60";
demiHumans[8].clases[3] = new Object();
demiHumans[8].clases[3].nombre = "Hermit";
demiHumans[8].clases[3].requiere = "Sage Nv 120";
demiHumans[8].clases[4] = new Object();
demiHumans[8].clases[4].nombre = "Prophet";
demiHumans[8].clases[4].requiere = "Hermit Nv 240";
demiHumans[8].clases[5] = new Object();
demiHumans[8].clases[5].nombre = "Geo Master";
demiHumans[8].clases[5].requiere = "Prophet Nv 480";
demiHumans[8].skills = new Array();
demiHumans[8].skills[0] = "Skill 1";
demiHumans[8].skills[1] = "Skill 2";
demiHumans[8].skills[2] = "Skill 3";
demiHumans[8].unskills = new Array();
demiHumans[8].unskills[0] = new Object();
demiHumans[8].unskills[0].nombre = "";
demiHumans[8].unskills[0].poder = "";
demiHumans[8].unskills[0].atrib = "";
demiHumans[8].unskills[0].elem = "";
demiHumans[8].unskills[0].alto = "";
demiHumans[8].unskills[0].rango = "";
demiHumans[8].unskills[0].info = "";
demiHumans[8].unskills[1] = new Object();
demiHumans[8].unskills[1].nombre = "";
demiHumans[8].unskills[1].poder = "";
demiHumans[8].unskills[1].atrib = "";
demiHumans[8].unskills[1].elem = "";
demiHumans[8].unskills[1].alto = "";
demiHumans[8].unskills[1].rango = "";
demiHumans[8].unskills[1].info = "";
demiHumans[8].evility = new Array();
demiHumans[8].evility[0] = "Evility 1";
demiHumans[8].evility[1] = "Evility 2";
demiHumans[8].evility[2] = "Evility 3";
demiHumans[8].unevility = new Array();
demiHumans[8].unevility[0] = new Object();
demiHumans[8].unevility[0].nombre = "Geo Energy";
demiHumans[8].unevility[0].info = "Sus atributos aumentan un 10% por cada Geo Block en el mapa.";
demiHumans[8].unevility[0].requiere = "Inicial";
demiHumans[8].unevility[1] = new Object();
demiHumans[8].unevility[1].nombre = "Geo Dimension";
demiHumans[8].unevility[1].info = "No recibe daño cuando un Geo Panel cambia o es destruido.";
demiHumans[8].unevility[1].requiere = "Mystic Nv 25";
demiHumans[8].unevility[2] = new Object();
demiHumans[8].unevility[2].nombre = "Geo Absorb";
demiHumans[8].unevility[2].info = "Geo Block falling damage nulled.";
demiHumans[8].unevility[2].requiere = "Hermit Nv 100";
demiHumans[8].unevility[3] = new Object();
demiHumans[8].unevility[3].nombre = "Strange Force";
demiHumans[8].unevility[3].info = "Sus atributos aumentan un 10% por cada Bonus Rank ganado durante la batalla.";
demiHumans[8].unevility[3].requiere = "Geo Master Nv 600";

/*MALE GUNNER*/
/*
Move: 5
Jump: 25
Range: 1
Throw: 4
Counter: 1
Critical: 5%
*/
demiHumans[9] = new Object();
demiHumans[9].nombre = "Gunner";
demiHumans[9].clases = new Array();
demiHumans[9].clases[0] = new Object();
demiHumans[9].clases[0].nombre = "Gunner";
demiHumans[9].clases[0].requiere = 'Thief y Skull Nv 15, y aprobar "Make a Male Gunner"';
demiHumans[9].clases[1] = new Object();
demiHumans[9].clases[1].nombre = "Sniper";
demiHumans[9].clases[1].requiere = "Gunner Nv 20";
demiHumans[9].clases[2] = new Object();
demiHumans[9].clases[2].nombre = "Outlaw";
demiHumans[9].clases[2].requiere = "Sniper Nv 50";
demiHumans[9].clases[3] = new Object();
demiHumans[9].clases[3].nombre = "Hitman";
demiHumans[9].clases[3].requiere = "Outlaw Nv 100";
demiHumans[9].clases[4] = new Object();
demiHumans[9].clases[4].nombre = "Bullseye";
demiHumans[9].clases[4].requiere = "Hitman Nv 200";
demiHumans[9].clases[5] = new Object();
demiHumans[9].clases[5].nombre = "Desperado";
demiHumans[9].clases[5].requiere = "Bullseye Nv 400";
demiHumans[9].skills = new Array();
demiHumans[9].skills[0] = "Skill 1";
demiHumans[9].skills[1] = "Skill 2";
demiHumans[9].skills[2] = "Skill 3";
demiHumans[9].unskills = new Array();
demiHumans[9].unskills[0] = new Object();
demiHumans[9].unskills[0].nombre = "";
demiHumans[9].unskills[0].poder = "";
demiHumans[9].unskills[0].atrib = "";
demiHumans[9].unskills[0].elem = "";
demiHumans[9].unskills[0].alto = "";
demiHumans[9].unskills[0].rango = "";
demiHumans[9].unskills[0].info = "";
demiHumans[9].unskills[1] = new Object();
demiHumans[9].unskills[1].nombre = "";
demiHumans[9].unskills[1].poder = "";
demiHumans[9].unskills[1].atrib = "";
demiHumans[9].unskills[1].elem = "";
demiHumans[9].unskills[1].alto = "";
demiHumans[9].unskills[1].rango = "";
demiHumans[9].unskills[1].info = "";
demiHumans[9].evility = new Array();
demiHumans[9].evility[0] = "Evility 1";
demiHumans[9].evility[1] = "Evility 2";
demiHumans[9].evility[2] = "Evility 3";
demiHumans[9].unevility = new Array();
demiHumans[9].unevility[0] = new Object();
demiHumans[9].unevility[0].nombre = "Marking";
demiHumans[9].unevility[0].info = "Durante un Combo, el siguiente aliado en atacar tiene 100% posibilidades de Golpe Critico";
demiHumans[9].unevility[0].requiere = "Inicial";
demiHumans[9].unevility[1] = new Object();
demiHumans[9].unevility[1].nombre = "Assist";
demiHumans[9].unevility[1].info = "Durante un Combo, el siguiente aliado en atacar tiene 100% de Acierto";
demiHumans[9].unevility[1].requiere = "Sniper Nv 25";
demiHumans[9].unevility[2] = new Object();
demiHumans[9].unevility[2].nombre = "Second Attack";
demiHumans[9].unevility[2].info = "Aumenta el daño hecho durante un Combo en un 50%";
demiHumans[9].unevility[2].requiere = "Hitman Nv 120";
demiHumans[9].unevility[3] = new Object();
demiHumans[9].unevility[3].nombre = "Gun Trick";
demiHumans[9].unevility[3].info = "30% del HIT base es añadido a la SPD cuando su arma es una Pistola.";
demiHumans[9].unevility[3].requiere = "Desperado Nv 600";

/*FEMALE GUNNER*/
/*
Move: 5
Jump: 25
Range: 1
Throw: 4
Counter: 1
Critical: 5%
*/
demiHumans[10] = new Object();
demiHumans[10].nombre = "Gunslinger";
demiHumans[10].clases = new Array();
demiHumans[10].clases[0] = new Object();
demiHumans[10].clases[0].nombre = "Gunslinger";
demiHumans[10].clases[0].requiere = 'Thief y Mage Nv 15, y aprobar "Make a Female Gunner"';
demiHumans[10].clases[1] = new Object();
demiHumans[10].clases[1].nombre = "Bounty Hunter";
demiHumans[10].clases[1].requiere = "Gunslinger Nv 20";
demiHumans[10].clases[2] = new Object();
demiHumans[10].clases[2].nombre = "Trigger Happy";
demiHumans[10].clases[2].requiere = "Bounty Hunter Nv 50";
demiHumans[10].clases[3] = new Object();
demiHumans[10].clases[3].nombre = "Ready Revolver";
demiHumans[10].clases[3].requiere = "Trigger Happy Nv 100";
demiHumans[10].clases[4] = new Object();
demiHumans[10].clases[4].nombre = "Shooting Star";
demiHumans[10].clases[4].requiere = "Ready Revolver Nv 200";
demiHumans[10].clases[5] = new Object();
demiHumans[10].clases[5].nombre = "Fortune Venus";
demiHumans[10].clases[5].requiere = "Shooting Star Nv 400";
demiHumans[10].skills = new Array();
demiHumans[10].skills[0] = "Skill 1";
demiHumans[10].skills[1] = "Skill 2";
demiHumans[10].skills[2] = "Skill 3";
demiHumans[10].unskills = new Array();
demiHumans[10].unskills[0] = new Object();
demiHumans[10].unskills[0].nombre = "";
demiHumans[10].unskills[0].poder = "";
demiHumans[10].unskills[0].atrib = "";
demiHumans[10].unskills[0].elem = "";
demiHumans[10].unskills[0].alto = "";
demiHumans[10].unskills[0].rango = "";
demiHumans[10].unskills[0].info = "";
demiHumans[10].unskills[1] = new Object();
demiHumans[10].unskills[1].nombre = "";
demiHumans[10].unskills[1].poder = "";
demiHumans[10].unskills[1].atrib = "";
demiHumans[10].unskills[1].elem = "";
demiHumans[10].unskills[1].alto = "";
demiHumans[10].unskills[1].rango = "";
demiHumans[10].unskills[1].info = "";
demiHumans[10].evility = new Array();
demiHumans[10].evility[0] = "Evility 1";
demiHumans[10].evility[1] = "Evility 2";
demiHumans[10].evility[2] = "Evility 3";
demiHumans[10].unevility = new Array();
demiHumans[10].unevility[0] = new Object();
demiHumans[10].unevility[0].nombre = "Big Chance";
demiHumans[10].unevility[0].info = "La barra de Bonus Rank aumenta en un 50% si este personaje es parte de un Combo.";
demiHumans[10].unevility[0].requiere = "Inicial";
demiHumans[10].unevility[1] = new Object();
demiHumans[10].unevility[1].nombre = "Gold Finger";
demiHumans[10].unevility[1].info = "Los enemigos que elimina con un Golpe Letal dan 100% mas de HL.";
demiHumans[10].unevility[1].requiere = "Bounty Hunter";
demiHumans[10].unevility[2] = new Object();
demiHumans[10].unevility[2].nombre = "Treasure Hunt";
demiHumans[10].unevility[2].info = "Los enemigos que elimina con un Golpe Letal tienen 30% posibilidades de convertirse en un Cofre.";
demiHumans[10].unevility[2].requiere = "Ready Revolver Nv 120";
demiHumans[10].unevility[3] = new Object();
demiHumans[10].unevility[3].nombre = "Long Shot";
demiHumans[10].unevility[3].info = "Su Rango aumenta en 1 panel cuando su arma es una Pistola.";
demiHumans[10].unevility[3].requiere = "Fortune Venus Nv 600";

/*HEAVY KNIGHT*/
/*
Move: 3
Jump: 15
Range: 1
Throw: 6
Counter: 2
Critical: 5%
*/
demiHumans[11] = new Object();
demiHumans[11].nombre = "Heavy_Knight";
demiHumans[11].clases = new Array();
demiHumans[11].clases[0] = new Object();
demiHumans[11].clases[0].nombre = "Heavy Knight";
demiHumans[11].clases[0].requiere = 'Male Fighter y Male Brawler Nv 15, y aprobar "Make a Heavy Knight"';
demiHumans[11].clases[1] = new Object();
demiHumans[11].clases[1].nombre = "Iron Knight";
demiHumans[11].clases[1].requiere = "Heavy Knight Nv 20";
demiHumans[11].clases[2] = new Object();
demiHumans[11].clases[2].nombre = "Steel Knight";
demiHumans[11].clases[2].requiere = "Iron Knight Nv 50";
demiHumans[11].clases[3] = new Object();
demiHumans[11].clases[3].nombre = "Mythril Knight";
demiHumans[11].clases[3].requiere = "Steel Knight Nv 100";
demiHumans[11].clases[4] = new Object();
demiHumans[11].clases[4].nombre = "Adamant Knight";
demiHumans[11].clases[4].requiere = "Mythril Knight Nv 200";
demiHumans[11].clases[5] = new Object();
demiHumans[11].clases[5].nombre = "Aegis Knight";
demiHumans[11].clases[5].requiere = "Adamant Knight Nv 400";
demiHumans[11].skills = new Array();
demiHumans[11].skills[0] = "Skill 1";
demiHumans[11].skills[1] = "Skill 2";
demiHumans[11].skills[2] = "Skill 3";
demiHumans[11].unskills = new Array();
demiHumans[11].unskills[0] = new Object();
demiHumans[11].unskills[0].nombre = "";
demiHumans[11].unskills[0].poder = "";
demiHumans[11].unskills[0].atrib = "";
demiHumans[11].unskills[0].elem = "";
demiHumans[11].unskills[0].alto = "";
demiHumans[11].unskills[0].rango = "";
demiHumans[11].unskills[0].info = "";
demiHumans[11].unskills[1] = new Object();
demiHumans[11].unskills[1].nombre = "";
demiHumans[11].unskills[1].poder = "";
demiHumans[11].unskills[1].atrib = "";
demiHumans[11].unskills[1].elem = "";
demiHumans[11].unskills[1].alto = "";
demiHumans[11].unskills[1].rango = "";
demiHumans[11].unskills[1].info = "";
demiHumans[11].evility = new Array();
demiHumans[11].evility[0] = "Evility 1";
demiHumans[11].evility[1] = "Evility 2";
demiHumans[11].evility[2] = "Evility 3";
demiHumans[11].unevility = new Array();
demiHumans[11].unevility[0] = new Object();
demiHumans[11].unevility[0].nombre = "Aegis";
demiHumans[11].unevility[0].info = "Reduce en 30% el daño cuando es atacado por el frente.";
demiHumans[11].unevility[0].requiere = "Inicial";
demiHumans[11].unevility[1] = new Object();
demiHumans[11].unevility[1].nombre = "Last Fortress";
demiHumans[11].unevility[1].info = "Su DEF y RES aumentan en un 25% cuando su HP esta bajo el 25%";
demiHumans[11].unevility[1].requiere = "Iron Knight Nv 25";
demiHumans[11].unevility[2] = new Object();
demiHumans[11].unevility[2].nombre = "Advance Guard";
demiHumans[11].unevility[2].info = "El daño que reciba cuando esta Defendiendo se reduce en un 80%.";
demiHumans[11].unevility[2].requiere = "Mythril Knight Nv 120";
demiHumans[11].unevility[3] = new Object();
demiHumans[11].unevility[3].nombre = "Spear Defense";
demiHumans[11].unevility[3].info = "30% de su ATK base se agrega a su DEF cuando su arma es una Lanza.";
demiHumans[11].unevility[3].requiere = "Aegis Knight Nv 600";

/*FEMALE NINJA
/*
Move: 5
Jump: 35
Range: 1
Throw: 4
Counter: 1
Critical: 5%
*/
demiHumans[12] = new Object();
demiHumans[12].nombre = "Kunoichi";
demiHumans[12].clases = new Array();
demiHumans[12].clases[0] = new Object();
demiHumans[12].clases[0].nombre = "Hanakage";
demiHumans[12].clases[0].requiere = 'Female Brawler y Mage Nv 30, y aprobar "Make a Female Ninja"';
demiHumans[12].clases[1] = new Object();
demiHumans[12].clases[1].nombre = "Yukikage";
demiHumans[12].clases[1].requiere = "Hanakage Nv 35";
demiHumans[12].clases[2] = new Object();
demiHumans[12].clases[2].nombre = "Hoshikage";
demiHumans[12].clases[2].requiere = "Yukikage Nv 80";
demiHumans[12].clases[3] = new Object();
demiHumans[12].clases[3].nombre = "Tsukikage";
demiHumans[12].clases[3].requiere = "Hoshikage Nv 160";
demiHumans[12].clases[4] = new Object();
demiHumans[12].clases[4].nombre = "Sorakage";
demiHumans[12].clases[4].requiere = "Tsukikage Nv 320";
demiHumans[12].clases[5] = new Object();
demiHumans[12].clases[5].nombre = "Master Kunoichi";
demiHumans[12].clases[5].requiere = "Sorakage Nv 640";
demiHumans[12].skills = new Array();
demiHumans[12].skills[0] = "Skill 1";
demiHumans[12].skills[1] = "Skill 2";
demiHumans[12].skills[2] = "Skill 3";
demiHumans[12].unskills = new Array();
demiHumans[12].unskills[0] = new Object();
demiHumans[12].unskills[0].nombre = "";
demiHumans[12].unskills[0].poder = "";
demiHumans[12].unskills[0].atrib = "";
demiHumans[12].unskills[0].elem = "";
demiHumans[12].unskills[0].alto = "";
demiHumans[12].unskills[0].rango = "";
demiHumans[12].unskills[0].info = "";
demiHumans[12].unskills[1] = new Object();
demiHumans[12].unskills[1].nombre = "";
demiHumans[12].unskills[1].poder = "";
demiHumans[12].unskills[1].atrib = "";
demiHumans[12].unskills[1].elem = "";
demiHumans[12].unskills[1].alto = "";
demiHumans[12].unskills[1].rango = "";
demiHumans[12].unskills[1].info = "";
demiHumans[12].evility = new Array();
demiHumans[12].evility[0] = "Evility 1";
demiHumans[12].evility[1] = "Evility 2";
demiHumans[12].evility[2] = "Evility 3";
demiHumans[12].unevility = new Array();
demiHumans[12].unevility[0] = new Object();
demiHumans[12].unevility[0].nombre = "Flame Haze";
demiHumans[12].unevility[0].info = "Tiene 50% posibilidades de evadir ataques que no son cuerpo a cuerpo.";
demiHumans[12].unevility[0].requiere = "Inicial";
demiHumans[12].unevility[1] = new Object();
demiHumans[12].unevility[1].nombre = "Purgatory";
demiHumans[12].unevility[1].info = "Aumenta el daño de sus Golpes Criticos en un 50%.";
demiHumans[12].unevility[1].requiere = "Yukikage Nv 30";
demiHumans[12].unevility[2] = new Object();
demiHumans[12].unevility[2].nombre = "Assassination";
demiHumans[12].unevility[2].info = "Sus ataques por la espalda siempre son Golpes Criticos.";
demiHumans[12].unevility[2].requiere = "Tsukikage Nv 150";
demiHumans[12].unevility[3] = new Object();
demiHumans[12].unevility[3].nombre = "Blade Dance";
demiHumans[12].unevility[3].info = "30% de su ATK base es añadido a su SPD cuando su arma es una Espada.";
demiHumans[12].unevility[3].requiere = "Master Kunoichi Nv 800";

/*MAGE*/
/*
Move: 3
Jump: 15
Range: 1
Throw: 3
Counter: 0
Critical: 5%
*/
demiHumans[13] = new Object();
demiHumans[13].nombre = "Mage";
demiHumans[13].clases = new Array();
demiHumans[13].clases[0] = new Object();
demiHumans[13].clases[0].nombre = "Red Mage";
demiHumans[13].clases[0].requiere = 'Inicial';
demiHumans[13].clases[1] = new Object();
demiHumans[13].clases[1].nombre = "Green Mage";
demiHumans[13].clases[1].requiere = "Inicial";
demiHumans[13].clases[2] = new Object();
demiHumans[13].clases[2].nombre = "Blue Mage";
demiHumans[13].clases[2].requiere = "Inicial";
demiHumans[13].clases[3] = new Object();
demiHumans[13].clases[3].nombre = "Star Mage";
demiHumans[13].clases[3].requiere = "Red Mage, Blue Mage o Green Mage Nv 50";
demiHumans[13].clases[4] = new Object();
demiHumans[13].clases[4].nombre = "Prism Mage";
demiHumans[13].clases[4].requiere = "Star Mage Nv 150";
demiHumans[13].clases[5] = new Object();
demiHumans[13].clases[5].nombre = "Galaxy Mage";
demiHumans[13].clases[5].requiere = "Prism Mage Nv 450";
demiHumans[13].skills = new Array();
demiHumans[13].skills[0] = "Skill 1";
demiHumans[13].skills[1] = "Skill 2";
demiHumans[13].skills[2] = "Skill 3";
demiHumans[13].unskills = new Array();
demiHumans[13].unskills[0] = new Object();
demiHumans[13].unskills[0].nombre = "Energy Potion";
demiHumans[13].unskills[0].poder = "---";
demiHumans[13].unskills[0].atrib = "---";
demiHumans[13].unskills[0].elem = "---";
demiHumans[13].unskills[0].alto = "Depende del Nv de Skill.";
demiHumans[13].unskills[0].rango = "Depende del Nv de Skill.";
demiHumans[13].unskills[0].info = "El o los personajes objetivos recuperan X% de SP al final de cada turno suyo durante 3 turnos.";
demiHumans[13].unskills[1] = new Object();
demiHumans[13].unskills[1].nombre = "Elemental Burst";
demiHumans[13].unskills[1].poder = "[ variable ]";
demiHumans[13].unskills[1].atrib = "???";
demiHumans[13].unskills[1].elem = "???";
demiHumans[13].unskills[1].alto = "???";
demiHumans[13].unskills[1].rango = "3lineX5";
demiHumans[13].unskills[1].info = "Consume todo el SP restante del personaje y hace un daño igual al doble del SP consumido de esta forma. Esta habilidad no puede ser mejorada.";
demiHumans[13].evility = new Array();
demiHumans[13].evility[0] = "Evility 1";
demiHumans[13].evility[1] = "Evility 2";
demiHumans[13].evility[2] = "Evility 3";
demiHumans[13].unevility = new Array();
demiHumans[13].unevility[0] = new Object();
demiHumans[13].unevility[0].nombre = "Magic Moderation";
demiHumans[13].unevility[0].info = "Sus Skills usan 50% menos de SP.";
demiHumans[13].unevility[0].requiere = "Inicial";
demiHumans[13].unevility[1] = new Object();
demiHumans[13].unevility[1].nombre = "Concentrate";
demiHumans[13].unevility[1].info = "30% de su INT base es añadida a su HIT cuando su arma es un Baston.";
demiHumans[13].unevility[1].requiere = "Star Mage Nv 50";
demiHumans[13].unevility[2] = new Object();
demiHumans[13].unevility[2].nombre = "Enlarge";
demiHumans[13].unevility[2].info = "El rango de sus Skills tipo Magia aumenta en 1 panel.";
demiHumans[13].unevility[2].requiere = "Galaxy Mage Nv 500";

/*MAGIC KNIGHT*/
/*
Move: 4
Jump: 20
Range: 1
Throw: 4
Counter: 1
Critical: 5%
*/
demiHumans[14] = new Object();
demiHumans[14].nombre = "Magic_Knight";
demiHumans[14].clases = new Array();
demiHumans[14].clases[0] = new Object();
demiHumans[14].clases[0].nombre = "Magic Knight";
demiHumans[14].clases[0].requiere = 'Male/Female Fighter y Skull/Mage Nv 25, y aprobar "Make a Magic Knight".';
demiHumans[14].clases[1] = new Object();
demiHumans[14].clases[1].nombre = "Dark Knight";
demiHumans[14].clases[1].requiere = "Magic Knight Nv 30";
demiHumans[14].clases[2] = new Object();
demiHumans[14].clases[2].nombre = "Rune Knight";
demiHumans[14].clases[2].requiere = "Dark Knight Nv 70";
demiHumans[14].clases[3] = new Object();
demiHumans[14].clases[3].nombre = "Mega Knight";
demiHumans[14].clases[3].requiere = "Rune Knight Nv 140";
demiHumans[14].clases[4] = new Object();
demiHumans[14].clases[4].nombre = "Force Knight";
demiHumans[14].clases[4].requiere = "Mega Knight Nv 280";
demiHumans[14].clases[5] = new Object();
demiHumans[14].clases[5].nombre = "Space Knight";
demiHumans[14].clases[5].requiere = "Force Knight Nv 560";
demiHumans[14].skills = new Array();
demiHumans[14].skills[0] = "Skill 1";
demiHumans[14].skills[1] = "Skill 2";
demiHumans[14].skills[2] = "Skill 3";
demiHumans[14].unskills = new Array();
demiHumans[14].unskills[0] = new Object();
demiHumans[14].unskills[0].nombre = "";
demiHumans[14].unskills[0].poder = "";
demiHumans[14].unskills[0].atrib = "";
demiHumans[14].unskills[0].elem = "";
demiHumans[14].unskills[0].alto = "";
demiHumans[14].unskills[0].rango = "";
demiHumans[14].unskills[0].info = "";
demiHumans[14].unskills[1] = new Object();
demiHumans[14].unskills[1].nombre = "";
demiHumans[14].unskills[1].poder = "";
demiHumans[14].unskills[1].atrib = "";
demiHumans[14].unskills[1].elem = "";
demiHumans[14].unskills[1].alto = "";
demiHumans[14].unskills[1].rango = "";
demiHumans[14].unskills[1].info = "";
demiHumans[14].evility = new Array();
demiHumans[14].evility[0] = "Evility 1";
demiHumans[14].evility[1] = "Evility 2";
demiHumans[14].evility[2] = "Evility 3";
demiHumans[14].unevility = new Array();
demiHumans[14].unevility[0] = new Object();
demiHumans[14].unevility[0].nombre = "Spirit Benediction";
demiHumans[14].unevility[0].info = "Aumenta el Daño Magico Elemental de sus ataques en un 20%.";
demiHumans[14].unevility[0].requiere = "Inicial";
demiHumans[14].unevility[1] = new Object();
demiHumans[14].unevility[1].nombre = "Elemental Force";
demiHumans[14].unevility[1].info = "Los bonos positivos de Resistencia Elemental son sumados al Daño Magico Elemental (segun cada elemento).";
demiHumans[14].unevility[1].requiere = "Dark Knight Nv 30";
demiHumans[14].unevility[2] = new Object();
demiHumans[14].unevility[2].nombre = "Echo";
demiHumans[14].unevility[2].info = "Sus Skills tienen 25% de posibilidades de ejecutarse 2 veces seguidas.";
demiHumans[14].unevility[2].requiere = "Mega Knight Nv 150";
demiHumans[14].unevility[3] = new Object();
demiHumans[14].unevility[3].nombre = "Sword Force";
demiHumans[14].unevility[3].info = "30% de su ATK base es añadido a su INT cuando su arma es una Espada.";
demiHumans[14].unevility[3].requiere = "Space Knight Nv 800";

/*MAJIN*/
/*
Move: 3
Jump: 20
Range: 1
Throw: 1
Counter: 2
Critical: 5%
*/
demiHumans[15] = new Object();
demiHumans[15].nombre = "Majin";
demiHumans[15].clases = new Array();
demiHumans[15].clases[0] = new Object();
demiHumans[15].clases[0].nombre = "Chaos Soldier";
demiHumans[15].clases[0].requiere = 'Terminar el juego con el final Bueno o Super Heroe, luego comenzar desde 0, completar el 1er mapa y aprobar "Make a Majin"';
demiHumans[15].clases[1] = new Object();
demiHumans[15].clases[1].nombre = "Death Avenger";
demiHumans[15].clases[1].requiere = "Chaos Soldier Nv 80";
demiHumans[15].clases[2] = new Object();
demiHumans[15].clases[2].nombre = "Violater";
demiHumans[15].clases[2].requiere = "Death Avenger Nv 180";
demiHumans[15].clases[3] = new Object();
demiHumans[15].clases[3].nombre = "Last Battalion";
demiHumans[15].clases[3].requiere = "Violater Nv 360";
demiHumans[15].clases[4] = new Object();
demiHumans[15].clases[4].nombre = "Death Army";
demiHumans[15].clases[4].requiere = "Last Battalion Nv 720";
demiHumans[15].clases[5] = new Object();
demiHumans[15].clases[5].nombre = "Omega Sentinel";
demiHumans[15].clases[5].requiere = "Death Army 1440";
demiHumans[15].skills = new Array();
demiHumans[15].skills[0] = "Skill 1";
demiHumans[15].skills[1] = "Skill 2";
demiHumans[15].skills[2] = "Skill 3";
demiHumans[15].unskills = new Array();
demiHumans[15].unskills[0] = new Object();
demiHumans[15].unskills[0].nombre = "";
demiHumans[15].unskills[0].poder = "";
demiHumans[15].unskills[0].atrib = "";
demiHumans[15].unskills[0].elem = "";
demiHumans[15].unskills[0].alto = "";
demiHumans[15].unskills[0].rango = "";
demiHumans[15].unskills[0].info = "";
demiHumans[15].unskills[1] = new Object();
demiHumans[15].unskills[1].nombre = "";
demiHumans[15].unskills[1].poder = "";
demiHumans[15].unskills[1].atrib = "";
demiHumans[15].unskills[1].elem = "";
demiHumans[15].unskills[1].alto = "";
demiHumans[15].unskills[1].rango = "";
demiHumans[15].unskills[1].info = "";
demiHumans[15].evility = new Array();
demiHumans[15].evility[0] = "Evility 1";
demiHumans[15].evility[1] = "Evility 2";
demiHumans[15].evility[2] = "Evility 3";
demiHumans[15].unevility = new Array();
demiHumans[15].unevility[0] = new Object();
demiHumans[15].unevility[0].nombre = "One Man Army";
demiHumans[15].unevility[0].info = "Cuando este personaje es la ultima unidad aliada en el mapa, sus Atributos aumentan en un 100%.";
demiHumans[15].unevility[0].requiere = "Inicial";
demiHumans[15].unevility[1] = new Object();
demiHumans[15].unevility[1].nombre = "Revival";
demiHumans[15].unevility[1].info = "Cuando su HP esta bajo el 25%, recupera todo su HP al final del turno.";
demiHumans[15].unevility[1].requiere = "Death Avenger Nv 100";
demiHumans[15].unevility[2] = new Object();
demiHumans[15].unevility[2].nombre = "Vortex";
demiHumans[15].unevility[2].info = "Todas sus Aptitudes bajan a 10%, pero todos sus atributos aumentan en un 100%.";
demiHumans[15].unevility[2].requiere = "Last Battalion Nv 500";
demiHumans[15].unevility[3] = new Object();
demiHumans[15].unevility[3].nombre = "Violence";
demiHumans[15].unevility[3].info = "Sus atributos aumentan en un 50%, pero al eliminar a un enemigo, solo recibe el 50% de la Experiencia.";
demiHumans[15].unevility[3].requiere = "Omega Sentinel Nv 2500";

/*MALE BRAWLER*/
/*
Move: 5
Jump: 25
Range: 1
Throw: 5
Counter: 3
Critical: 5%
*/
demiHumans[16] = new Object();
demiHumans[16].nombre = "Male_Brawler";
demiHumans[16].clases = new Array();
demiHumans[16].clases[0] = new Object();
demiHumans[16].clases[0].nombre = "Fury Fatalist";
demiHumans[16].clases[0].requiere = 'Inicial.';
demiHumans[16].clases[1] = new Object();
demiHumans[16].clases[1].nombre = "Fight Artist";
demiHumans[16].clases[1].requiere = "Fury Fatalist Nv 15";
demiHumans[16].clases[2] = new Object();
demiHumans[16].clases[2].nombre = "Champ of Fighters";
demiHumans[16].clases[2].requiere = "Fight Artist Nv 40";
demiHumans[16].clases[3] = new Object();
demiHumans[16].clases[3].nombre = "Viper Fighter";
demiHumans[16].clases[3].requiere = "Champ of Fighters Nv 80";
demiHumans[16].clases[4] = new Object();
demiHumans[16].clases[4].nombre = "Lethal Combatant";
demiHumans[16].clases[4].requiere = "Viper Fighter Nv 160";
demiHumans[16].clases[5] = new Object();
demiHumans[16].clases[5].nombre = "Boulevard Fighter";
demiHumans[16].clases[5].requiere = "Lethal Combatant Nv 360";
demiHumans[16].skills = new Array();
demiHumans[16].skills[0] = "Skill 1";
demiHumans[16].skills[1] = "Skill 2";
demiHumans[16].skills[2] = "Skill 3";
demiHumans[16].unskills = new Array();
demiHumans[16].unskills[0] = new Object();
demiHumans[16].unskills[0].nombre = "";
demiHumans[16].unskills[0].poder = "";
demiHumans[16].unskills[0].atrib = "";
demiHumans[16].unskills[0].elem = "";
demiHumans[16].unskills[0].alto = "";
demiHumans[16].unskills[0].rango = "";
demiHumans[16].unskills[0].info = "";
demiHumans[16].unskills[1] = new Object();
demiHumans[16].unskills[1].nombre = "";
demiHumans[16].unskills[1].poder = "";
demiHumans[16].unskills[1].atrib = "";
demiHumans[16].unskills[1].elem = "";
demiHumans[16].unskills[1].alto = "";
demiHumans[16].unskills[1].rango = "";
demiHumans[16].unskills[1].info = "";
demiHumans[16].evility = new Array();
demiHumans[16].evility[0] = "Evility 1";
demiHumans[16].evility[1] = "Evility 2";
demiHumans[16].evility[2] = "Evility 3";
demiHumans[16].unevility = new Array();
demiHumans[16].unevility[0] = new Object();
demiHumans[16].unevility[0].nombre = "Fury";
demiHumans[16].unevility[0].info = "Durante el turno, aumenta el daño de sus ContraGolpes en un 25% por cada ContraGolpe hecho.";
demiHumans[16].unevility[0].requiere = "Inicial";
demiHumans[16].unevility[1] = new Object();
demiHumans[16].unevility[1].nombre = "Retribution";
demiHumans[16].unevility[1].info = "Aumenta en 2 su numero de ContraGolpes.";
demiHumans[16].unevility[1].requiere = "Fight Artist Nv 20";
demiHumans[16].unevility[2] = new Object();
demiHumans[16].unevility[2].nombre = "Counter Power";
demiHumans[16].unevility[2].info = "Aumenta en un 50% el daño hecho por sus ContraGolpes.";
demiHumans[16].unevility[2].requiere = "Viper Fighter Nv 100";
demiHumans[16].unevility[3] = new Object();
demiHumans[16].unevility[3].nombre = "Chasing Fang";
demiHumans[16].unevility[3].info = "Cuando su HP es menor al 25%, tiene 50% posibilidades de repetir sus ataques.";
demiHumans[16].unevility[3].requiere = "Boulevard Fighter Nv 500";

/*MALE FIGHTER*/
/*
Move: 4
Jump: 20
Range: 1
Throw: 5
Counter: 2
Critical: 5%
*/
demiHumans[17] = new Object();
demiHumans[17].nombre = "Male_Fighter";
demiHumans[17].clases = new Array();
demiHumans[17].clases[0] = new Object();
demiHumans[17].clases[0].nombre = "Fighter";
demiHumans[17].clases[0].requiere = 'Inicial';
demiHumans[17].clases[1] = new Object();
demiHumans[17].clases[1].nombre = "Warrior";
demiHumans[17].clases[1].requiere = "Fighter Nv 15";
demiHumans[17].clases[2] = new Object();
demiHumans[17].clases[2].nombre = "Destroyer";
demiHumans[17].clases[2].requiere = "Warrior Nv 40";
demiHumans[17].clases[3] = new Object();
demiHumans[17].clases[3].nombre = "Gladiator";
demiHumans[17].clases[3].requiere = "Destroyer Nv 80";
demiHumans[17].clases[4] = new Object();
demiHumans[17].clases[4].nombre = "Warlord";
demiHumans[17].clases[4].requiere = "Gladiator Nv 160";
demiHumans[17].clases[5] = new Object();
demiHumans[17].clases[5].nombre = "Battle Master";
demiHumans[17].clases[5].requiere = "Warlord Nv 360";
demiHumans[17].skills = new Array();
demiHumans[17].skills[0] = "Skill 1";
demiHumans[17].skills[1] = "Skill 2";
demiHumans[17].skills[2] = "Skill 3";
demiHumans[17].unskills = new Array();
demiHumans[17].unskills[0] = new Object();
demiHumans[17].unskills[0].nombre = "";
demiHumans[17].unskills[0].poder = "";
demiHumans[17].unskills[0].atrib = "";
demiHumans[17].unskills[0].elem = "";
demiHumans[17].unskills[0].alto = "";
demiHumans[17].unskills[0].rango = "";
demiHumans[17].unskills[0].info = "";
demiHumans[17].unskills[1] = new Object();
demiHumans[17].unskills[1].nombre = "";
demiHumans[17].unskills[1].poder = "";
demiHumans[17].unskills[1].atrib = "";
demiHumans[17].unskills[1].elem = "";
demiHumans[17].unskills[1].alto = "";
demiHumans[17].unskills[1].rango = "";
demiHumans[17].unskills[1].info = "";
demiHumans[17].evility = new Array();
demiHumans[17].evility[0] = "Evility 1";
demiHumans[17].evility[1] = "Evility 2";
demiHumans[17].evility[2] = "Evility 3";
demiHumans[17].unevility = new Array();
demiHumans[17].unevility[0] = new Object();
demiHumans[17].unevility[0].nombre = "Wild Cry";
demiHumans[17].unevility[0].info = "Aumenta sus atributos por cada unidad enemiga adyacente.";
demiHumans[17].unevility[0].requiere = "Inicial";
demiHumans[17].unevility[1] = new Object();
demiHumans[17].unevility[1].nombre = "Armor Mastery";
demiHumans[17].unevility[1].info = "Los bonos otorgados por equipos que aumentan el HP y la DEF aumenta en un 30%.";
demiHumans[17].unevility[1].requiere = "Warrior Nv 20";
demiHumans[17].unevility[2] = new Object();
demiHumans[17].unevility[2].nombre = "Energy Slash";
demiHumans[17].unevility[2].info = "10% de su SP restante se añade al ATK cuando su arma es una Espada.";
demiHumans[17].unevility[2].requiere = "Gladiator Nv 100";
demiHumans[17].unevility[3] = new Object();
demiHumans[17].unevility[3].nombre = "Heavy Smash";
demiHumans[17].unevility[3].info = "30% de la DEF base es añadida a su ATK cuando su arma es una Hacha.";
demiHumans[17].unevility[3].requiere = "Battle Master Nv 500";

/*MALE HEALER*/
/*
Move: 4
Jump: 20
Range: 1
Throw: 4
Counter: 0
Critical: 5%
*/
demiHumans[18] = new Object();
demiHumans[18].nombre = "Male_Healer";
demiHumans[18].clases = new Array();
demiHumans[18].clases[0] = new Object();
demiHumans[18].clases[0].nombre = "Heretic";
demiHumans[18].clases[0].requiere = 'Inicial';
demiHumans[18].clases[1] = new Object();
demiHumans[18].clases[1].nombre = "Zealot";
demiHumans[18].clases[1].requiere = "Heretic Nv 15";
demiHumans[18].clases[2] = new Object();
demiHumans[18].clases[2].nombre = "Martyr";
demiHumans[18].clases[2].requiere = "Zealot Nv 40";
demiHumans[18].clases[3] = new Object();
demiHumans[18].clases[3].nombre = "Pilgrim";
demiHumans[18].clases[3].requiere = "Martyr Nv 80";
demiHumans[18].clases[4] = new Object();
demiHumans[18].clases[4].nombre = "Farvashi";
demiHumans[18].clases[4].requiere = "Pilgrim Nv 160";
demiHumans[18].clases[5] = new Object();
demiHumans[18].clases[5].nombre = "Anti-Messiah";
demiHumans[18].clases[5].requiere = "Farvashi Nv 360";
demiHumans[18].skills = new Array();
demiHumans[18].skills[0] = "Skill 1";
demiHumans[18].skills[1] = "Skill 2";
demiHumans[18].skills[2] = "Skill 3";
demiHumans[18].unskills = new Array();
demiHumans[18].unskills[0] = new Object();
demiHumans[18].unskills[0].nombre = "";
demiHumans[18].unskills[0].poder = "";
demiHumans[18].unskills[0].atrib = "";
demiHumans[18].unskills[0].elem = "";
demiHumans[18].unskills[0].alto = "";
demiHumans[18].unskills[0].rango = "";
demiHumans[18].unskills[0].info = "";
demiHumans[18].unskills[1] = new Object();
demiHumans[18].unskills[1].nombre = "";
demiHumans[18].unskills[1].poder = "";
demiHumans[18].unskills[1].atrib = "";
demiHumans[18].unskills[1].elem = "";
demiHumans[18].unskills[1].alto = "";
demiHumans[18].unskills[1].rango = "";
demiHumans[18].unskills[1].info = "";
demiHumans[18].evility = new Array();
demiHumans[18].evility[0] = "Evility 1";
demiHumans[18].evility[1] = "Evility 2";
demiHumans[18].evility[2] = "Evility 3";
demiHumans[18].unevility = new Array();
demiHumans[18].unevility[0] = new Object();
demiHumans[18].unevility[0].nombre = "Spirit's Blessing";
demiHumans[18].unevility[0].info = "Reduce en un 50% el daño elemental que reciban las unidades aliadas adyacentes a este personaje.";
demiHumans[18].unevility[0].requiere = "Inicial";
demiHumans[18].unevility[1] = new Object();
demiHumans[18].unevility[1].nombre = "Respect";
demiHumans[18].unevility[1].info = "La distancia ganada aumenta en 2 cuando es parte de un comite (?).";
demiHumans[18].unevility[1].requiere = "Zealot Nv 20";
demiHumans[18].unevility[2] = new Object();
demiHumans[18].unevility[2].nombre = "Dark Grace";
demiHumans[18].unevility[2].info = "El efecto de su Skills tipo Maldicion aumenta en un 50%.";
demiHumans[18].unevility[2].requiere = "Pilgrim Nv 100";
demiHumans[18].unevility[3] = new Object();
demiHumans[18].unevility[3].nombre = "Death's Heal";
demiHumans[18].unevility[3].info = "Todos sus Atributos se redicen en un 50%, pero sus Skills tipo Heal hacen daño en vez de curar.";
demiHumans[18].unevility[3].requiere = "Anti-Messiah Nv 500";

/*MALE SAMURAI*/
/*
Move: 4
Jump: 20
Range: 1
Throw: 4
Counter: 2
Critical: 5%
*/
demiHumans[19] = new Object();
demiHumans[19].nombre = "Male_Samurai";
demiHumans[19].clases = new Array();
demiHumans[19].clases[0] = new Object();
demiHumans[19].clases[0].nombre = "Ronin";
demiHumans[19].clases[0].requiere = 'Male Fighter y Male Archer Nv 35, y aprobar "Make a Male Samurai"';
demiHumans[19].clases[1] = new Object();
demiHumans[19].clases[1].nombre = "Samurai";
demiHumans[19].clases[1].requiere = "Ronin Nv 40";
demiHumans[19].clases[2] = new Object();
demiHumans[19].clases[2].nombre = "Bujin";
demiHumans[19].clases[2].requiere = "Samurai Nv 90";
demiHumans[19].clases[3] = new Object();
demiHumans[19].clases[3].nombre = "Kengou";
demiHumans[19].clases[3].requiere = "Bujin Nv 180";
demiHumans[19].clases[4] = new Object();
demiHumans[19].clases[4].nombre = "Kensei";
demiHumans[19].clases[4].requiere = "Kengou Nv 360";
demiHumans[19].clases[5] = new Object();
demiHumans[19].clases[5].nombre = "Sword Master";
demiHumans[19].clases[5].requiere = "Kensei Nv 720";
demiHumans[19].skills = new Array();
demiHumans[19].skills[0] = "Skill 1";
demiHumans[19].skills[1] = "Skill 2";
demiHumans[19].skills[2] = "Skill 3";
demiHumans[19].unskills = new Array();
demiHumans[19].unskills[0] = new Object();
demiHumans[19].unskills[0].nombre = "";
demiHumans[19].unskills[0].poder = "";
demiHumans[19].unskills[0].atrib = "";
demiHumans[19].unskills[0].elem = "";
demiHumans[19].unskills[0].alto = "";
demiHumans[19].unskills[0].rango = "";
demiHumans[19].unskills[0].info = "";
demiHumans[19].unskills[1] = new Object();
demiHumans[19].unskills[1].nombre = "";
demiHumans[19].unskills[1].poder = "";
demiHumans[19].unskills[1].atrib = "";
demiHumans[19].unskills[1].elem = "";
demiHumans[19].unskills[1].alto = "";
demiHumans[19].unskills[1].rango = "";
demiHumans[19].unskills[1].info = "";
demiHumans[19].evility = new Array();
demiHumans[19].evility[0] = "Evility 1";
demiHumans[19].evility[1] = "Evility 2";
demiHumans[19].evility[2] = "Evility 3";
demiHumans[19].unevility = new Array();
demiHumans[19].unevility[0] = new Object();
demiHumans[19].unevility[0].nombre = "Chivalry";
demiHumans[19].unevility[0].info = "El daño de sus ataques aumenta en un 30% cuando ataca al enemigo frente a frente.";
demiHumans[19].unevility[0].requiere = "Inicial";
demiHumans[19].unevility[1] = new Object();
demiHumans[19].unevility[1].nombre = "Armor Pierce";
demiHumans[19].unevility[1].info = "25% de su ATK total se convierte en el daño fijo hecho por su Ataque Normal.";
demiHumans[19].unevility[1].requiere = "Samurai Nv 30";
demiHumans[19].unevility[2] = new Object();
demiHumans[19].unevility[2].nombre = "Kamikaze";
demiHumans[19].unevility[2].info = "El daño de sus Golpes Criticos aumentan en un 100% cuando su HP esta bajo el 25%.";
demiHumans[19].unevility[2].requiere = "Kengou Nv 150";
demiHumans[19].unevility[3] = new Object();
demiHumans[19].unevility[3].nombre = "Divine Killer";
demiHumans[19].unevility[3].info = "El daño hecho a los enemigos tipo Humano aumenta en un 25%.";
demiHumans[19].unevility[3].requiere = "Sword Master Nv 800";

/*MASKED HERO*/
/*
Move: 6
Jump: 35
Range: 1
Throw: 3
Counter: 2
Critical: 5%
*/
demiHumans[20] = new Object();
demiHumans[20].nombre = "Masked_Hero";
demiHumans[20].clases = new Array();
demiHumans[20].clases[0] = new Object();
demiHumans[20].clases[0].nombre = "Masked Hero";
demiHumans[20].clases[0].requiere = 'Thief y Gunner o Gunslinger Nv 45, y aprobar "Make a Masked Hero"';
demiHumans[20].clases[1] = new Object();
demiHumans[20].clases[1].nombre = "Vizard Hero";
demiHumans[20].clases[1].requiere = "Masked Hero Nv 50";
demiHumans[20].clases[2] = new Object();
demiHumans[20].clases[2].nombre = "Morphing Hero";
demiHumans[20].clases[2].requiere = "Vizard Hero Nv 110";
demiHumans[20].clases[3] = new Object();
demiHumans[20].clases[3].nombre = "Fixed-Up Hero";
demiHumans[20].clases[3].requiere = "Morphing Hero Nv 220";
demiHumans[20].clases[4] = new Object();
demiHumans[20].clases[4].nombre = "Galaxy Hero";
demiHumans[20].clases[4].requiere = "Fixed-Up Hero Nv 440";
demiHumans[20].clases[5] = new Object();
demiHumans[20].clases[5].nombre = "Super Dimensionman";
demiHumans[20].clases[5].requiere = "Galaxy Hero Nv 880";
demiHumans[20].skills = new Array();
demiHumans[20].skills[0] = "Skill 1";
demiHumans[20].skills[1] = "Skill 2";
demiHumans[20].skills[2] = "Skill 3";
demiHumans[20].unskills = new Array();
demiHumans[20].unskills[0] = new Object();
demiHumans[20].unskills[0].nombre = "";
demiHumans[20].unskills[0].poder = "";
demiHumans[20].unskills[0].atrib = "";
demiHumans[20].unskills[0].elem = "";
demiHumans[20].unskills[0].alto = "";
demiHumans[20].unskills[0].rango = "";
demiHumans[20].unskills[0].info = "";
demiHumans[20].unskills[1] = new Object();
demiHumans[20].unskills[1].nombre = "";
demiHumans[20].unskills[1].poder = "";
demiHumans[20].unskills[1].atrib = "";
demiHumans[20].unskills[1].elem = "";
demiHumans[20].unskills[1].alto = "";
demiHumans[20].unskills[1].rango = "";
demiHumans[20].unskills[1].info = "";
demiHumans[20].evility = new Array();
demiHumans[20].evility[0] = "Evility 1";
demiHumans[20].evility[1] = "Evility 2";
demiHumans[20].evility[2] = "Evility 3";
demiHumans[20].unevility = new Array();
demiHumans[20].unevility[0] = new Object();
demiHumans[20].unevility[0].nombre = "Trick Move";
demiHumans[20].unevility[0].info = "Su Evasión aumenta en 10% hasta su proximo turno por cada panel que se mueva.";
demiHumans[20].unevility[0].requiere = "Inicial";
demiHumans[20].unevility[1] = new Object();
demiHumans[20].unevility[1].nombre = "Power Survival";
demiHumans[20].unevility[1].info = "Si el Nv del enemigo es menor al de este personaje, aumenta el daño de sus ataques en un 50%.";
demiHumans[20].unevility[1].requiere = "Vizard Hero Nv 30";
demiHumans[20].unevility[2] = new Object();
demiHumans[20].unevility[2].nombre = "Superiority";
demiHumans[20].unevility[2].info = "Si un enemigo de menor Nv que este personaje lo ataca, el daño recibido se reduce en un 50%.";
demiHumans[20].unevility[2].requiere = "Fixed-Up Hero Nv 150";
demiHumans[20].unevility[3] = new Object();
demiHumans[20].unevility[3].nombre = "Chicken Heart";
demiHumans[20].unevility[3].info = "Reduce todos sus atributos en un 30%, pero aumenta sus Movimientos en 3.";
demiHumans[20].unevility[3].requiere = "Super Dimensionman Nv 800";

/*MALE NINJA*/
/*
Move: 5
Jump: 35
Range: 1
Throw: 4
Counter: 1
Critical: 5%
*/
demiHumans[21] = new Object();
demiHumans[21].nombre = "Ninja";
demiHumans[21].clases = new Array();
demiHumans[21].clases[0] = new Object();
demiHumans[21].clases[0].nombre = "Genin";
demiHumans[21].clases[0].requiere = 'Male Brawler y Skull en Nv 30, y aprobar "Make a Male Ninja"';
demiHumans[21].clases[1] = new Object();
demiHumans[21].clases[1].nombre = "Chunin";
demiHumans[21].clases[1].requiere = "Genin Nv 35";
demiHumans[21].clases[2] = new Object();
demiHumans[21].clases[2].nombre = "Jounin";
demiHumans[21].clases[2].requiere = "Chunin Nv 80";
demiHumans[21].clases[3] = new Object();
demiHumans[21].clases[3].nombre = "Oniwaban";
demiHumans[21].clases[3].requiere = "Jounin Nv 160";
demiHumans[21].clases[4] = new Object();
demiHumans[21].clases[4].nombre = "Touryou";
demiHumans[21].clases[4].requiere = "Oniwaban Nv 320";
demiHumans[21].clases[5] = new Object();
demiHumans[21].clases[5].nombre = "Shadow Master";
demiHumans[21].clases[5].requiere = "Touryou Nv 640";
demiHumans[21].skills = new Array();
demiHumans[21].skills[0] = "Skill 1";
demiHumans[21].skills[1] = "Skill 2";
demiHumans[21].skills[2] = "Skill 3";
demiHumans[21].unskills = new Array();
demiHumans[21].unskills[0] = new Object();
demiHumans[21].unskills[0].nombre = "";
demiHumans[21].unskills[0].poder = "";
demiHumans[21].unskills[0].atrib = "";
demiHumans[21].unskills[0].elem = "";
demiHumans[21].unskills[0].alto = "";
demiHumans[21].unskills[0].rango = "";
demiHumans[21].unskills[0].info = "";
demiHumans[21].unskills[1] = new Object();
demiHumans[21].unskills[1].nombre = "";
demiHumans[21].unskills[1].poder = "";
demiHumans[21].unskills[1].atrib = "";
demiHumans[21].unskills[1].elem = "";
demiHumans[21].unskills[1].alto = "";
demiHumans[21].unskills[1].rango = "";
demiHumans[21].unskills[1].info = "";
demiHumans[21].evility = new Array();
demiHumans[21].evility[0] = "Evility 1";
demiHumans[21].evility[1] = "Evility 2";
demiHumans[21].evility[2] = "Evility 3";
demiHumans[21].unevility = new Array();
demiHumans[21].unevility[0] = new Object();
demiHumans[21].unevility[0].nombre = "Misty Haze";
demiHumans[21].unevility[0].info = "Este personaje tiene 50% posibilidades de Evadir ataques desde el frente suyo.";
demiHumans[21].unevility[0].requiere = "Inicial";
demiHumans[21].unevility[1] = new Object();
demiHumans[21].unevility[1].nombre = "Sharp Eye";
demiHumans[21].unevility[1].info = "Aumenta las posibilidades de Golpe Critico en un 20%";
demiHumans[21].unevility[1].requiere = "Chunin Nv 30";
demiHumans[21].unevility[2] = new Object();
demiHumans[21].unevility[2].nombre = "Vision Blur";
demiHumans[21].unevility[2].info = "Anula el daño cuando es NICKED";
demiHumans[21].unevility[2].requiere = "Oniwaban Nv 150";
demiHumans[21].unevility[3] = new Object();
demiHumans[21].unevility[3].nombre = "Killing Hand";
demiHumans[21].unevility[3].info = "30% de su SPD base se añade a su HIT cuando su arma son unos Puños.";
demiHumans[21].unevility[3].requiere = "Shadow Master Nv 800";

/*MALE ARCHER*/
/*
Move: 5
Jump: 25
Range: 1
Throw: 4
Counter: 1
Critical: 5%
*/
demiHumans[22] = new Object();
demiHumans[22].nombre = "Ranger";
demiHumans[22].clases = new Array();
demiHumans[22].clases[0] = new Object();
demiHumans[22].clases[0].nombre = "Ranger";
demiHumans[22].clases[0].requiere = 'Male Fighter y Male Healer en Nv 15, y aprobar "Make a Male Archer".';
demiHumans[22].clases[1] = new Object();
demiHumans[22].clases[1].nombre = "Chaser";
demiHumans[22].clases[1].requiere = "Ranger Nv 20";
demiHumans[22].clases[2] = new Object();
demiHumans[22].clases[2].nombre = "Strider";
demiHumans[22].clases[2].requiere = "Chaser Nv 50";
demiHumans[22].clases[3] = new Object();
demiHumans[22].clases[3].nombre = "Hawkeye";
demiHumans[22].clases[3].requiere = "Strider Nv 100";
demiHumans[22].clases[4] = new Object();
demiHumans[22].clases[4].nombre = "Enforcer";
demiHumans[22].clases[4].requiere = "Hawkeye Nv 200";
demiHumans[22].clases[5] = new Object();
demiHumans[22].clases[5].nombre = "Sagittarius";
demiHumans[22].clases[5].requiere = "Enforcer Nv 400";
demiHumans[22].skills = new Array();
demiHumans[22].skills[0] = "Skill 1";
demiHumans[22].skills[1] = "Skill 2";
demiHumans[22].skills[2] = "Skill 3";
demiHumans[22].unskills = new Array();
demiHumans[22].unskills[0] = new Object();
demiHumans[22].unskills[0].nombre = "";
demiHumans[22].unskills[0].poder = "";
demiHumans[22].unskills[0].atrib = "";
demiHumans[22].unskills[0].elem = "";
demiHumans[22].unskills[0].alto = "";
demiHumans[22].unskills[0].rango = "";
demiHumans[22].unskills[0].info = "";
demiHumans[22].unskills[1] = new Object();
demiHumans[22].unskills[1].nombre = "";
demiHumans[22].unskills[1].poder = "";
demiHumans[22].unskills[1].atrib = "";
demiHumans[22].unskills[1].elem = "";
demiHumans[22].unskills[1].alto = "";
demiHumans[22].unskills[1].rango = "";
demiHumans[22].unskills[1].info = "";
demiHumans[22].evility = new Array();
demiHumans[22].evility[0] = "Evility 1";
demiHumans[22].evility[1] = "Evility 2";
demiHumans[22].evility[2] = "Evility 3";
demiHumans[22].unevility = new Array();
demiHumans[22].unevility[0] = new Object();
demiHumans[22].unevility[0].nombre = "Positional Energy";
demiHumans[22].unevility[0].info = "El daño de sus ataques aumenta en un 30% cuando el objetivo esta en una menor altura.";
demiHumans[22].unevility[0].requiere = "Inicial";
demiHumans[22].unevility[1] = new Object();
demiHumans[22].unevility[1].nombre = "Hunter's Range";
demiHumans[22].unevility[1].info = "Su HIT aumenta un 30% si no hay enemigos adyacentes a este personaje.";
demiHumans[22].unevility[1].requiere = "Chaser Nv 25";
demiHumans[22].unevility[2] = new Object();
demiHumans[22].unevility[2].nombre = "Girl Hunt";
demiHumans[22].unevility[2].info = "Aumenta en un 20% el daño hecho a enemigos Hembra.";
demiHumans[22].unevility[2].requiere = "Hawkeye Nv 120";
demiHumans[22].unevility[3] = new Object();
demiHumans[22].unevility[3].nombre = "Bow Focus";
demiHumans[22].unevility[3].info = "30% de su HIT base es añadido a su ATK cuando su arma es un Arco.";
demiHumans[22].unevility[3].requiere = "Sagittarius Nv 600";

/*SHAMAN*/
/*
Move: 4
Jump: 20
Range: 1
Throw: 4
Counter: 1
Critical: 5%
*/
demiHumans[23] = new Object();
demiHumans[23].nombre = "Shaman";
demiHumans[23].clases = new Array();
demiHumans[23].clases[0] = new Object();
demiHumans[23].clases[0].nombre = "Shaman";
demiHumans[23].clases[0].requiere = 'Geomancer y Skull o Mage en Nv 25, y aprobar "Make a Sorceror"';
demiHumans[23].clases[1] = new Object();
demiHumans[23].clases[1].nombre = "Witch Doctor";
demiHumans[23].clases[1].requiere = "Shaman Nv 30";
demiHumans[23].clases[2] = new Object();
demiHumans[23].clases[2].nombre = "Necromancer";
demiHumans[23].clases[2].requiere = "Witch Doctor Nv 70";
demiHumans[23].clases[3] = new Object();
demiHumans[23].clases[3].nombre = "Dark Elder";
demiHumans[23].clases[3].requiere = "Necromancer Nv 140";
demiHumans[23].clases[4] = new Object();
demiHumans[23].clases[4].nombre = "Purgatory Oracle";
demiHumans[23].clases[4].requiere = "Dark Elder Nv 280";
demiHumans[23].clases[5] = new Object();
demiHumans[23].clases[5].nombre = "Soul Invoker";
demiHumans[23].clases[5].requiere = "Purgatory Oracle Nv 560";
demiHumans[23].skills = new Array();
demiHumans[23].skills[0] = "Skill 1";
demiHumans[23].skills[1] = "Skill 2";
demiHumans[23].skills[2] = "Skill 3";
demiHumans[23].unskills = new Array();
demiHumans[23].unskills[0] = new Object();
demiHumans[23].unskills[0].nombre = "";
demiHumans[23].unskills[0].poder = "";
demiHumans[23].unskills[0].atrib = "";
demiHumans[23].unskills[0].elem = "";
demiHumans[23].unskills[0].alto = "";
demiHumans[23].unskills[0].rango = "";
demiHumans[23].unskills[0].info = "";
demiHumans[23].unskills[1] = new Object();
demiHumans[23].unskills[1].nombre = "";
demiHumans[23].unskills[1].poder = "";
demiHumans[23].unskills[1].atrib = "";
demiHumans[23].unskills[1].elem = "";
demiHumans[23].unskills[1].alto = "";
demiHumans[23].unskills[1].rango = "";
demiHumans[23].unskills[1].info = "";
demiHumans[23].evility = new Array();
demiHumans[23].evility[0] = "Evility 1";
demiHumans[23].evility[1] = "Evility 2";
demiHumans[23].evility[2] = "Evility 3";
demiHumans[23].unevility = new Array();
demiHumans[23].unevility[0] = new Object();
demiHumans[23].unevility[0].nombre = "Cursed Dance";
demiHumans[23].unevility[0].info = "Reduce todos los Atributos de los enemigos en el mapa en un 5%.";
demiHumans[23].unevility[0].requiere = "Inicial";
demiHumans[23].unevility[1] = new Object();
demiHumans[23].unevility[1].nombre = "Hazard Dance";
demiHumans[23].unevility[1].info = "Las posibilidades de Estados Alterados para los enemigos en el mapa aumenta en un 20%.";
demiHumans[23].unevility[1].requiere = "Witch Doctor Nv 30";
demiHumans[23].unevility[2] = new Object();
demiHumans[23].unevility[2].nombre = "Ominous Dance";
demiHumans[23].unevility[2].info = "La Evasión para los enemigos en el mapa se reduce en un 20%.";
demiHumans[23].unevility[2].requiere = "Dark Elder Nv 150";
demiHumans[23].unevility[3] = new Object();
demiHumans[23].unevility[3].nombre = "Ruin Dance";
demiHumans[23].unevility[3].info = "Las Resistencias Elementales de los enemigos en el mapa se reduce en un 25%.";
demiHumans[23].unevility[3].requiere = "Soul Invoker Nv 800";

/*SKULL*/
/*
Move: 3
Jump: 15
Range: 1
Throw: 3
Counter: 0
Critical: 5%
*/
demiHumans[24] = new Object();
demiHumans[24].nombre = "Skull";
demiHumans[24].clases = new Array();
demiHumans[24].clases[0] = new Object();
demiHumans[24].clases[0].nombre = "Red Skull";
demiHumans[24].clases[0].requiere = 'Inicial';
demiHumans[24].clases[1] = new Object();
demiHumans[24].clases[1].nombre = "Green Skull";
demiHumans[24].clases[1].requiere = "Inicial";
demiHumans[24].clases[2] = new Object();
demiHumans[24].clases[2].nombre = "Blue Skull";
demiHumans[24].clases[2].requiere = "Inicial";
demiHumans[24].clases[3] = new Object();
demiHumans[24].clases[3].nombre = "Star Skull";
demiHumans[24].clases[3].requiere = "Red, Green o Blue Skull Nv 50";
demiHumans[24].clases[4] = new Object();
demiHumans[24].clases[4].nombre = "Prism Skull";
demiHumans[24].clases[4].requiere = "Star Skull Nv 150";
demiHumans[24].clases[5] = new Object();
demiHumans[24].clases[5].nombre = "Galaxy Skull";
demiHumans[24].clases[5].requiere = "Prism Skull Nv 450";
demiHumans[24].skills = new Array();
demiHumans[24].skills[0] = "Fire";
demiHumans[24].skills[1] = "Mega Fire";
demiHumans[24].skills[2] = "Giga Fire";
demiHumans[24].skills[3] = "Omega Fire";
demiHumans[24].skills[4] = "Ice";
demiHumans[24].skills[5] = "Mega Ice";
demiHumans[24].skills[6] = "Giga Ice";
demiHumans[24].skills[7] = "Omega Ice";
demiHumans[24].skills[8] = "Wind";
demiHumans[24].skills[9] = "Mega Wind";
demiHumans[24].skills[10] = "Giga Wind";
demiHumans[24].skills[11] = "Omega Wind";
demiHumans[24].skills[12] = "Star";
demiHumans[24].skills[13] = "Mega Star";
demiHumans[24].skills[14] = "Giga Star";
demiHumans[24].skills[15] = "Omega Star";
demiHumans[24].unskills = new Array();
demiHumans[24].unskills[0] = new Object();
demiHumans[24].unskills[0].nombre = "";
demiHumans[24].unskills[0].poder = "";
demiHumans[24].unskills[0].atrib = "";
demiHumans[24].unskills[0].elem = "";
demiHumans[24].unskills[0].alto = "";
demiHumans[24].unskills[0].rango = "";
demiHumans[24].unskills[0].info = "";
demiHumans[24].unskills[1] = new Object();
demiHumans[24].unskills[1].nombre = "";
demiHumans[24].unskills[1].poder = "";
demiHumans[24].unskills[1].atrib = "";
demiHumans[24].unskills[1].elem = "";
demiHumans[24].unskills[1].alto = "";
demiHumans[24].unskills[1].rango = "";
demiHumans[24].unskills[1].info = "";
demiHumans[24].evility = new Array();
demiHumans[24].evility[0] = "Evility 1";
demiHumans[24].evility[1] = "Evility 2";
demiHumans[24].evility[2] = "Evility 3";
demiHumans[24].unevility = new Array();
demiHumans[24].unevility[0] = new Object();
demiHumans[24].unevility[0].nombre = "Magic Bundle";
demiHumans[24].unevility[0].info = "El daño de sus Skills aumenta en un 30%, pero estas consumen 50% mas de SP.";
demiHumans[24].unevility[0].requiere = "Inicial";
demiHumans[24].unevility[1] = new Object();
demiHumans[24].unevility[1].nombre = "Illusion";
demiHumans[24].unevility[1].info = "30% de su INT base se añade a su SPD cuando su arma es un Baston.";
demiHumans[24].unevility[1].requiere = "Star Skull Nv 50";
demiHumans[24].unevility[2] = new Object();
demiHumans[24].unevility[2].nombre = "Magic Conversion";
demiHumans[24].unevility[2].info = "10% de su SP restante es añadida a su INT.";
demiHumans[24].unevility[2].requiere = "Galaxy Skull Nv 500";

/*THIEF*/
/*
Move: 6
Jump: 25
Range: 1
Throw: 4
Counter: 1
Critical: 5%
*/
demiHumans[25] = new Object();
demiHumans[25].nombre = "Thief";
demiHumans[25].clases = new Array();
demiHumans[25].clases[0] = new Object();
demiHumans[25].clases[0].nombre = "Thief";
demiHumans[25].clases[0].requiere = 'Inicial';
demiHumans[25].clases[1] = new Object();
demiHumans[25].clases[1].nombre = "Rogue";
demiHumans[25].clases[1].requiere = "Thief Nv 15";
demiHumans[25].clases[2] = new Object();
demiHumans[25].clases[2].nombre = "Scout";
demiHumans[25].clases[2].requiere = "Rogue Nv 40";
demiHumans[25].clases[3] = new Object();
demiHumans[25].clases[3].nombre = "Bandit";
demiHumans[25].clases[3].requiere = "Scout Nv 80";
demiHumans[25].clases[4] = new Object();
demiHumans[25].clases[4].nombre = "Trickster";
demiHumans[25].clases[4].requiere = "Bandit Nv 160";
demiHumans[25].clases[5] = new Object();
demiHumans[25].clases[5].nombre = "Master Thief";
demiHumans[25].clases[5].requiere = "Trickster Nv 360";
demiHumans[25].skills = new Array();
demiHumans[25].skills[0] = "Skill 1";
demiHumans[25].skills[1] = "Skill 2";
demiHumans[25].skills[2] = "Skill 3";
demiHumans[25].unskills = new Array();
demiHumans[25].unskills[0] = new Object();
demiHumans[25].unskills[0].nombre = "";
demiHumans[25].unskills[0].poder = "";
demiHumans[25].unskills[0].atrib = "";
demiHumans[25].unskills[0].elem = "";
demiHumans[25].unskills[0].alto = "";
demiHumans[25].unskills[0].rango = "";
demiHumans[25].unskills[0].info = "";
demiHumans[25].unskills[1] = new Object();
demiHumans[25].unskills[1].nombre = "";
demiHumans[25].unskills[1].poder = "";
demiHumans[25].unskills[1].atrib = "";
demiHumans[25].unskills[1].elem = "";
demiHumans[25].unskills[1].alto = "";
demiHumans[25].unskills[1].rango = "";
demiHumans[25].unskills[1].info = "";
demiHumans[25].evility = new Array();
demiHumans[25].evility[0] = "Evility 1";
demiHumans[25].evility[1] = "Evility 2";
demiHumans[25].evility[2] = "Evility 3";
demiHumans[25].unevility = new Array();
demiHumans[25].unevility[0] = new Object();
demiHumans[25].unevility[0].nombre = "Thief Skills";
demiHumans[25].unevility[0].info = "Aumenta las posibilidades de robar objetos en un 100%.";
demiHumans[25].unevility[0].requiere = "Inicial";
demiHumans[25].unevility[1] = new Object();
demiHumans[25].unevility[1].nombre = "Evade Danger";
demiHumans[25].unevility[1].info = "Anula el daño recibido por bombas.";
demiHumans[25].unevility[1].requiere = "Rogue Nv 20";
demiHumans[25].unevility[2] = new Object();
demiHumans[25].unevility[2].nombre = "Heart Steal";
demiHumans[25].unevility[2].info = "Permite robar Atributos de los enemigos, ademas de objetos.";
demiHumans[25].unevility[2].requiere = "Bandit Nv 100";
demiHumans[25].unevility[3] = new Object();
demiHumans[25].unevility[3].nombre = "Lucky Finger";
demiHumans[25].unevility[3].info = "Cuando destruye un cofre, aumenta en 1 categoria el premio recibido.";
demiHumans[25].unevility[3].requiere = "Master Thief Nv 500";

/*CELESTIAL HOST*/
/*
*/
demiHumans[26] = new Object();
demiHumans[26].nombre = "Celestial_Host";
demiHumans[26].clases = new Array();
demiHumans[26].clases[0] = new Object();
demiHumans[26].clases[0].nombre = "Angel";
demiHumans[26].clases[0].requiere = 'Derrotar el ataque del Item World Command';
demiHumans[26].clases[1] = new Object();
demiHumans[26].clases[1].nombre = "Angel Cadet";
demiHumans[26].clases[1].requiere = "Angel Nv 30";
demiHumans[26].clases[2] = new Object();
demiHumans[26].clases[2].nombre = "Angel Soldier";
demiHumans[26].clases[2].requiere = "Angel Cadet Nv 70";
demiHumans[26].clases[3] = new Object();
demiHumans[26].clases[3].nombre = "Crusader";
demiHumans[26].clases[3].requiere = "Angel Soldier Nv 140";
demiHumans[26].clases[4] = new Object();
demiHumans[26].clases[4].nombre = "Avenger";
demiHumans[26].clases[4].requiere = "Crusader Nv 280";
demiHumans[26].clases[5] = new Object();
demiHumans[26].clases[5].nombre = "Paladin";
demiHumans[26].clases[5].requiere = "Avenger Nv 560";
demiHumans[26].skills = new Array();
demiHumans[26].skills[0] = "Skill 1";
demiHumans[26].skills[1] = "Skill 2";
demiHumans[26].skills[2] = "Skill 3";
demiHumans[26].unskills = new Array();
demiHumans[26].unskills[0] = new Object();
demiHumans[26].unskills[0].nombre = "";
demiHumans[26].unskills[0].poder = "";
demiHumans[26].unskills[0].atrib = "";
demiHumans[26].unskills[0].elem = "";
demiHumans[26].unskills[0].alto = "";
demiHumans[26].unskills[0].rango = "";
demiHumans[26].unskills[0].info = "";
demiHumans[26].unskills[1] = new Object();
demiHumans[26].unskills[1].nombre = "";
demiHumans[26].unskills[1].poder = "";
demiHumans[26].unskills[1].atrib = "";
demiHumans[26].unskills[1].elem = "";
demiHumans[26].unskills[1].alto = "";
demiHumans[26].unskills[1].rango = "";
demiHumans[26].unskills[1].info = "";
demiHumans[26].evility = new Array();
demiHumans[26].evility[0] = "Evility 1";
demiHumans[26].evility[1] = "Evility 2";
demiHumans[26].evility[2] = "Evility 3";
demiHumans[26].unevility = new Array();
demiHumans[26].unevility[0] = new Object();
demiHumans[26].unevility[0].nombre = "Angel's Protection";
demiHumans[26].unevility[0].info = "Reduce el daño Neutral que reciban los aliados adyacentes en un 50%.";
demiHumans[26].unevility[0].requiere = "Inicial";
demiHumans[26].unevility[1] = new Object();
demiHumans[26].unevility[1].nombre = "Angel's Medication";
demiHumans[26].unevility[1].info = "Al recibir un objeto consumible, este da el mismo efecto a todos los aliados adyacentes.";
demiHumans[26].unevility[1].requiere = "Angel Cadet Nv 30";
demiHumans[26].unevility[2] = new Object();
demiHumans[26].unevility[2].nombre = "Angel's Blessing";
demiHumans[26].unevility[2].info = "Sus Skills tipo Heal adicionalmente curan todos los Estados Alterados de quienes sean objetivos de esas Skills.";
demiHumans[26].unevility[2].requiere = "Crusader Nv 150";
demiHumans[26].unevility[3] = new Object();
demiHumans[26].unevility[3].nombre = "Angel's Flight";
demiHumans[26].unevility[3].info = "Aumenta el efecto de sus Skills tipo Heal en un 10% por cada panel que se mueva durante su turno.";
demiHumans[26].unevility[3].requiere = "Paladin Nv 800";