var roleFixer = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.fixing && creep.carry.energy == 0) {
            creep.memory.fixing = false;
            creep.say('⛏️ harvest');
	    }
	    if(!creep.memory.fixing && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.fixing = true;
	        creep.say('🔧 fix');
	    }

	    if(creep.memory.fixing) {
	        
	        var targets = creep.room.find(FIND_STRUCTURES);
            if(targets.length) {
                var primaryTarget = this.findPrimaryTarget(targets);
                if(creep.repair(primaryTarget) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(primaryTarget, {visualizePathStyle: {stroke: '#000000'}});
                }
            } else {
                var target = Game.spawns.S1;
	            creep.moveTo(target);
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	},
	
	findPrimaryTarget: function(targets) {
	    var primaryTarget = _.find(targets, (i) => {
	        if(i.structureType == STRUCTURE_WALL && this.checkActive(i) && i.hits < 30001){
	            return i;
	        }
	    });
        if(!primaryTarget){
            primaryTarget = targets[0];
        }
        return primaryTarget;
	},
	
	checkActive: function(wall) {
	    return wall.isActive();
	}
};

module.exports = roleFixer;
