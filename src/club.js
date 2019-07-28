const crypto = require( 'crypto' );

let maxHex = 'fff';
let maxValue = parseInt( maxHex, 16 )

class Club
{
	constructor( name )
	{
		this.name = name;
		this.hash = crypto.createHash( 'md5' )
			.update( name )
			.digest( 'hex' );

		this.accuracy = this.valueOf( this.subhash( 0 ) );

		let range = Math.ceil( this.valueOf( this.subhash( 1 ) ) * 25 );
		this.minDistance = Math.round(
			(this.valueOf( this.subhash( 2 ) ) * 10) *
			(this.valueOf( this.subhash( 3 ) ) * 10)
		);
		this.maxDistance = this.minDistance + range;

		this.attempt = 'max';
	}

	subhash( index )
	{
		let start = index * maxHex.length;
		let end = index * maxHex.length + maxHex.length

		return this.hash.substring( start, end );
	}

	swing( attempt )
	{
		let distance = 0;

		if( Math.random() > this.accuracy )
		{
			distance = this.minDistance + Math.random() * (this.maxDistance - this.minDistance);
		}
		else
		{
			if( attempt > this.maxDistance )
			{
				distance = this.maxDistance;
			}
			else
			{
				if( attempt < this.minDistance )
				{
					distance = this.minDistance;
				}
				else
				{
					distance = attempt;
				}
			}
		}

		return Math.round( distance );
	}

	valueOf( subhash, minValue=0 )
	{
		let raw = parseInt( subhash, 16 );
		let value = (raw / maxValue) + minValue;
		return parseFloat( value.toFixed( 3 ) );
	}
}

module.exports = Club;
