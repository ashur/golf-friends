const Ball = require( './ball' );

class Golfer
{
	constructor( { firstName, middleInitial, lastName } )
	{
		this.firstName = firstName;
		this.middleInitial = `${middleInitial}.`;
		this.lastName = lastName;

		this.ball = new Ball();
		this.clubs = [];
	}

	club( club )
	{
		this.clubs.push( club );
	}

	get fullName()
	{
		return [this.firstName, this.middleInitial, this.lastName]
			.join( ' ' );
	}

	swing( clubIndex, expected )
	{
		let club = this.clubs[clubIndex];
		let actual = expected * club.power;

		this.ball.distance += actual;
	}
}

module.exports = Golfer;
