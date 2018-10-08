var roleUpgrader = {
    
    /** @param {Creep} creep **/
    run: function(creep) {
        var source;
        if(!creep.memory.harvestSourceId){
            var sources = creep.room.find(FIND_SOURCES);
            console.log(sources[1].id);
            creep.memory.harvestSourceId = sources[1].id;
        }
        source = Game.getObjectById(creep.memory.harvestSourceId);
    
        if(creep.memory.upgrading) {
            
            var flags = creep.room.find(FIND_FLAGS, {
                    filter: (flag) => {
                        return flag.name == 'cont';
                    }
                });
                if(flags.length > 0) {
                    if(!creep.pos.isEqualTo(flags[0].pos)){
    	                creep.moveTo(flags[0]);
                    }  else {
                        if(creep.carry.energy == 0) {
                            creep.memory.upgrading = false;
                            return;
                        }
                        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                             creep.moveTo(creep.room.controller);
                        }
                }}
        } else {
            if(creep.carry.energy == creep.carryCapacity) {
                creep.memory.upgrading = true;
                return;
            }
            
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
                creep.say('⛏️ harvest');
            }
        }
	}
};

module.exports = roleUpgrader;
