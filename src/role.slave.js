var roleSlave = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep.room.controller) {
            if(creep.signController(creep.room.controller, "For Mother Russia!") == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        
        // if (creep.memory.suply && creep.carry.energy == 0) {
        //     creep.memory.suply = false;
        //     creep.say('harvest');
        // }

        // if (!creep.memory.suply && creep.carry.energy == creep.carryCapacity) {
        //     creep.memory.suply = true;
        //     creep.say('suply');
        // }
        // if (creep.memory.suply) {
            
        //     if(creep.room.name != Game.rooms['W21S51'].name) {
        //         var roomPos = new RoomPosition(15, 1, 'W21S51');
        //         if(creep.pos.x != roomPos.x || creep.pos.y != roomPos.y || creep.pos.roomName != roomPos.roomName) {
        //             creep.moveTo(roomPos, {
        //     visualizePathStyle: {
        //       stroke: '#FF0000'
        //     }
        //   });}
        //         } else {
            
            
            
        //     var containers = Game.rooms['W21S51'].find(FIND_STRUCTURES, {
        //         filter: (structure) => {
        //             return ((structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_STORAGE) &&
        //                 structure.store[RESOURCE_ENERGY] < structure.storeCapacity);
        //         }
        //     });
            

        //     if (containers.length > 0) {
        //         var container = creep.pos.findClosestByRange(containers);
        //         if (creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                   
        //             creep.moveTo(container, {
        //                 visualizePathStyle: {
        //                     stroke: '#ffffff'
        //                 }
        //             });
        //         }
        //     }}
        // } else {
            
        //     if(!Game.rooms['W17S49']){
        //         var roomPos = new RoomPosition(21, 15, 'W17S49');
        //         if(creep.pos.x != roomPos.x || creep.pos.y != roomPos.y || creep.pos.roomName != roomPos.roomName) {
        //             creep.moveTo(roomPos, {
        //     visualizePathStyle: {
        //       stroke: '#FF0000'
        //     }
        //   });
        //         }
        //     } else {
        //         var sources = Game.rooms['W17S49'].find(FIND_HOSTILE_STRUCTURES, {
        //             filter: (structure) => {
        //                 return (structure.structureType == STRUCTURE_STORAGE &&
        //                     structure.store[RESOURCE_ENERGY] > 0);
        //             }
        //         });
        //         var source = sources[0];
        //         if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        //             creep.moveTo(source, {
        //     visualizePathStyle: {
        //       stroke: '#FF0000'
        //     }
        //   });
        //         }
        //     }
        // }
    }
    
};

// Game.spawns['S1'].spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE,CARRY, CARRY,MOVE, MOVE,], 'slave1', {memory: {role: 'slave'}});
// Game.spawns['S1'].spawnCreep([CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE,MOVE, MOVE,MOVE, MOVE,], '111', {memory: {role: 'slave'}});

module.exports = roleSlave;