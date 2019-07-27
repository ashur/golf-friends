class Golfer
{
	constructor( { firstName, middleInitial, lastName } )
	{
		this.firstName = firstName;
		this.middleInitial = `${middleInitial}.`;
		this.lastName = lastName;
	}

	get fullName()
	{
		return [this.firstName, this.middleInitial, this.lastName]
			.join( ' ' );
	}
}

module.exports = Golfer;
