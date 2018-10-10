//roles
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleFixer = require('role.fixer');
var roleAttacker = require('role.attacker');
var roleSlave = require('role.slave');


//managers
var managerMemory = require('manager.memory');
var managerCreep = require('manager.creep');
var managerTower = require('manager.tower');

module.exports.loop = function() {

    managerMemory.run();

    for (var idx in Game.rooms) {

        var room = Game.rooms[idx];
        if (room.controller && room.controller.owner && room.controller.owner.username == 'Scathing') {
            if (!room.controller.safeMode || room.controller.safeMode <= 0) {
                var enemyCreeps = room.find(FIND_CREEPS, {
                    filter: (creep) => {
                        return (creep.owner.username != 'Scathing');
                    }
                });
                if (enemyCreeps.length) {
                    room.controller.activateSafeMode();
                }
            }
            if (room.memory.level != room.controller.level) {
                room.memory.level = room.controller.level;

                if (room.memory.level == 1) {
                    room.memory.upgraders = 1;
                    room.memory.builders = 1;
                    room.memory.fixers = 0;
                } else if (room.memory.level == 2) {
                    room.memory.upgraders = 4;
                    room.memory.builders = 2;
                    room.memory.fixers = 1;
                } else if (room.memory.level == 3) {
                    room.memory.upgraders = 2;
                    room.memory.builders = 4;
                    room.memory.fixers = 1;
                }
            }

            managerCreep.run(room);
            managerTower.run(room);
        }
    }



    for (var name in Game.creeps) {
        var creep = Game.creeps[name];

        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if (creep.memory.role == 'fixer') {
            roleFixer.run(creep);
        }
        if (creep.memory.role == 'attacker') {
            roleAttacker.run(creep);
        }
        if (creep.memory.role == 'slave') {
            roleSlave.run(creep);
        }
    }
}

// Game.spawns['S1'].spawnCreep([WORK, CARRY, MOVE], 'u1', {memory: {role: 'upgrader'}});
// Game.rooms['W69N73'].createConstructionSite(25, 17, STRUCTURE_EXTENSION, 'ext7');
// Game.rooms['W69N73'].controller.activateSafeMode();
// Game.rooms['W69N73'].memory.fixers = 1;