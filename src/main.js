var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleFixer = require('role.fixer');
var roleAttacker = require('role.attacker');
var unitController = require('unit-controller');
var towerController = require('tower-controller');

module.exports.loop = function () {
    
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    
    for(var idx in Game.rooms) {
        
        var room = Game.rooms[idx];
        if(room.controller.owner && room.controller.owner.username == 'Scathing') {
            if(!room.controller.safeMode || room.controller.safeMode <= 0) {
                room.controller.activateSafeMode();
            }
            if(room.memory.level != room.controller.level) {
                room.memory.level = room.controller.level;
                
                if(room.memory.level == 1) {
                    room.memory.harvesters = 1;
                    room.memory.upgraders = 1;
                    room.memory.builders = 1;
                    room.memory.fixers = 0;
                } else if(room.memory.level == 2) {
                    room.memory.harvesters = 2;
                    room.memory.upgraders = 4;
                    room.memory.builders = 2;
                    room.memory.fixers = 1;
                } else if(room.memory.level == 3) {
                    room.memory.harvesters = 2;
                    room.memory.upgraders = 2;
                    room.memory.builders = 4;
                    room.memory.fixers = 1;
                }
            }
            
            unitController.run(room);
            towerController.run(room);
        }
    }
    
     

    

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'fixer') {
            roleFixer.run(creep);
        }
        if(creep.memory.role == 'attacker') {
            roleAttacker.run(creep);
        }
    }
}

// Game.spawns['S1'].spawnCreep([WORK, CARRY, MOVE], 'u1', {memory: {role: 'upgrader'}});
// Game.rooms['W69N73'].createConstructionSite(25, 17, STRUCTURE_EXTENSION, 'ext7');
// Game.rooms['W69N73'].controller.activateSafeMode();
// Game.rooms['W69N73'].memory.fixers = 1;
