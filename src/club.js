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
		this.power = this.valueOf( this.subhash( 1 ) );
	}

	subhash( index )
	{
		let start = index * maxHex.length;
		let end = index * maxHex.length + maxHex.length

		return this.hash.substring( start, end );
	}

	valueOf( subhash )
	{
		let raw = parseInt( subhash, 16 );
		return (raw / maxValue).toFixed( 3 );
	}
}

module.exports = Club;
