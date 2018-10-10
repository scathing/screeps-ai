var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var source;
        var container;
        if (!creep.memory.harvestSourceId) {
            var sources = creep.room.find(FIND_SOURCES);
            creep.memory.harvestSourceId = sources[1].id;
        }
        source = Game.getObjectById(creep.memory.harvestSourceId);


        var containers = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] > 0
        });
        if (containers.length) {
            creep.memory.withdrawSourceId = containers[0].id;
        } else {
            delete creep.memory.withdrawSourceId;
        }

        if (creep.memory.withdrawSourceId) {
            container = Game.getObjectById(creep.memory.withdrawSourceId);
        }

        if (creep.memory.upgrading) {

            var flags = creep.room.find(FIND_FLAGS, {
                filter: (flag) => {
                    return flag.name == 'cont';
                }
            });
            if (flags.length > 0) {
                if (!creep.pos.inRangeTo(flags[0].pos, 1)) {
                    creep.moveTo(flags[0]);
                } else {
                    if (creep.carry.energy == 0) {
                        creep.memory.upgrading = false;
                        return;
                    }
                    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller);
                    }
                }
            }

            // if(creep.carry.energy == 0) {
            //                 creep.memory.upgrading = false;
            //                 return;
            //             }
            //             if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            //                  creep.moveTo(creep.room.controller);
            //             }
        } else {
            if (creep.carry.energy == creep.carryCapacity) {
                creep.memory.upgrading = true;
                return;
            }

            if (container) {
                if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(container.pos);
                    creep.say('withdraw');
                }
            } else if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
                creep.say('harvest');
            }
        }
    }
};

module.exports = roleUpgrader;