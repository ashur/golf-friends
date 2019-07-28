const Club = require( '../club' );

let club = new Club( 'Nutter Butter Putter' );

club.accuracy = 0.9;
club.minDistance = 1;
club.maxDistance = 5;

module.exports = club;
