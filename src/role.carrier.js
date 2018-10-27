var roleCarrier = {

  /** @param {Creep} creep **/
  run: function(creep) {

    var tomstones = creep.room.find(FIND_TOMBSTONES);
    
    if(tomstones.length && creep.carry == 0){
        var tombstone = creep.pos.findClosestByRange(tombstones);
        console.log(creep.withdraw(tombstone, RESOURCE_ENERGY));
        if(creep.withdraw(tombstone, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
            
            creep.moveTo(tombstone.pos);
        }

    }

  }
};

module.exports = roleCarrier;

// Game.spawns['S1'].spawnCreep([
//   TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
//   TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, 
//   TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, 
//   MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, 
//   ATTACK, ATTACK, ATTACK, ATTACK ], 'aaa1', {memory: {role: 'attacker'}});

// Game.spawns['S1'].spawnCreep([
//   TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
//   TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, 
//   MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, 
//   ATTACK], 'aaa3224', {memory: {role: 'attacker'}});