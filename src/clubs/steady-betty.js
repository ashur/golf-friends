const Club = require( '../club' );

class SteadyBetty extends Club
{
	constructor()
	{
		super( 'Steady Betty' );

		this.accuracy = 1;
		this.minDistance = 10;
		this.maxDistance = 20;
	}
}

module.exports = SteadyBetty;
