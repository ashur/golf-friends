const Club = require( '../club' );

let club = new Club( 'Duffer' );

club.accuracy = 0.3;
club.minDistance = 0;
club.maxDistance = 50;

module.exports = club;
