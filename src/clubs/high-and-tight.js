const Club = require( '../club' );

let club = new Club( 'High and Tight' );

club.accuracy = 0.75;
club.minDistance = 100;
club.maxDistance = 150;

module.exports = club;
