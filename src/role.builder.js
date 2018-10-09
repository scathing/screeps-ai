var roleFixer = require('role.fixer');
var roleUpgrader = require('role.upgrader');

var roleBuilder = {

  /** @param {Creep} creep **/
  run: function(creep) {

    var source;
    var container;
    if (!creep.memory.harvestSourceId) {
      var sources = creep.room.find(FIND_SOURCES);
      creep.memory.harvestSourceId = sources[0].id;
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
    container = undefined;


    if (creep.memory.building && creep.carry.energy == 0) {
      creep.memory.building = false;
      creep.say('harvest');
    }
    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      creep.memory.building = true;
      creep.say('build');
    }

    if (creep.memory.building) {

      var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      if (targets.length) {
        var primaryTarget = this.findPrimaryTarget(targets);

        if (creep.build(primaryTarget) == ERR_NOT_IN_RANGE) {
          creep.moveTo(primaryTarget, {
            visualizePathStyle: {
              stroke: '#ffffff'
            }
          });
        }
      } else {
        roleUpgrader.run(creep);
      }
    } else {

      if (container) {
        if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(container.pos);
          creep.say('withdraw');
        }
      } else if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
        creep.moveTo(source, {
          visualizePathStyle: {
            stroke: '#ffaa00'
          }
        });
      }
    }
  },

  findPrimaryTarget: function(targets) {
    var primaryTarget;
    var primaryTarget = _.find(targets, (i) => i.structureType == STRUCTURE_EXTENSION);

    if (!primaryTarget) {
      primaryTarget = targets[0];
    }
    return primaryTarget;
  }
};

module.exports = roleBuilder;