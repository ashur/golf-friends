const Club = require( '../club' );

let club = new Club( 'Hail Mary' );

club.accuracy = 0.01;
club.minDistance = 1;
club.maxDistance = 300;

module.exports = club;
