var roleFixer = {

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
      filter: (structure) => (structure.structureType == STRUCTURE_CONTAINER || structure.structureType == STRUCTURE_STORAGE) && structure.store[RESOURCE_ENERGY] > 0
    });
    if (containers.length) {
      creep.memory.withdrawSourceId = containers[0].id;
    } else {
      delete creep.memory.withdrawSourceId;
    }

    if (creep.memory.withdrawSourceId) {
      container = Game.getObjectById(creep.memory.withdrawSourceId);
    }

    if (creep.memory.fixing && creep.carry.energy == 0) {
      creep.memory.fixing = false;
      creep.say('harvest');
    }
    if (!creep.memory.fixing && creep.carry.energy == creep.carryCapacity) {
      creep.memory.fixing = true;
      creep.say('fix');
    }

    if (creep.memory.fixing) {


      if (!creep.memory.fixTarget) {
        var targets = creep.room.find(FIND_STRUCTURES);
        if (targets.length) {
          targets = _.sortBy(targets, [function(tar) { return tar.hits; }]);
          var primaryTarget = this.findPrimaryTarget(targets);
          creep.memory.fixTarget = primaryTarget.id;
        }
      }

      const fixTarget = Game.getObjectById(creep.memory.fixTarget);

      if(fixTarget.hits == fixTarget.hitsMax) {
        delete creep.memory.fixTarget;
        return;
      }
      if (creep.repair(fixTarget) == ERR_NOT_IN_RANGE) {
        creep.moveTo(fixTarget, {
          visualizePathStyle: {
            stroke: '#000000'
          }
        });
      }


    } else {
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
  },

  findPrimaryTarget: function(targets) {
    var primaryTarget = _.find(targets, (structure) => {
      if ((structure.structureType == STRUCTURE_ROAD && structure.hits + 1000 < structure.hitsMax) ||
        (structure.structureType == STRUCTURE_CONTAINER && structure.hits + 50000 < structure.hitsMax) ||
        (structure.structureType == STRUCTURE_RAMPART && structure.hits + 900000 < structure.hitsMax)) {
        return structure;
      }
    });

    if (!primaryTarget) {
      primaryTarget = _.find(targets, (structure) => {
        if ((structure.structureType == STRUCTURE_WALL && structure.hits < 100000)) {
          return structure;
        }
      });
      if (!primaryTarget) {
        primaryTarget = targets[0];
      }
    }
    return primaryTarget;
  },

  checkActive: function(wall) {
    return wall.isActive();
  }
};

module.exports = roleFixer;