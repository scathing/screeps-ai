var roleSlave = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // if(creep.id == ''){
        //     var controller = _.filter(Game.rooms['W68N72'].find(FIND_STRUCTURES), (str) => str.structureType == STRUCTURE_CONTROLLER)[0];
        //     console.log(creep.claimController(controller));
        //     if(creep.claimController(controller) == ERR_NOT_IN_RANGE){
        //         creep.moveTo(controller.pos);
        //     }
        // } else {

        var roomPos = new RoomPosition(28, 48, 'W22S49');


        //    // console.log(goal.energy);
        //     // creep.rangedMassAttack(goal);
        //     // console.log(creep.pos);
        //     // console.log(roomPos);
        //     // console.log(creep.pos.x != roomPos.x || creep.pos.y != roomPos.y || creep.pos.roomName != roomPos.roomName);



        if (creep.pos.x != roomPos.x || creep.pos.y != roomPos.y || creep.pos.roomName != roomPos.roomName) {
            creep.moveTo(roomPos, {
                visualizePathStyle: {
                    stroke: '#ff0000',
                    strokeWidth: .35,
                    lineStyle: 'undefined'
                }
            });
        } else {
            var goals = _.filter(Game.rooms['W22S49'].find(FIND_STRUCTURES), (str) => str.structureType == STRUCTURE_TOWER);
            var goal = goals[0];
            creep.say('for mother Russia =)');
            creep.rangedMassAttack(goal);
        }



        //     // creep.moveTo(roomPos, {visualizePathStyle: {stroke: '#ff0000'}});


        //         // creep.moveTo(goal, {visualizePathStyle: {stroke: '#ff0000'}});
        //         // creep.move(RIGHT);
        //         // creep.moveTo(49, 39, {visualizePathStyle: {stroke: '#ff0000'}});
        //         // creep.moveTo(30, 49, {visualizePathStyle: {stroke: '#ff0000'}});
        //         // creep.move(BOTTOM);

        // }
    }
};

module.exports = roleSlave;