var managerTower = {

    /** @param {Creep} creep **/
    run: function(room) {
        var towers = room.find(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_TOWER && structure.isActive()
        });
        if (towers.length) {

            var enemyCreeps = room.find(FIND_CREEPS, {
                filter: (creep) => {
                    return (creep.owner.username != 'Scathing');
                }
            });

            var roadsToRepair = room.find(FIND_STRUCTURES, {
                filter: (structure) => (structure.structureType == STRUCTURE_ROAD && structure.hits + 1000 < structure.hitsMax) || (structure.structureType == STRUCTURE_CONTAINER && structure.hits + 50000 < structure.hitsMax)
            });

            for (var idx in towers) {
                var tower = towers[idx];

                if (tower.energy == 0) {
                    return;
                }
                if (enemyCreeps.length) {
                    tower.attack(enemyCreeps[0]);
                } else {
                    tower.repair(roadsToRepair[0]);
                }
            }

        }

    }
};

module.exports = managerTower;