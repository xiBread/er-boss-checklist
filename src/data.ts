import { SvelteSet } from "svelte/reactivity";

export const checked = new SvelteSet();

type BossRegion =
	| "Limgrave"
	| "Weeping Peninsula"
	| "Liurnia of the Lakes"
	| "Caelid"
	| "Dragonbarrow"
	| "Siofra River"
	| "Ainsel River"
	| "Nokron, Eternal City"
	| "Deeproot Depths"
	| "Lake of Rot"
	| "Altus Plateu"
	| "Mt. Gelmir"
	| "Leyndell"
	| "Forbidden Lands"
	| "Mountaintops of the Giants"
	| "Consecrated Snowfield"
	| "The Haligtree"
	| "Mohgwyn Palace"
	| "Crumbling Farum Azula"
	| "Leyndell, Ashen Capital";

export interface BossMetadata {
	name: string;
	legend?: boolean;
	achievement?: boolean;
}

export type Boss = BossMetadata | string;

export const regions: Record<BossRegion, Boss[]> = {
	Limgrave: [
		"Beast of Farum Azula",
		"Bell Bearing Hunter",
		"Black Knife Assassin",
		"Bloodhound Knight Darriwil",
		"Crucible Knight",
		"Deathbird",
		"Demi-Human Chief",
		"Erdtree Burial Watchdog",
		"Flying Dragon Agheel",
		{ name: "Godrick the Grafted", legend: true, achievement: true },
		"Grave Warden Duelist",
		"Guardian Golem",
		"Mad Pumpkin Head",
		{ name: "Margit, the Fell Omen", achievement: true },
		"Night's Cavalry",
		"Patches",
		"Soldier of Godrick",
		"Stonedigger Troll",
		"Tibia Mariner",
		"Tree Sentinel",
		"Ulcerated Tree Spirit",
	],

	"Weeping Peninsula": [
		"Ancient Hero of Zamor",
		"Cemetery Shade",
		"Deathbird",
		"Erdtree Avatar",
		"Erdtree Burial Watchdog",
		{ name: "Leonine Misbegotten", achievement: true },
		"Miranda the Blighted Bloom",
		"Night's Cavalry",
		"Runebear",
		"Scaly Misbegotten",
	],

	"Liurnia of the Lakes": [
		"Adan, Thief of Fire",
		"Onyx Lord (formerly Alabaster Lord)",
		"Alecto, Black Knife Ringleader",
		"Bell Bearing Hunter",
		"Black Knife Assassin",
		"Bloodhound Knight",
		"Bols, Carian Knight",
		"Cemetery Shade",
		"Cleanrot Knight",
		"Crystalian Spear & Crystalian Staff",
		"Crystalian Ringblade",
		"Deathbird",
		"Death Rite Bird",
		"Erdtree Avatar (Northeast)",
		"Erdtree Avatar (Southwest)",
		"Erdtree Burial Watchdog",
		"Glintstone Dragon Adula",
		"Glintstone Dragon Smarag",
		"Grafted Scion (Four Belfries)",
		{ name: "Magma Wyrm Makar", achievement: true },
		"Night's Cavalry (North)",
		"Night's Cavalry (South)",
		"Omenkiller",
		{ name: "Red Wolf of Radagon", achievement: true },
		{ name: "Rennala, Queen of the Full Moon", legend: true, achievement: true },
		{ name: "Royal Knight Loretta", achievement: true },
		"Royal Revenant",
		"Spirit-Caller Snail",
		"Tibia Mariner",
	],

	Caelid: [
		"Battlemage Hugues",
		"Cemetery Shade",
		"Cleanrot Knight",
		"Commander O'Neil",
		"Crucible Knight / Misbegotten Warrior",
		"Death Rite Bird",
		"Decaying Ekzykes",
		"Erdtree Avatar",
		"Erdtree Burial Watchdog",
		"Fallingstar Beast",
		"Frenzied Duelist",
		"Mad Pumpkin Heads",
		"Magma Wyrm",
		"Night's Cavalry",
		"Nox Swordstress & Nox Priest",
		"Putrid Crystallian Trio",
		{ name: "Starscourge Radahn", legend: true, achievement: true },
	],

	Dragonbarrow: [
		"Beast of Farum Azula",
		"Bell Bearing Hunter",
		"Black Blade Kindred (Bestial Sanctum)",
		"Flying Dragon Greyll",
		"Godskin Apostle",
		"Night's Cavalry",
		"Putrid Avatar",
		"Putrid Tree Spirit",
	],

	// prettier-ignore
	"Siofra River": [
		{ name: "Ancestor Spirit", achievement: true },
		"Dragonkin Soldier",
	],

	// prettier-ignore
	"Ainsel River": [
		{ name: "Dragonkin Soldier of Nokstella", achievement: true },
	],

	"Nokron, Eternal City": [
		{ name: "Mimic Tear", achievement: true },
		{ name: "Regal Ancestor Spirit", achievement: true },
		{ name: "Valiant Gargoyles", achievement: true },
	],

	"Deeproot Depths": [
		{ name: "Crucible Knight Siluria" },
		{ name: "Fia's Champions" },
		{ name: "Lichdragon Fortissax", achievement: true },
	],

	// prettier-ignore
	"Lake of Rot": [
		{ name: "Astel, Naturalborn of the Void", achievement: true },
		"Dragonkin Soldier",
	],

	"Altus Plateu": [
		"Ancient Dragon Lansseax",
		"Ancient Hero of Zamor",
		"Black Knife Assassin (Sage's Cave)",
		"Black Knife Assassin (Sainted Hero's Grave)",
		"Crystalian Spear & Crystalian Ringblade",
		"Demi-Human Queen Gilika",
		{ name: "Elemer of the Briar", achievement: true },
		"Fallingstar Beast",
		"Godefroy The Grafted",
		"Godskin Apostle",
		"Necromancer Garris",
		"Night's Cavalry",
		"Omenkiller / Miranda",
		"Perfumer Tricia / Misbegotten Warrior",
		"Sanguine Noble",
		"Stonedigger Troll",
		"Tree Sentinel Duo",
		"Wormface",
	],

	"Mt. Gelmir": [
		"Abductor Virgins",
		"Demi-Human Queen Margot",
		"Demi-Human Queen Maggie",
		"Erdtree Burial Watchdog",
		"Full-Grown Fallingstar Beast",
		{ name: "God-Devouring Serpent / Rykard", legend: true, achievement: true },
		{ name: "Godskin Noble", achievement: true },
		"Kindred of Rot",
		"Magma Wyrm",
		"Red Wolf of the Champion",
		"Tibia Mariner",
		"Ulcerated Tree Spirit",
	],

	Leyndell: [
		"Bell Bearing Hunter",
		"Crucible Knight Ordovis / Crucible Knight",
		"Deathbird",
		"Draconic Tree Sentinel",
		"Esgar, Priest of Blood",
		"Fell Twins",
		"Godfrey, First Elden Lord (Golden Shade)",
		"Grave Warden Duelist",
		{ name: "Morgott, the Omen King", achievement: true },
		{ name: "Mohg, The Omen", achievement: true },
		"Onyx Lord",
	],

	// prettier-ignore
	"Forbidden Lands": [
		"Black Blade Kindred",
		"Mimic Tear",
		"Night's Cavalry",
	],

	"Mountaintops of the Giants": [
		"Ancient Hero of Zamor",
		"Borealis the Freezing Fog",
		{ name: "Commander Niall", achievement: true },
		"Death Rite Bird",
		"Erdtree Avatar",
		{ name: "Fire Giant", achievement: true },
		"Godskins (Summoner Snail)",
		"Ulcerated Tree Spirit",
		"Vyke, Knight of the Roundtable",
	],

	"Consecrated Snowfield": [
		"Astel, Stars of Darkness",
		"Death Rite Bird",
		"Great Wrym Theodorix",
		"Misbegotten Crusader",
		"Night's Cavalry (Duo)",
		"Putrid Avatar",
		"Putrid Grave Warden Duelist",
	],

	"The Haligtree": [
		{ name: "Loretta, Knight of the Haligtree", achievement: true },
		{ name: "Malenia, Blade of Miquella", legend: true, achievement: true },
	],

	// prettier-ignore
	"Mohgwyn Palace": [
		{ name: "Mohg, Lord of Blood", legend: true, achievement: true },
	],

	"Crumbling Farum Azula": [
		{ name: "Godskin Duo", achievement: true },
		{ name: "Beast Clergyman / Maliketh, the Black Blade", achievement: true },
		{ name: "Dragonlord Placidusax", achievement: true },
	],

	"Leyndell, Ashen Capital": [
		{ name: "Godfrey, First Elden Lord / Hoarah Loux, Warrior", achievement: true },
		"Radagon of the Golden Order / Elden Beast",
		"Sir Gideon Ofnir, the All-Knowing ",
	],
};
