// JavaScript Document


/*----- DEMI-HUMANS -----*/


var demiHumans = new Array();

demiHumans[0] = new Object();
demiHumans[0].nombre = 'Archer';

demiHumans[1] = new Object();
demiHumans[1].nombre = 'Beastmaster';

demiHumans[2] = new Object();
demiHumans[2].nombre = 'Berserker';

demiHumans[3] = new Object();
demiHumans[3].nombre = 'Cheerleader';

demiHumans[4] = new Object();
demiHumans[4].nombre = 'Female_Brawler';
demiHumans[4].clases = new Array();
demiHumans[4].clases[0] = new Object();
demiHumans[4].clases[0].nombre = 'Wind Spinner';
demiHumans[4].clases[0].requiere = 'Inicial';
demiHumans[4].clases[1] = new Object();
demiHumans[4].clases[1].nombre = 'Thunder Fist';
demiHumans[4].clases[1].requiere = 'Wind Spinner Nv 20';
demiHumans[4].clases[2] = new Object();
demiHumans[4].clases[2].nombre = 'Storm Bringer';
demiHumans[4].clases[2].requiere = 'Thunder Fist Nv 40';
demiHumans[4].clases[3] = new Object();
demiHumans[4].clases[3].nombre = 'Sky Faller';
demiHumans[4].clases[3].requiere = 'Storm Bringer Nv 80';
demiHumans[4].clases[4] = new Object();
demiHumans[4].clases[4].nombre = 'Star Warrior';
demiHumans[4].clases[4].requiere = 'Sky Faller Nv 160';
demiHumans[4].clases[5] = new Object();
demiHumans[4].clases[5].nombre = 'God Buster';
demiHumans[4].clases[5].requiere = 'Star Warrior Nv 360';
demiHumans[4].armas = new Array();
demiHumans[4].armas[0] = 'Nudillos Nv 6';
demiHumans[4].armas[1] = 'Espada Nv 4';
demiHumans[4].skills = new Array();
demiHumans[4].skills[0] = 'Triple Fist';
demiHumans[4].skills[1] = 'Phantom Fist';
demiHumans[4].skills[2] = 'Blazing Palm';
demiHumans[4].unSkills = new Array();
demiHumans[4].unSkills[0] = 'Auto-Recovery';
demiHumans[4].unSkills[1] = 'Absolute Combo';
demiHumans[4].evilities = new Array();
demiHumans[4].evilities[0] = 'Heal Gain';
demiHumans[4].unEvilities = new Array();
demiHumans[4].unEvilities[0] = 'Feint';
demiHumans[4].unEvilities[1] = 'Impromptu';
demiHumans[4].unEvilities[2] = 'Counter Chance';
demiHumans[4].unEvilities[3] = 'Hurt Me, Kill You';

demiHumans[5] = new Object();
demiHumans[5].nombre = 'Female_Fighter';

demiHumans[6] = new Object();
demiHumans[6].nombre = 'Female_Healer';

demiHumans[7] = new Object();
demiHumans[7].nombre = 'Female_Samurai';

demiHumans[8] = new Object();
demiHumans[8].nombre = 'Geomancer';

demiHumans[9] = new Object();
demiHumans[9].nombre = 'Gunner';

demiHumans[10] = new Object();
demiHumans[10].nombre = 'Gunslinger';

demiHumans[11] = new Object();
demiHumans[11].nombre = 'Heavy_Knight';

demiHumans[12] = new Object();
demiHumans[12].nombre = 'Kunoichi';

demiHumans[13] = new Object();
demiHumans[13].nombre = 'Mage';

demiHumans[14] = new Object();
demiHumans[14].nombre = 'Magic_Knight';

demiHumans[15] = new Object();
demiHumans[15].nombre = 'Majin';

demiHumans[16] = new Object();
demiHumans[16].nombre = 'Male_Brawler';

demiHumans[17] = new Object();
demiHumans[17].nombre = 'Male_Fighter';

demiHumans[18] = new Object();
demiHumans[18].nombre = 'Male_Healer';

demiHumans[19] = new Object();
demiHumans[19].nombre = 'Male_Samurai';

demiHumans[20] = new Object();
demiHumans[20].nombre = 'Masked_Hero';

demiHumans[21] = new Object();
demiHumans[21].nombre = 'Ninja';

demiHumans[22] = new Object();
demiHumans[22].nombre = 'Ranger';

demiHumans[23] = new Object();
demiHumans[23].nombre = 'Shaman';

demiHumans[24] = new Object();
demiHumans[24].nombre = 'Skull';

demiHumans[25] = new Object();
demiHumans[25].nombre = 'Thief';

demiHumans[26] = new Object();
demiHumans[26].nombre = 'Angel';


/*----- MONSTER -----*/


var monsters = new Array();

monsters[0] = new Object();
monsters[0].nombre = 'Alraune';

monsters[1] = new Object();
monsters[1].nombre = 'Catsaber';

monsters[2] = new Object();
monsters[2].nombre = 'Cockatrice';

monsters[3] = new Object();
monsters[3].nombre = 'Dragon_Zombie';

monsters[4] = new Object();
monsters[4].nombre = 'Eryngi';

monsters[5] = new Object();
monsters[5].nombre = 'Ghost';

monsters[6] = new Object();
monsters[6].nombre = 'Holy_Dragon';

monsters[7] = new Object();
monsters[7].nombre = 'Ifrit';

monsters[8] = new Object();
monsters[8].nombre = 'Marionette';

monsters[9] = new Object();
monsters[9].nombre = 'Mothman';

monsters[10] = new Object();
monsters[10].nombre = 'Mystic_Beast';

monsters[11] = new Object();
monsters[11].nombre = 'Orc';

monsters[12] = new Object();
monsters[12].nombre = 'Prinny';

monsters[13] = new Object();
monsters[13].nombre = 'Reaper';

monsters[14] = new Object();
monsters[14].nombre = 'Rifle_Demon';

monsters[15] = new Object();
monsters[15].nombre = 'Slime';

monsters[16] = new Object();
monsters[16].nombre = 'Succubus';

monsters[17] = new Object();
monsters[17].nombre = 'Warslug';

monsters[18] = new Object();
monsters[18].nombre = 'Wood_Golem';

monsters[19] = new Object();
monsters[19].nombre = 'Zombie';

monsters[20] = new Object();
monsters[20].nombre = 'Nekomata';

monsters[21] = new Object();
monsters[21].nombre = 'Prism_Ranger';

monsters[22] = new Object();
monsters[22].nombre = 'Dragon';