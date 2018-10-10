var managerEnergy = {

	getRoomEnergy: function(room) {
		return room.energyAvailable;
	},

	getRoomEnergyCapacityAvailable: function(room) {
		return room.energyCapacityAvailable;
	}
};

module.exports = managerEnergy;