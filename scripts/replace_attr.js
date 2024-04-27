Hooks.on("ready", function() {
	//attribute names
	game.dnd5e.config.abilities.cha.label = "Arcane"
	game.dnd5e.config.abilities.cha.abbreviation = "arc"
	game.dnd5e.config.abilities.hon.label = "Mind"
	game.dnd5e.config.abilities.hon.abbreviation = "min"
	game.dnd5e.config.abilities.san.label = "Endurance"
	game.dnd5e.config.abilities.san.abbreviation = "end"
	game.dnd5e.config.abilities.wis.label = "Faith"
	game.dnd5e.config.abilities.wis.abbreviation = "fai"
	game.dnd5e.config.abilities.con.label = "Vigor"
	game.dnd5e.config.abilities.con.abbreviation = "vig"
	
	//skill names
	game.dnd5e.config.skills.arc.label = "Occult"
	game.dnd5e.config.skills.arc.fullkey = "occult"
	game.dnd5e.config.skills.arc.ability = "cha"
	game.dnd5e.config.skills.med.ability = "int"
});