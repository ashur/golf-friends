const Club = require( '../club' );

class HailMary extends Club
{
	constructor()
	{
		super( 'Hail Mary' );

		this.accuracy = 0.01;
		this.minDistance = 1;
		this.maxDistance = 300;
	}
}

module.exports = HailMary;
