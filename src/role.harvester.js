var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if (creep.memory.suply && creep.carry.energy == 0) {
            creep.memory.suply = false;
            creep.say('harvest');
        }

        if (!creep.memory.suply && creep.carry.energy == creep.carryCapacity) {
            creep.memory.suply = true;
            creep.say('suply');
        }
        if (creep.memory.suply) {

            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                        structure.energy < structure.energyCapacity;
                }
            });

            var containers = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] < structure.storeCapacity);
                }
            });

            var towers = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER && structure.energy < structure.energyCapacity);
                }
            });

            if (targets.length > 0) {
                var target = creep.pos.findClosestByRange(targets);
                if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {
                        visualizePathStyle: {
                            stroke: '#ffffff'
                        }
                    });
                }
            } else if (containers.length > 0) {
                var container = creep.pos.findClosestByRange(containers);
                if (creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(container, {
                        visualizePathStyle: {
                            stroke: '#ffffff'
                        }
                    });
                }
            } else if (towers.length > 0) {
                if (creep.transfer(towers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(towers[0], {
                        visualizePathStyle: {
                            stroke: '#ffffff'
                        }
                    });
                }

            } else {
                var flags = creep.room.find(FIND_FLAGS, {
                    filter: (flag) => {
                        return flag.name == 'harvesters';
                    }
                });
                if (flags.length > 0) {
                    creep.moveTo(flags[0]);
                }
            }
        } else {
            var source = Game.getObjectById(creep.memory.sourceId);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
    }
};

module.exports = roleHarvester;