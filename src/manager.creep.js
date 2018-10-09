var managerEnergy = require('manager.energy');

var managerCreep = {

    run: function(room) {
        // this.countUnit(['harvester', 'upgrader', 'builder']);

        this.harvesterCountController(room);
        this.builderCountController(room);
        this.upgraderCountController(room);
        this.fixerCountController(room);


        if (Game.spawns['S1'].spawning) {
            Game.spawns['S1'].memory.plannedSpawn = false;
            var spawningCreep = Game.creeps[Game.spawns['S1'].spawning.name];
            Game.spawns['S1'].room.visual.text(
                'new ' + spawningCreep.memory.role,
                Game.spawns['S1'].pos.x + 1,
                Game.spawns['S1'].pos.y, {
                    align: 'left',
                    opacity: 0.8
                });
        }

    },

    harvesterCountController: function(room) {
        // var harvesters = _.filter(Game.creeps, (creep) => creep.room.name == room.name && creep.memory.role == 'harvester');
        // if(energyController.getRoomEnergy(room) == energyController.getRoomEnergyCapacityAvailable(room)) {
        //     if(harvesters.length == room.memory.harvesters) {
        //         _.sortBy(harvesters, [function(o) { return 50 - o.body.length; }]);
        //         for(var idx in harvesters){
        //             var harv = harvesters[idx];
        //             var shitCreep = _.find(harvesters, (h) => h.body.length < harv.body.length);
        //             if(shitCreep) {
        //                 console.log('harvester suicided');
        //                 shitCreep.suicide();
        //                 break;
        //             }
        //         }
        //     }
        // }

        var harvesters = _.filter(Game.creeps, (creep) => creep.room.name == room.name && creep.memory.role == 'harvester');
        if (harvesters.length < room.memory.harvesters) {
            var newName = 'harvester' + Game.time;

            var energy = energyController.getRoomEnergy(room);
            // TODO ÑÑÑ Ð½Ð°Ð´Ð¾  Ð½Ð°ÑÐ¾Ð´Ð¸ÑÑ ÑÐ²Ð¾Ð±Ð¾Ð´Ð½ÑÐ¹ ÑÐ¿Ð°ÑÐ½ Ð² Ð½Ð°ÑÐµÐ¹ ÐºÐ¾Ð¼Ð½Ð°ÑÐµ
            var spawn = Game.spawns['S1'];
            var energyStructures = _.filter(Game.structures, s => s.room.name == room.name);
            this.spawnTopCreep(spawn, energy, newName, 'harvester', energyStructures);
        }
    },

    upgraderCountController: function(room) {

        // if(energyController.getRoomEnergy(room) == energyController.getRoomEnergyCapacityAvailable(room)) {
        //     var upgraders = _.filter(Game.creeps, (creep) => creep.room.name == room.name && creep.memory.role == 'upgrader');
        //     if(upgraders.length == room.memory.upgraders) {

        //         var shitCreep;

        //         _.sortBy(upgraders, [function(o) { return 50 - o.body.length; }]);
        //         for(var idx in upgraders){
        //             var item = upgraders[idx];
        //             shitCreep = _.find(upgraders, (i) => i.body.length < item.body.length);
        //             if(shitCreep) {
        //                 console.log('upgrader suicided');
        //                 shitCreep.suicide();
        //                 break;
        //             }
        //         }
        //         if(!shitCreep) {
        //             _.sortBy(upgraders, [function(o) { return o.ticksToLive; }]);
        //             var shitCreep = upgraders[0];
        //             if(shitCreep) {
        //                 console.log('upgrader suicided');
        //                 shitCreep.suicide();
        //             }
        //         }
        //     }
        // }

        var upgraders = _.filter(Game.creeps, (creep) => creep.room.name == room.name && creep.memory.role == 'upgrader');
        if (upgraders.length < room.memory.upgraders) {
            var newName = 'upgrader' + Game.time;

            var energy = energyController.getRoomEnergy(room);
            // TODO ÑÑÑ Ð½Ð°Ð´Ð¾  Ð½Ð°ÑÐ¾Ð´Ð¸ÑÑ ÑÐ²Ð¾Ð±Ð¾Ð´Ð½ÑÐ¹ ÑÐ¿Ð°ÑÐ½ Ð² Ð½Ð°ÑÐµÐ¹ ÐºÐ¾Ð¼Ð½Ð°ÑÐµ
            var spawn = Game.spawns['S1'];
            var energyStructures = _.filter(Game.structures, s => s.room.name == room.name);
            this.spawnTopCreep(spawn, energy, newName, 'upgrader', energyStructures);
        }
    },

    builderCountController: function(room) {

        // if(energyController.getRoomEnergy(room) == energyController.getRoomEnergyCapacityAvailable(room)) {
        //     var builders = _.filter(Game.creeps, (creep) => creep.room.name == room.name && creep.memory.role == 'builder');
        //     if(builders.length == room.memory.builders) {
        //         _.sortBy(builders, [function(o) { return 50 - o.body.length; }]);
        //         for(var idx in builders){
        //             var item = builders[idx];
        //             var shitCreep = _.find(builders, (i) => i.body.length < item.body.length);
        //             if(shitCreep) {
        //                 // console.log('builder suicided');
        //                 // shitCreep.suicide();
        //                 break;
        //             }
        //         }
        //     }
        // }

        var builders = _.filter(Game.creeps, (creep) => creep.room.name == room.name && creep.memory.role == 'builder');
        if (builders.length < room.memory.builders) {
            var newName = 'builder' + Game.time;

            var energy = energyController.getRoomEnergy(room);
            // TODO ÑÑÑ Ð½Ð°Ð´Ð¾  Ð½Ð°ÑÐ¾Ð´Ð¸ÑÑ ÑÐ²Ð¾Ð±Ð¾Ð´Ð½ÑÐ¹ ÑÐ¿Ð°ÑÐ½ Ð² Ð½Ð°ÑÐµÐ¹ ÐºÐ¾Ð¼Ð½Ð°ÑÐµ
            var spawn = Game.spawns['S1'];
            var energyStructures = _.filter(Game.structures, s => s.room.name == room.name);
            this.spawnTopCreep(spawn, energy, newName, 'builder', energyStructures);
        }
    },

    fixerCountController: function(room) {

        // if(energyController.getRoomEnergy(room) == energyController.getRoomEnergyCapacityAvailable(room)) {
        //     var builders = _.filter(Game.creeps, (creep) => creep.room.name == room.name && creep.memory.role == 'builder');
        //     if(builders.length == room.memory.builders) {
        //         _.sortBy(builders, [function(o) { return 50 - o.body.length; }]);
        //         for(var idx in builders){
        //             var item = builders[idx];
        //             var shitCreep = _.find(builders, (i) => i.body.length < item.body.length);
        //             if(shitCreep) {
        //                 // console.log('builder suicided');
        //                 // shitCreep.suicide();
        //                 break;
        //             }
        //         }
        //     }
        // }

        var fixers = _.filter(Game.creeps, (creep) => creep.room.name == room.name && creep.memory.role == 'fixer');
        if (fixers.length < room.memory.fixers) {
            var newName = 'fixer' + Game.time;

            var energy = energyController.getRoomEnergy(room);
            // TODO ÑÑÑ Ð½Ð°Ð´Ð¾  Ð½Ð°ÑÐ¾Ð´Ð¸ÑÑ ÑÐ²Ð¾Ð±Ð¾Ð´Ð½ÑÐ¹ ÑÐ¿Ð°ÑÐ½ Ð² Ð½Ð°ÑÐµÐ¹ ÐºÐ¾Ð¼Ð½Ð°ÑÐµ
            var spawn = Game.spawns['S1'];
            var energyStructures = _.filter(Game.structures, s => s.room.name == room.name);
            this.spawnTopCreep(spawn, energy, newName, 'fixer', energyStructures);
        }
    },

    spawnTopCreep: function(spawn, energy, name, type, energyStructures) {
        var body;
        if (energy < 200) {
            return;
        } else if (energy >= 3650) {
            body = [WORK, CARRY, MOVE, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE,
                WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE,
                WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE,
                WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE,
                WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE
            ];
        } else if (energy >= 2900) {
            body = [WORK, CARRY, MOVE, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE,
                WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE,
                WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE,
                WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE
            ];
        } else if (energy >= 2150) {
            body = [WORK, CARRY, MOVE, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE,
                WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE,
                WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE
            ];
        } else if (energy >= 1400) {
            body = [WORK, CARRY, MOVE, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE,
                WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE
            ];
        } else if (energy >= 650) {
            body = [WORK, CARRY, MOVE, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE];
        } else if (energy >= 550) {
            body = [WORK, CARRY, MOVE, WORK, WORK, CARRY, CARRY, MOVE];
        } else if (energy >= 450) {
            body = [WORK, CARRY, MOVE, WORK, WORK, CARRY];
        } else if (energy >= 400) {
            body = [WORK, CARRY, MOVE, WORK, WORK];
        } else if (energy >= 300) {
            body = [WORK, CARRY, MOVE, WORK];
        } else if (energy >= 200) {
            body = [WORK, CARRY, MOVE];
        }

        if (!spawn.memory.plannedSpawn && !spawn.spawning) {
            console.log(body);
            console.log(spawn.spawnCreep(body, name, {
                memory: {
                    role: type
                },
                energyStructures: energyStructures
            }));
            spawn.memory.plannedSpawn = true;
            console.log('Spawning new ' + type);
        } else {
            console.log('Can\'t spawn new ' + type);
        }
    },

    countUnit: function(unitNames) {
        var message = '';

        for (var index in unitNames) {
            var unitName = unitNames[index];
            var units = _.filter(Game.creeps, (creep) => creep.memory.role == unitName);
            message += unitName + 's: ' + units.length;
            message += ', ';
        }

        console.log(message);
    }

};

module.exports = managerCreep;