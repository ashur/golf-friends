const Club = require( '../club' );

class HighAndTight extends Club
{
	constructor()
	{
		super( 'High and Tight' );

		this.accuracy = 0.75;
		this.minDistance = 100;
		this.maxDistance = 150;
	}
}

module.exports = HighAndTight;
