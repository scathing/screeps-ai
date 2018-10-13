var roleAttacker = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.id == '') {
            var controller = _.filter(Game.rooms['W68N72'].find(FIND_STRUCTURES), (str) => str.structureType == STRUCTURE_CONTROLLER)[0];
            console.log(creep.claimController(controller));
            if (creep.claimController(controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(controller.pos);
            }
        } else {

            var roomPos = new RoomPosition(42, 24, 'W21S49');
            // var roomPos = new RoomPosition(45, 1, 'W22S50');

            
            // console.log(goal.energy);
            // creep.rangedMassAttack(goal);
            // console.log(creep.pos);
            // console.log(roomPos);
            // console.log(creep.pos.x != roomPos.x || creep.pos.y != roomPos.y || creep.pos.roomName != roomPos.roomName);



            if(creep.pos.x != roomPos.x || creep.pos.y != roomPos.y || creep.pos.roomName != roomPos.roomName) {
               creep.moveTo(roomPos);
            } else {
                var goals = _.filter(Game.rooms['W22S49'].find(FIND_STRUCTURES), (str) => str.id == '5b6809f846e65a55d5d8bf1d');
                
            var goal = goals[0];
            // var goal = Game.room.getObjectById('5bc12e100126a768ec6b2854');
                creep.attack(goal);
                
            }



            // creep.moveTo(roomPos, {visualizePathStyle: {stroke: '#ff0000'}});


            // creep.moveTo(goal, {visualizePathStyle: {stroke: '#ff0000'}});
            // creep.move(RIGHT);
            // creep.moveTo(49, 39, {visualizePathStyle: {stroke: '#ff0000'}});
            // creep.moveTo(30, 49, {visualizePathStyle: {stroke: '#ff0000'}});
            // creep.move(BOTTOM);

        }
    }
};

module.exports = roleAttacker;