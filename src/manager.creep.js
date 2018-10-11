var managerEnergy = require('manager.energy');

var managerCreep = {

    run: function(room) {
        // this.countUnit(['harvester', 'upgrader', 'builder']);

        this.setMaxHarvesters(room);

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
        if (harvesters.length < room.memory.harvesters.count) {
            var newName = 'harvester' + Game.time;

            var energy = managerEnergy.getRoomEnergy(room);

            const spawn = _.find(Game.spawns, (spawn) => spawn.room.name == room.name);
            var energyStructures = _.filter(Game.structures, s => s.room.name == room.name);

            var sourceId = room.memory.harvesters.sources.find((source) => {

                var workersOnSource = 0;
                harvesters.forEach((h) => {
                    if (h.memory.sourceId == source.id) {
                        workersOnSource += 1;
                    }
                });


                if (source.count > workersOnSource) {
                    return source;
                }
            }).id;

            var memory = {
                role: 'harvester',
                sourceId: sourceId
            };

            this.spawnTopCreep(spawn, energy, newName, memory, energyStructures);
        }
    },

    upgraderCountController: function(room) {

        // if(managerEnergy.getRoomEnergy(room) == managerEnergy.getRoomEnergyCapacityAvailable(room)) {
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

            var energy = managerEnergy.getRoomEnergy(room);
            // TODO ÃÂÃÂÃÂ ÃÂ½ÃÂ°ÃÂ´ÃÂ¾  ÃÂ½ÃÂ°ÃÂÃÂ¾ÃÂ´ÃÂ¸ÃÂÃÂ ÃÂÃÂ²ÃÂ¾ÃÂ±ÃÂ¾ÃÂ´ÃÂ½ÃÂÃÂ¹ ÃÂÃÂ¿ÃÂ°ÃÂÃÂ½ ÃÂ² ÃÂ½ÃÂ°ÃÂÃÂµÃÂ¹ ÃÂºÃÂ¾ÃÂ¼ÃÂ½ÃÂ°ÃÂÃÂµ
            var spawn = Game.spawns['S1'];
            var energyStructures = _.filter(Game.structures, s => s.room.name == room.name);
            var memory = {
                role: 'upgrader'
            };
            this.spawnTopCreep(spawn, energy, newName, memory, energyStructures);
        }
    },

    builderCountController: function(room) {

        // if(managerEnergy.getRoomEnergy(room) == managerEnergy.getRoomEnergyCapacityAvailable(room)) {
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

            var energy = managerEnergy.getRoomEnergy(room);
            // TODO ÃÂÃÂÃÂ ÃÂ½ÃÂ°ÃÂ´ÃÂ¾  ÃÂ½ÃÂ°ÃÂÃÂ¾ÃÂ´ÃÂ¸ÃÂÃÂ ÃÂÃÂ²ÃÂ¾ÃÂ±ÃÂ¾ÃÂ´ÃÂ½ÃÂÃÂ¹ ÃÂÃÂ¿ÃÂ°ÃÂÃÂ½ ÃÂ² ÃÂ½ÃÂ°ÃÂÃÂµÃÂ¹ ÃÂºÃÂ¾ÃÂ¼ÃÂ½ÃÂ°ÃÂÃÂµ
            var spawn = Game.spawns['S1'];
            var energyStructures = _.filter(Game.structures, s => s.room.name == room.name);
            var memory = {
                role: 'builder'
            };
            this.spawnTopCreep(spawn, energy, newName, memory, energyStructures);
        }
    },

    fixerCountController: function(room) {

        // if(managerEnergy.getRoomEnergy(room) == managerEnergy.getRoomEnergyCapacityAvailable(room)) {
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

            var energy = managerEnergy.getRoomEnergy(room);
            // TODO ÃÂÃÂÃÂ ÃÂ½ÃÂ°ÃÂ´ÃÂ¾  ÃÂ½ÃÂ°ÃÂÃÂ¾ÃÂ´ÃÂ¸ÃÂÃÂ ÃÂÃÂ²ÃÂ¾ÃÂ±ÃÂ¾ÃÂ´ÃÂ½ÃÂÃÂ¹ ÃÂÃÂ¿ÃÂ°ÃÂÃÂ½ ÃÂ² ÃÂ½ÃÂ°ÃÂÃÂµÃÂ¹ ÃÂºÃÂ¾ÃÂ¼ÃÂ½ÃÂ°ÃÂÃÂµ
            var spawn = Game.spawns['S1'];
            var energyStructures = _.filter(Game.structures, s => s.room.name == room.name);
            var memory = {
                role: 'fixer'
            };
            this.spawnTopCreep(spawn, energy, newName, memory, energyStructures);
        }
    },

    spawnTopCreep: function(spawn, energy, name, memory, energyStructures) {
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
            console.log('Spawning new ' + memory.role + '. Spawn result: ' +
                spawn.spawnCreep(body, name, {
                    memory: memory,
                    energyStructures: energyStructures
                }));
            spawn.memory.plannedSpawn = true;
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
    },

    setMaxHarvesters: function(room) {

        if (!room.memory.harvesters) {

            const sourcesAvailablePlaces = [];

            const terrain = new Room.Terrain(room.name);

            var maxCount = 0;
            var sources = room.find(FIND_SOURCES);
            sources.forEach((source) => {
                var maxCountBySource = 0;
                var x = source.pos.x - 1;
                var y = source.pos.y - 1;
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        switch (terrain.get(x + i, y + j)) {
                            case TERRAIN_MASK_WALL:
                            case TERRAIN_MASK_LAVA:
                                break;
                            case TERRAIN_MASK_SWAMP:
                            case 0:
                                maxCount += 1;
                                maxCountBySource += 1;
                                break;
                        }
                    }
                }

                const availablePlaces = {
                    id: source.id,
                    count: maxCountBySource
                };
                sourcesAvailablePlaces.push(availablePlaces);
            });

            const harvesters = {
                count: maxCount,
                sources: sourcesAvailablePlaces
            };

            room.memory.harvesters = harvesters;
        }
    }
};

module.exports = managerCreep;