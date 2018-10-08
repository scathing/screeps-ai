var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('⛏️ harvest');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('👷 build');
	    }

	    if(creep.memory.building) {
	        
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                var primaryTarget = this.findPrimaryTarget(targets);
                
                if(creep.id == '5bbbaa2b484ed23ae0c19433') {
	               primaryTarget = _.find(targets, (i) => i.structureType == STRUCTURE_CONTAINER);
	            }
                
                if(creep.build(primaryTarget) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(primaryTarget, {visualizePathStyle: {stroke: '#ffffff'}});
                }
            } else {
                var target = Game.spawns.S1;
	            creep.moveTo(target);
            }
	    } else {
	        
	        var containers = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] > 0);
                    }
            });
            
            
            var source;
	        if(containers.length) {
	            var source1 = containers[0];
	           // console.log(source1.pos);
	           //source = containers[0];
	        }
	        if(!source) {
    	        var sources = creep.room.find(FIND_SOURCES);
    	        var source = sources[0];
	        }
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	},
	
	findPrimaryTarget: function(targets) {
	    var primaryTarget;
	    var primaryTarget = _.find(targets, (i) => i.structureType == STRUCTURE_EXTENSION);
	    
        if(!primaryTarget){
            primaryTarget = targets[0];
        }
        return primaryTarget;
	}
};

module.exports = roleBuilder;
