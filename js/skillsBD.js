

/*----- SKILLS -----*/


var skills = new Array();


/*----- PUÑOS -----*/


skills[0] = new Object();
skills[0].nombre = "Triple Strike";
skills[0].tipo	= "Puños";
skills[0].mana	= "10";
skills[0].poder	= "E";
skills[0].atrib	= "ATK / SPD";
skills[0].elem	= "Neutral";
skills[0].alto	= "12 / 12";
skills[0].rango	= "1push1";
skills[0].info = "Empuja al enemigo 1 espacio hacia atras.";

skills[1] = new Object();
skills[1].nombre = "Phantom Fists";
skills[1].tipo	= "Puños";
skills[1].mana	= "300";
skills[1].poder	= "E";
skills[1].atrib	= "ATK / SPD";
skills[1].elem	= "Neutral";
skills[1].alto	= "12/12";
skills[1].rango	= "2push1";
skills[1].info = "Empuja al enemigo 1 espacio hacia atras.";

skills[2] = new Object();
skills[2].nombre = "Blazing Palm";
skills[2].tipo	= "Puños";
skills[2].mana	= "600";
skills[2].poder	= "F";
skills[2].atrib	= "ATK / SPD";
skills[2].elem	= "Viento";
skills[2].alto	= "12/18";
skills[2].rango	= "1front3";
skills[2].info = "Daña a los 3 enemigos en frente, en linea recta.";

skills[3] = new Object();
skills[3].nombre = "Final Arts";
skills[3].tipo	= "Puños";
skills[3].mana	= "1200";
skills[3].poder	= "B";
skills[3].atrib	= "ATK / SPD";
skills[3].elem	= "Neutral";
skills[3].alto	= "18/12";
skills[3].rango	= "1push-2";
skills[3].info = "Empuja al enemigo dejandolo a espaldas del personaje.";

skills[4] = new Object();
skills[4].nombre = "Splitting Shot";
skills[4].tipo	= "Puños";
skills[4].mana	= "2400";
skills[4].poder	= "D";
skills[4].atrib	= "ATK / SPD";
skills[4].elem	= "Neutral";
skills[4].alto	= "12/12";
skills[4].rango	= "1widepush3";
skills[4].info = "Empuja a 3 enemigos (a lo ancho) 1 espacio hacia atras.";

skills[5] = new Object();
skills[5].nombre = "Big Bang";
skills[5].tipo	= "Puños";
skills[5].mana	= "4800";
skills[5].poder	= "D";
skills[5].atrib	= "ATK / SPD";
skills[5].elem	= "";
skills[5].alto	= "48/48";
skills[5].rango	= "2square9";
skills[5].info = "Daña a los 9 enemigos en frente, en un area de 3x3.";

skills[6] = new Object();
skills[6].nombre = "Lion's Roar";
skills[6].tipo	= "Puños";
skills[6].mana	= "???";
skills[6].poder	= "E";
skills[6].atrib	= "ATK / SPD";
skills[6].elem	= "Neutral";
skills[6].alto	= "12/12";
skills[6].rango	= "1squarejump-3";
skills[6].info = "Daña a los 8 enemigos alrededor del personaje, pero necesita el 3er espacio libre a su espalda.";

skills[7] = new Object();
skills[7].nombre = "Rising Dragon";
skills[7].tipo	= "Puños";
skills[7].mana	= "???";
skills[7].poder	= "S";
skills[7].atrib	= "ATK / SPD";
skills[7].elem	= "Neutral";
skills[7].alto	= "12/12";
skills[7].rango	= "risdragon";
skills[7].info = "Daña a 1 enemigo y lo empuja dejandolo a espaldas del personaje, pero necesita que los 2 espacios atrás del personaje esten libres.";


/*----- ESPADAS -----*/


skills[8] = new Object();
skills[8].nombre = "Blade Rush";
skills[8].tipo	= "Espadas";
skills[8].mana	= "10";
skills[8].poder	= "F";
skills[8].atrib	= "ATK";
skills[8].elem	= "Neutral";
skills[8].alto	= "18/18";
skills[8].rango	= "1row3";
skills[8].info = "Daña a los enemigos en los 3 espacios en frente. El 4to espacio debe estar libre.";

skills[9] = new Object();
skills[9].nombre = "Hurricane Slash";
skills[9].tipo	= "Espadas";
skills[9].mana	= "300";
skills[9].poder	= "E";
skills[9].atrib	= "ATK";
skills[9].elem	= "Neutral";
skills[9].alto	= "12/18";
skills[9].rango	= "2front1";
skills[9].info = "Daña a un solo enemigo.";

skills[10] = new Object();
skills[10].nombre = "X-Level Flurry";
skills[10].tipo	 = "Espadas";
skills[10].mana	 = "600";
skills[10].poder = "D";
skills[10].atrib = "ATK";
skills[10].elem	 = "Neutral";
skills[10].alto	 = "18/12";
skills[10].rango = "3front1";
skills[10].info  = "Daña a un solo enemigo.";

skills[11] = new Object();
skills[11].nombre = "Slayer's Descent";
skills[11].tipo	 = "Espadas";
skills[11].mana	 = "1200";
skills[11].poder = "F";
skills[11].atrib = "ATK";
skills[11].elem	 = "Neutral";
skills[11].alto	 = "18/18";
skills[11].rango = "1triangle9";
skills[11].info  = "Daña a 9 enemigos en forma de triangulo en frente.";

skills[12] = new Object();
skills[12].nombre = "Infinite Graves";
skills[12].tipo	 = "Espadas";
skills[12].mana	 = "2400";
skills[12].poder = "A";
skills[12].atrib = "ATK";
skills[12].elem	 = "Neutral";
skills[12].alto	 = "12/12";
skills[12].rango = "1front1";
skills[12].info  = "Daña a un solo enemigo.";

skills[13] = new Object();
skills[13].nombre = "Mach + Slice";
skills[13].tipo	 = "Espadas";
skills[13].mana	 = "4800";
skills[13].poder = "C";
skills[13].atrib = "ATK";
skills[13].elem	 = "Estelar";
skills[13].alto	 = "64/64";
skills[13].rango = "1front5";
skills[13].info  = "Daña a 5 enemigos en frente en linea recta.";

skills[14] = new Object();
skills[14].nombre = "Moon Slash";
skills[14].tipo	 = "Espadas";
skills[14].mana	 = "???";
skills[14].poder = "C";
skills[14].atrib = "ATK";
skills[14].elem	 = "Neutral";
skills[14].alto	 = "12/12";
skills[14].rango = "3wide3";
skills[14].info  = "Daña a 3 enemigos en forma horizontal.";

skills[15] = new Object();
skills[15].nombre = "Dark X Slash";
skills[15].tipo	 = "Espadas";
skills[15].mana	 = "???";
skills[15].poder = "S";
skills[15].atrib = "ATK";
skills[15].elem	 = "Neutral";
skills[15].alto	 = "12/12";
skills[15].rango = "1push1";
skills[15].info  = "Daña a un enemigo, pero necesita 1 espacio libre detras del enemigo.";


/*----- LANZAS -----*/


skills[16] = new Object();
skills[16].nombre = "Impaler Drop";
skills[16].tipo	 = "Lanzas";
skills[16].mana	 = "10";
skills[16].poder = "E";
skills[16].atrib = "ATK";
skills[16].elem	 = "Neutral";
skills[16].alto	 = "36/24";
skills[16].rango = "1move1";
skills[16].info  = "Daña a un enemigo en frente y el personaje se mueve atras de ese enemigo.";

skills[17] = new Object();
skills[17].nombre = "Pole Charge";
skills[17].tipo	 = "Lanzas";
skills[17].mana	 = "300";
skills[17].poder = "E";
skills[17].atrib = "ATK";
skills[17].elem	 = "Neutral";
skills[17].alto	 = "12/18";
skills[17].rango = "1move-3";
skills[17].info  = "Daña a un enemigo en frente y el personaje retrocede 3 espacios.";

skills[18] = new Object();
skills[18].nombre = "Piercing Spears";
skills[18].tipo	 = "Lanzas";
skills[18].mana	 = "600";
skills[18].poder = "F";
skills[18].atrib = "ATK";
skills[18].elem	 = "Neutral";
skills[18].alto	 = "18/18";
skills[18].rango = "1crossmove-3";
skills[18].info  = "Daña a 4 enemigos al rededor del personaje y luego este retrocede 3 espacios.";

skills[19] = new Object();
skills[19].nombre = "Divine Storm";
skills[19].tipo	 = "Lanzas";
skills[19].mana	 = "1200";
skills[19].poder = "E";
skills[19].atrib = "ATK";
skills[19].elem	 = "Neutral";
skills[19].alto	 = "24/24";
skills[19].rango = "1squaremove3";
skills[19].info  = "Daña a los 8 enemigos alrededor del personaje y luego este avanza 3 espacios.";

skills[20] = new Object();
skills[20].nombre = "Golden Slicer";
skills[20].tipo	 = "Lanzas";
skills[20].mana	 = "2400";
skills[20].poder = "A";
skills[20].atrib = "ATK";
skills[20].elem	 = "Neutral";
skills[20].alto	 = "24/36";
skills[20].rango = "4move1";
skills[20].info  = "Daña a un enemigo a 4 espacios y el personaje se mueve atras de ese enemigo.";

skills[21] = new Object();
skills[21].nombre = "Cannon Shower";
skills[21].tipo	 = "Lanzas";
skills[21].mana	 = "4800";
skills[21].poder = "D";
skills[21].atrib = "ATK";
skills[21].elem	 = "Estelar";
skills[21].alto	 = "48/36";
skills[21].rango = "1bigcrossmove-3";
skills[21].info  = "Daña a 8 enemigos en un area de gran cruz alrededor del personaje y luego este retrocede 3 espacios.";

skills[22] = new Object();
skills[22].nombre = "Lightning Spear";
skills[22].tipo	 = "Lanzas";
skills[22].mana	 = "???";
skills[22].poder = "A";
skills[22].atrib = "ATK";
skills[22].elem	 = "Neutral";
skills[22].alto	 = "12/12";
skills[22].rango = "2move1";
skills[22].info  = "Daña a un enemigo, solo si el espacio detras del enemigo esta libre.";

skills[23] = new Object();
skills[23].nombre = "Spear Storm";
skills[23].tipo	 = "Lanzas";
skills[23].mana	 = "???";
skills[23].poder = "D";
skills[23].atrib = "ATK";
skills[23].elem	 = "Fuego";
skills[23].alto	 = "24/24";
skills[23].rango = "1squaremove-3";
skills[23].info  = "Daña a los 8 enemigos alrededor del personaje y luego este retrocede 3 espacios.";


/*----- ARCOS -----*/


skills[24] = new Object();
skills[24].nombre = "Twirly Attack";
skills[24].tipo	 = "Arcos";
skills[24].mana	 = "10";
skills[24].poder = "E";
skills[24].atrib = "ATK / HIT";
skills[24].elem	 = "Hielo";
skills[24].alto	 = "18/24";
skills[24].rango = "3free1";
skills[24].info  = "Daña a un enemigo.";

skills[25] = new Object();
skills[25].nombre = "Attack Punisher";
skills[25].tipo	 = "Arcos";
skills[25].mana	 = "300";
skills[25].poder = "E";
skills[25].atrib = "ATK / HIT";
skills[25].elem	 = "Neutral";
skills[25].alto	 = "24/36";
skills[25].rango = "4free1";
skills[25].info  = "Daña a un enemigo.";

skills[26] = new Object();
skills[26].nombre = "Skewer Piercer";
skills[26].tipo	 = "Arcos";
skills[26].mana	 = "600";
skills[26].poder = "E";
skills[26].atrib = "ATK / HIT";
skills[26].elem	 = "Neutral";
skills[26].alto	 = "18/18";
skills[26].rango = "3free5";
skills[26].info  = "Daña a 5 enemigos en forma de cruz.";

skills[27] = new Object();
skills[27].nombre = "Psycho Mirage";
skills[27].tipo	 = "Arcos";
skills[27].mana	 = "1200";
skills[27].poder = "B";
skills[27].atrib = "ATK / HIT";
skills[27].elem	 = "Hielo";
skills[27].alto	 = "24/48";
skills[27].rango = "4free1";
skills[27].info  = "Daña a un enemigo.";

skills[28] = new Object();
skills[28].nombre = "Illusion Master";
skills[28].tipo	 = "Arcos";
skills[28].mana	 = "2400";
skills[28].poder = "E";
skills[28].atrib = "ATK / HIT";
skills[28].elem	 = "Neutral";
skills[28].alto	 = "12/12";
skills[28].rango = "3cross5";
skills[28].info  = "Daña a 5 enemigos en forma de cruz. No puede ser evadido.";

skills[29] = new Object();
skills[29].nombre = "Omega Comet";
skills[29].tipo	 = "Arcos";
skills[29].mana	 = "4800";
skills[29].poder = "C";
skills[29].atrib = "ATK / HIT";
skills[29].elem	 = "Neutral";
skills[29].alto	 = "36/48";
skills[29].rango = "4free5";
skills[29].info  = "Daña a 5 enemigos en forma de cruz.";

skills[30] = new Object();
skills[30].nombre = "Delta Spirit";
skills[30].tipo	 = "Arcos";
skills[30].mana	 = "???";
skills[30].poder = "A";
skills[30].atrib = "ATK / HIT";
skills[30].elem	 = "Sleep";
skills[30].alto	 = "14/14";
skills[30].rango = "2delta1";
skills[30].info  = "Necesita 2 espacios en forma de triangulo alrededor del enemigo para realizar este ataque.";

skills[31] = new Object();
skills[31].nombre = "Doppleganger";
skills[31].tipo	 = "Arcos";
skills[31].mana	 = "???";
skills[31].poder = "S";
skills[31].atrib = "ATK / HIT";
skills[31].elem	 = "Neutral";
skills[31].alto	 = "15/15";
skills[31].rango = "4free1";
skills[31].info  = "Daña a un enemigo.";


/*----- PISTOLAS -----*/

skills[32] = new Object();
skills[32].nombre = "Gunman Spirit E	 4 (Straight)	None	Spd / Hit	24/24	Hits one enemy";
skills[32].tipo	 = "Pistolas";
skills[32].mana	 = "";
skills[32].poder = "";
skills[32].atrib = "SPD / HIT";
skills[32].elem	 = "";
skills[32].alto	 = "";
skills[32].rango = "";
skills[32].info  = "";

skills[33] = new Object();
skills[33].nombre = "Cocktail Shaker E	5	None	Spd / Hit	24/24	Hits one enemy";
skills[33].tipo	 = "Pistolas";
skills[33].mana	 = "";
skills[33].poder = "";
skills[33].atrib = "SPD / HIT";
skills[33].elem	 = "";
skills[33].alto	 = "";
skills[33].rango = "";
skills[33].info  = "";

skills[34] = new Object();
skills[34].nombre = "Armor Piercing F	4 (Straight)	None	Spd / Hit	24/28	Hits 5 enemies in a cross area";
skills[34].tipo	 = "Pistolas";
skills[34].mana	 = "";
skills[34].poder = "";
skills[34].atrib = "SPD / HIT";
skills[34].elem	 = "";
skills[34].alto	 = "";
skills[34].rango = "";
skills[34].info  = "";

skills[35] = new Object();
skills[35].nombre = "Magical Rain E	 5 (Straight)	None	Spd / Hit	24/24	Hits 5 enemies in a cross area";
skills[35].tipo	 = "Pistolas";
skills[35].mana	 = "";
skills[35].poder = "";
skills[35].atrib = "SPD / HIT";
skills[35].elem	 = "";
skills[35].alto	 = "";
skills[35].rango = "";
skills[35].info  = "";

skills[36] = new Object();
skills[36].nombre = "Megagun Launcher	E	 -	Star	Spd / Hit	32/32	Hits 8 enemies in a hexagon area";
skills[36].tipo	 = "Pistolas";
skills[36].mana	 = "";
skills[36].poder = "";
skills[36].atrib = "SPD / HIT";
skills[36].elem	 = "";
skills[36].alto	 = "";
skills[36].rango = "";
skills[36].info  = "";

skills[37] = new Object();
skills[37].nombre = "Hellfire Catharsis	D	 5 (Straight)	None	Spd / Hit	36/36	Hits 5 enemies in a X Shape area";
skills[37].tipo	 = "Pistolas";
skills[37].mana	 = "";
skills[37].poder = "";
skills[37].atrib = "SPD / HIT";
skills[37].elem	 = "";
skills[37].alto	 = "";
skills[37].rango = "";
skills[37].info  = "";

skills[38] = new Object();
skills[38].nombre = "Shooting Stars	A	 3	None	Spd / Hit	24/24	Hits one enemy";
skills[38].tipo	 = "Pistolas";
skills[38].mana	 = "";
skills[38].poder = "";
skills[38].atrib = "SPD / HIT";
skills[38].elem	 = "";
skills[38].alto	 = "";
skills[38].rango = "";
skills[38].info  = "";

skills[39] = new Object();
skills[39].nombre = "Toten Kreuz	D	 5	None	Spd / Hit	18/18	Hits 5 enemies in a cross area";
skills[39].tipo	 = "Pistolas";
skills[39].mana	 = "";
skills[39].poder = "";
skills[39].atrib = "SPD / HIT";
skills[39].elem	 = "";
skills[39].alto	 = "";
skills[39].rango = "";
skills[39].info  = "";


/*----- HACHAS -----*/


skills[40] = new Object();
skills[40].nombre = "Big Swing Slicer	E	 -	None	ATK	12/12	Hits one enemy";
skills[40].tipo	 = "Hachas";
skills[40].mana	 = "";
skills[40].poder = "";
skills[40].atrib = "ATK";
skills[40].elem	 = "";
skills[40].alto	 = "";
skills[40].rango = "";
skills[40].info  = "";

skills[41] = new Object();
skills[41].nombre = "Seesaw Axe	E	 -	None	ATK	12/14	Hits one enemy";
skills[41].tipo	 = "Hachas";
skills[41].mana	 = "";
skills[41].poder = "";
skills[41].atrib = "ATK";
skills[41].elem	 = "";
skills[41].alto	 = "";
skills[41].rango = "";
skills[41].info  = "";

skills[42] = new Object();
skills[42].nombre = "Boomerang Axe	D	3	None	ATK	12/24	Hits one enemy";
skills[42].tipo	 = "Hachas";
skills[42].mana	 = "";
skills[42].poder = "";
skills[42].atrib = "ATK";
skills[42].elem	 = "";
skills[42].alto	 = "";
skills[42].rango = "";
skills[42].info  = "";

skills[43] = new Object();
skills[43].nombre = "World Rounder	E	 -	None	ATK	18/12	Hits 5 enemies in a cross area in front";
skills[43].tipo	 = "Hachas";
skills[43].mana	 = "";
skills[43].poder = "";
skills[43].atrib = "ATK";
skills[43].elem	 = "";
skills[43].alto	 = "";
skills[43].rango = "";
skills[43].info  = "";

skills[44] = new Object();
skills[44].nombre = "Gravitation Flare	D	 -	Fire	ATK	24/36	Hits 4 enemies arround user";
skills[44].tipo	 = "Hachas";
skills[44].mana	 = "";
skills[44].poder = "";
skills[44].atrib = "ATK";
skills[44].elem	 = "";
skills[44].alto	 = "";
skills[44].rango = "";
skills[44].info  = "";

skills[45] = new Object();
skills[45].nombre = "Illusive Quake	S	 -	None	ATK	18/18	Hits one enemy in front of user";
skills[45].tipo	 = "Hachas";
skills[45].mana	 = "";
skills[45].poder = "";
skills[45].atrib = "ATK";
skills[45].elem	 = "";
skills[45].alto	 = "";
skills[45].rango = "";
skills[45].info  = "";

skills[46] = new Object();
skills[46].nombre = "Violent Storm";
skills[46].tipo	 = "Hachas";
skills[46].mana	 = "";
skills[46].poder = "A";
skills[46].atrib = "ATK";
skills[46].elem	 = "Neutral";
skills[46].alto	 = "12/12";
skills[46].rango = "";
skills[46].info  = "Hits one enemy in front of user. Square behind enemy must be empty";

skills[47] = new Object();
skills[47].nombre = "Calamity Drive";
skills[47].tipo	 = "Hachas";
skills[47].mana	 = "";
skills[47].poder = "S";
skills[47].atrib = "ATK";
skills[47].elem	 = "Estelar";
skills[47].alto	 = "15/15";
skills[47].rango = "";
skills[47].info  = "Hits one enemy in front of user. Star Element";


/*----- MAGIAS DE FUEGO -----*/


skills[48] = new Object();
skills[48].nombre = "Fire";
skills[48].tipo	 = "Magia";
skills[48].mana	 = "";
skills[48].poder = "";
skills[48].atrib = "INT";
skills[48].elem	 = "Fuego";
skills[48].alto	 = "";
skills[48].rango = "Depende del Nv de Skill";
skills[48].info  = "";

skills[49] = new Object();
skills[49].nombre = "Mega Fire";
skills[49].tipo	 = "Magia";
skills[49].mana	 = "";
skills[49].poder = "";
skills[49].atrib = "INT";
skills[49].elem	 = "Fuego";
skills[49].alto	 = "";
skills[49].rango = "Depende del Nv de Skill";
skills[49].info  = "";

skills[50] = new Object();
skills[50].nombre = "Giga Fire";
skills[50].tipo	 = "Magia";
skills[50].mana	 = "";
skills[50].poder = "";
skills[50].atrib = "INT";
skills[50].elem	 = "Fuego";
skills[50].alto	 = "";
skills[50].rango = "Depende del Nv de Skill";
skills[50].info  = "";

skills[51] = new Object();
skills[51].nombre = "Omega Fire";
skills[51].tipo	 = "Magia";
skills[51].mana	 = "";
skills[51].poder = "";
skills[51].atrib = "INT";
skills[51].elem	 = "Fuego";
skills[51].alto	 = "";
skills[51].rango = "Depende del Nv de Skill";
skills[51].info  = "";

skills[52] = new Object();
skills[52].nombre = "Tera Fire";
skills[52].tipo	 = "Magia";
skills[52].mana	 = "";
skills[52].poder = "";
skills[52].atrib = "INT";
skills[52].elem	 = "Fuego";
skills[52].alto	 = "";
skills[52].rango = "Depende del Nv de Skill";
skills[52].info  = "";


/*----- MAGIAS DE VIENTO -----*/


skills[53] = new Object();
skills[53].nombre = "Wind";
skills[53].tipo	 = "Magia";
skills[53].mana	 = "";
skills[53].poder = "";
skills[53].atrib = "INT";
skills[53].elem	 = "Viento";
skills[53].alto	 = "";
skills[53].rango = "Depende del Nv de Skill";
skills[53].info  = "";

skills[54] = new Object();
skills[54].nombre = "Mega Wind";
skills[54].tipo	 = "Magia";
skills[54].mana	 = "";
skills[54].poder = "";
skills[54].atrib = "INT";
skills[54].elem	 = "Viento";
skills[54].alto	 = "";
skills[54].rango = "Depende del Nv de Skill";
skills[54].info  = "";

skills[55] = new Object();
skills[55].nombre = "Giga Wind";
skills[55].tipo	 = "Magia";
skills[55].mana	 = "";
skills[55].poder = "";
skills[55].atrib = "INT";
skills[55].elem	 = "Viento";
skills[55].alto	 = "";
skills[55].rango = "Depende del Nv de Skill";
skills[55].info  = "";

skills[56] = new Object();
skills[56].nombre = "Omega Wind";
skills[56].tipo	 = "Magia";
skills[56].mana	 = "";
skills[56].poder = "";
skills[56].atrib = "INT";
skills[56].elem	 = "Viento";
skills[56].alto	 = "";
skills[56].rango = "Depende del Nv de Skill";
skills[56].info  = "";

skills[57] = new Object();
skills[57].nombre = "Tera Wind";
skills[57].tipo	 = "Magia";
skills[57].mana	 = "";
skills[57].poder = "";
skills[57].atrib = "INT";
skills[57].elem	 = "Viento";
skills[57].alto	 = "";
skills[57].rango = "Depende del Nv de Skill";
skills[57].info  = "";


/*----- MAGIAS DE HIELO -----*/


skills[58] = new Object();
skills[58].nombre = "Ice";
skills[58].tipo	 = "Magia";
skills[58].mana	 = "";
skills[58].poder = "";
skills[58].atrib = "INT";
skills[58].elem	 = "Hielo";
skills[58].alto	 = "";
skills[58].rango = "Depende del Nv de Skill";
skills[58].info  = "";

skills[59] = new Object();
skills[59].nombre = "Mega Ice";
skills[59].tipo	 = "Magia";
skills[59].mana	 = "";
skills[59].poder = "";
skills[59].atrib = "INT";
skills[59].elem	 = "Hielo";
skills[59].alto	 = "";
skills[59].rango = "Depende del Nv de Skill";
skills[59].info  = "";

skills[60] = new Object();
skills[60].nombre = "Giga Ice";
skills[60].tipo	 = "Magia";
skills[60].mana	 = "";
skills[60].poder = "";
skills[60].atrib = "INT";
skills[60].elem	 = "Hielo";
skills[60].alto	 = "";
skills[60].rango = "Depende del Nv de Skill";
skills[60].info  = "";

skills[61] = new Object();
skills[61].nombre = "Omega Ice";
skills[61].tipo	 = "Magia";
skills[61].mana	 = "";
skills[61].poder = "";
skills[61].atrib = "INT";
skills[61].elem	 = "Hielo";
skills[61].alto	 = "";
skills[61].rango = "Depende del Nv de Skill";
skills[61].info  = "";

skills[62] = new Object();
skills[62].nombre = "Tera Ice";
skills[62].tipo	 = "Magia";
skills[62].mana	 = "";
skills[62].poder = "";
skills[62].atrib = "INT";
skills[62].elem	 = "Hielo";
skills[62].alto	 = "";
skills[62].rango = "Depende del Nv de Skill";
skills[62].info  = "";


/*----- MAGIAS ESTELARES -----*/


skills[63] = new Object();
skills[63].nombre = "Star";
skills[63].tipo	 = "Magia";
skills[63].mana	 = "";
skills[63].poder = "";
skills[63].atrib = "INT";
skills[63].elem	 = "Estelar";
skills[63].alto	 = "";
skills[63].rango = "Depende del Nv de Skill";
skills[63].info  = "";

skills[64] = new Object();
skills[64].nombre = "Mega Star";
skills[64].tipo	 = "Magia";
skills[64].mana	 = "";
skills[64].poder = "";
skills[64].atrib = "INT";
skills[64].elem	 = "Estelar";
skills[64].alto	 = "";
skills[64].rango = "Depende del Nv de Skill";
skills[64].info  = "";

skills[65] = new Object();
skills[65].nombre = "Giga Star";
skills[65].tipo	 = "Magia";
skills[65].mana	 = "";
skills[65].poder = "";
skills[65].atrib = "INT";
skills[65].elem	 = "Estelar";
skills[65].alto	 = "";
skills[65].rango = "Depende del Nv de Skill";
skills[65].info  = "";

skills[66] = new Object();
skills[66].nombre = "Omega Star";
skills[66].tipo	 = "Magia";
skills[66].mana	 = "";
skills[66].poder = "";
skills[66].atrib = "INT";
skills[66].elem	 = "Estelar";
skills[66].alto	 = "";
skills[66].rango = "Depende del Nv de Skill";
skills[66].info  = "";

skills[67] = new Object();
skills[67].nombre = "Tera Star";
skills[67].tipo	 = "Magia";
skills[67].mana	 = "";
skills[67].poder = "";
skills[67].atrib = "INT";
skills[67].elem	 = "Estelar";
skills[67].alto	 = "";
skills[67].rango = "Depende del Nv de Skill";
skills[67].info  = "";


/*----- MAGIAS DE CURACION -----*/


skills[68] = new Object();
skills[68].nombre = "Heal";
skills[68].tipo	 = "Magia";
skills[68].mana	 = "";
skills[68].poder = "";
skills[68].atrib = "RES";
skills[68].elem	 = "Neutral";
skills[68].alto	 = "";
skills[68].rango = "Depende del Nv de Skill";
skills[68].info  = "";

skills[69] = new Object();
skills[69].nombre = "Mega Heal";
skills[69].tipo	 = "Magia";
skills[69].mana	 = "";
skills[69].poder = "";
skills[69].atrib = "RES";
skills[69].elem	 = "Neutral";
skills[69].alto	 = "";
skills[69].rango = "Depende del Nv de Skill";
skills[69].info  = "";

skills[70] = new Object();
skills[70].nombre = "Giga Heal";
skills[70].tipo	 = "Magia";
skills[70].mana	 = "";
skills[70].poder = "";
skills[70].atrib = "RES";
skills[70].elem	 = "Neutral";
skills[70].alto	 = "";
skills[70].rango = "Depende del Nv de Skill";
skills[70].info  = "";

skills[71] = new Object();
skills[71].nombre = "Omega Heal";
skills[71].tipo	 = "Magia";
skills[71].mana	 = "";
skills[71].poder = "";
skills[71].atrib = "RES";
skills[71].elem	 = "Neutral";
skills[71].alto	 = "";
skills[71].rango = "Depende del Nv de Skill";
skills[71].info  = "";

skills[72] = new Object();
skills[72].nombre = "Tera Heal";
skills[72].tipo	 = "Magia";
skills[72].mana	 = "";
skills[72].poder = "";
skills[72].atrib = "RES";
skills[72].elem	 = "Neutral";
skills[72].alto	 = "";
skills[72].rango = "Depende del Nv de Skill";
skills[72].info  = "";


/*----- BENDICIONES -----*/


skills[73] = new Object();
skills[73].nombre = "Espoir";
skills[73].tipo	 = "Otros";
skills[73].mana	 = "";
skills[73].poder = "";
skills[73].atrib = "";
skills[73].elem	 = "Neutral";
skills[73].alto	 = "";
skills[73].rango = "Depende del Nv de Skill";
skills[73].info  = "Cura todos los estados anormales de los objetivos.";

skills[74] = new Object();
skills[74].nombre = "Brave Heart";
skills[74].tipo	 = "Otros";
skills[74].mana	 = "";
skills[74].poder = "";
skills[74].atrib = "";
skills[74].elem	 = "Neutral";
skills[74].alto	 = "";
skills[74].rango = "Depende del Nv de Skill";
skills[74].info  = "Aumenta el ATK de los objetivos en un 20% por 3 turnos.";

skills[75] = new Object();
skills[75].nombre = "Magic Boost";
skills[75].tipo	 = "Otros";
skills[75].mana	 = "";
skills[75].poder = "";
skills[75].atrib = "";
skills[75].elem	 = "Neutral";
skills[75].alto	 = "";
skills[75].rango = "Depende del Nv de Skill";
skills[75].info  = "Aumenta la INT de los objetivos en un 20% por 3 turnos.";

skills[76] = new Object();
skills[76].nombre = "Shield";
skills[76].tipo	 = "Otros";
skills[76].mana	 = "";
skills[76].poder = "";
skills[76].atrib = "";
skills[76].elem	 = "Neutral";
skills[76].alto	 = "";
skills[76].rango = "Depende del Nv de Skill";
skills[76].info  = "Aumenta la DEF de los objetivos en un 20% por 3 turnos.";

skills[77] = new Object();
skills[77].nombre = "Magic Shield";
skills[77].tipo	 = "Otros";
skills[77].mana	 = "";
skills[77].poder = "";
skills[77].atrib = "";
skills[77].elem	 = "Neutral";
skills[77].alto	 = "";
skills[77].rango = "Depende del Nv de Skill";
skills[77].info  = "Aumenta la RES de los objetivos en un 20% por 3 turnos.";

skills[78] = new Object();
skills[78].nombre = "Target Look";
skills[78].tipo	 = "Otros";
skills[78].mana	 = "";
skills[78].poder = "";
skills[78].atrib = "";
skills[78].elem	 = "Neutral";
skills[78].alto	 = "";
skills[78].rango = "Depende del Nv de Skill";
skills[78].info  = "Aumenta el HIT de los objetivos en un 20% por 3 turnos.";

skills[79] = new Object();
skills[79].nombre = "Speed Boost";
skills[79].tipo	 = "Otros";
skills[79].mana	 = "";
skills[79].poder = "";
skills[79].atrib = "";
skills[79].elem	 = "Neutral";
skills[79].alto	 = "";
skills[79].rango = "Depende del Nv de Skill";
skills[79].info  = "Aumenta la SPD de los objetivos en un 20% por 3 turnos.";


/*----- MALDICIONES -----*/


skills[80] = new Object();
skills[80].nombre = "Poison";
skills[80].tipo	 = "Otros";
skills[80].mana	 = "";
skills[80].poder = "";
skills[80].atrib = "";
skills[80].elem	 = "Neutral";
skills[80].alto	 = "";
skills[80].rango = "Depende del Nv de Skill";
skills[80].info  = "Tiene 50% de posibilidades de Envenenar a los objetivos.";

skills[81] = new Object();
skills[81].nombre = "Deprave";
skills[81].tipo	 = "Otros";
skills[81].mana	 = "";
skills[81].poder = "";
skills[81].atrib = "";
skills[81].elem	 = "Neutral";
skills[81].alto	 = "";
skills[81].rango = "Depende del Nv de Skill";
skills[81].info  = "Tiene 50% de posibilidades de Depravar a los objetivos.";

skills[82] = new Object();
skills[82].nombre = "Sleep";
skills[82].tipo	 = "Otros";
skills[82].mana	 = "";
skills[82].poder = "";
skills[82].atrib = "";
skills[82].elem	 = "Neutral";
skills[82].alto	 = "";
skills[82].rango = "Depende del Nv de Skill";
skills[82].info  = "Tiene 50% de posibilidades de Dormir a los objetivos.";

skills[83] = new Object();
skills[83].nombre = "Stun";
skills[83].tipo	 = "Otros";
skills[83].mana	 = "";
skills[83].poder = "";
skills[83].atrib = "";
skills[83].elem	 = "Neutral";
skills[83].alto	 = "";
skills[83].rango = "Depende del Nv de Skill";
skills[83].info  = "Tiene 50% de posibilidades de Paralizar a los objetivos.";

skills[84] = new Object();
skills[84].nombre = "Slumber";
skills[84].tipo	 = "Otros";
skills[84].mana	 = "";
skills[84].poder = "";
skills[84].atrib = "";
skills[84].elem	 = "Neutral";
skills[84].alto	 = "";
skills[84].rango = "Depende del Nv de Skill";
skills[84].info  = "Tiene 50% de posibilidades de Amnesiar a los objetivos.";

skills[85] = new Object();
skills[85].nombre = "Low Attack";
skills[85].tipo	 = "Otros";
skills[85].mana	 = "";
skills[85].poder = "";
skills[85].atrib = "";
skills[85].elem	 = "Neutral";
skills[85].alto	 = "";
skills[85].rango = "Depende del Nv de Skill";
skills[85].info  = "Reduce el ATK de los objetivos en un 20% por 3 turnos.";

skills[86] = new Object();
skills[86].nombre = "Low Magic";
skills[86].tipo	 = "Otros";
skills[86].mana	 = "";
skills[86].poder = "";
skills[86].atrib = "";
skills[86].elem	 = "Neutral";
skills[86].alto	 = "";
skills[86].rango = "Depende del Nv de Skill";
skills[86].info  = "Reduce la INT de los objetivos en un 20% por 3 turnos.";

skills[87] = new Object();
skills[87].nombre = "Low Def";
skills[87].tipo	 = "Otros";
skills[87].mana	 = "";
skills[87].poder = "";
skills[87].atrib = "";
skills[87].elem	 = "Neutral";
skills[87].alto	 = "";
skills[87].rango = "Depende del Nv de Skill";
skills[87].info  = "Reduce la DEF de los objetivos en un 20% por 3 turnos.";

skills[88] = new Object();
skills[88].nombre = "Low Res";
skills[88].tipo	 = "Otros";
skills[88].mana	 = "";
skills[88].poder = "";
skills[88].atrib = "";
skills[88].elem	 = "Neutral";
skills[88].alto	 = "";
skills[88].rango = "Depende del Nv de Skill";
skills[88].info  = "Reduce la RES de los objetivos en un 20% por 3 turnos.";

skills[89] = new Object();
skills[89].nombre = "Low Hit";
skills[89].tipo	 = "Otros";
skills[89].mana	 = "";
skills[89].poder = "";
skills[89].atrib = "";
skills[89].elem	 = "Neutral";
skills[89].alto	 = "";
skills[89].rango = "Depende del Nv de Skill";
skills[89].info  = "Reduce el HIT de los objetivos en un 20% por 3 turnos.";

skills[90] = new Object();
skills[90].nombre = "Low Speed";
skills[90].tipo	 = "Otros";
skills[90].mana	 = "";
skills[90].poder = "";
skills[90].atrib = "";
skills[90].elem	 = "Neutral";
skills[90].alto	 = "";
skills[90].rango = "Depende del Nv de Skill";
skills[90].info  = "Reduce la SPD de los objetivos en un 20% por 3 turnos.";