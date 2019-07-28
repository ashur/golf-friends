const Club = require( '../club' );

class Duffer extends Club
{
	constructor()
	{
		super( 'Duffer' );

		this.accuracy = 0.3;
		this.minDistance = 0;
		this.maxDistance = 30;
	}
}

module.exports = Duffer;
