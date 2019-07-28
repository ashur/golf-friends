const Club = require( '../club' );

class HoleInOne extends Club
{
	constructor()
	{
		super( 'Hole In One' );

		this.accuracy = 1;
		this.minDistance = 0;
		this.maxDistance = 1000;

		this.attempt = 'hole';
	}
}

module.exports = HoleInOne;
