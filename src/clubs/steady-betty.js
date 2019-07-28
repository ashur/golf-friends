const Club = require( '../club' );

let club = new Club( 'Steady Betty' );

club.accuracy = 0.9;
club.minDistance = 25;
club.maxDistance = 50;

module.exports = club;
