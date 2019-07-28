const Club = require( '../club' );

let club = new Club( 'Risk Taker' );

club.accuracy = 0.50;
club.minDistance = 50;
club.maxDistance = 200;

module.exports = club;
