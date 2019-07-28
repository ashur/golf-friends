const Club = require( '../club' );

let club = new Club( 'Hole in One' );

club.accuracy = 1;
club.minDistance = 0;
club.maxDistance = 9999;

module.exports = club;
