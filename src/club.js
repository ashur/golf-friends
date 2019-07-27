const crypto = require( 'crypto' );

class Club
{
	constructor( name )
	{
		this.name = name;
		this.hash = crypto.createHash( 'md5' )
			.update( name )
			.digest( 'hex' );

		this.maxHex = 'fff';
		this.maxValue = parseInt( this.maxHex, 16 )
	}

	subhash( index )
	{
		let start = index * this.maxHex.length;
		let end = index * this.maxHex.length + this.maxHex.length

		return this.hash.substring( start, end );
	}

	get accuracy()
	{
		return this.valueOf( this.subhash( 0 ) );
	}

	get power()
	{
		return this.valueOf( this.subhash( 1 ) );
	}

	valueOf( subhash )
	{
		let raw = parseInt( subhash, 16 );
		return (raw / this.maxValue).toFixed( 3 );
	}
}

module.exports = Club;
