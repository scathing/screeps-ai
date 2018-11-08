var managerStructure = {

	rooms: undefined,

	stuctures: undefined,

	containers: undefined,
	controllers: undefined,
	extensions: undefined,
	extractors: undefined,
	keeperLairs: undefined,
	labs: undefined,
	links: undefined,
	nukers: undefined,
	observers: undefined,
	powerBanks: undefined,
	powerSpawns: undefined,
	portals: undefined,
	ramparts: undefined,
	roads: undefined,
	spawns: undefined,
	storages: undefined,
	terminals: undefined,
	towers: undefined,
	walls: undefined,



	getContainers: function(room) {
		if (!this.containers) {
			this.containers = findStructures(getStructures(room), STRUCTURE_CONTAINER);
		}
		return this.containers;
	},

	getContainers: function(room) {
		if (!this.containers) {
			findStructures(STRUCTURE_CONTAINER);
		}
		return this.containers;
	},


	getStructures: function(room) {
		if (!this.structures) {
			this.structures = room.find(FIND_CONTAINERS);
		}
		return this.structures;
	},

	findStructures: function(structures, structureType) {
		return _.filter(structures, structure => structure.structureType == structureType);
	}

}

module.exports = managerStructure;