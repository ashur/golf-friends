const Club = require( '../club' );

class NutterButterPutter extends Club
{
	constructor()
	{
		super( 'Nutter Butter Putter' );
	
		this.accuracy = 1.0;
		this.minDistance = 1;
		this.maxDistance = 5;
	}
}

module.exports = NutterButterPutter;
