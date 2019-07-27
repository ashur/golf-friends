class Hole
{
	constructor( length )
	{
		this.hazards = [];
		this.length = length;
	}

	hazard( name, distance )
	{
		let hazard = {
			name: name,
			distance: Math.floor( distance * this.length ),
		};

		this.hazards.push( hazard );
	}

	get par()
	{
		if( this.length <= 210 )
		{
			return 3;
		}
		else if( this.length <= 400 )
		{
			return 4;
		}
		else if( this.length <= 575 )
		{
			return 5;
		}

		return 6;
	}
}

module.exports = Hole;
