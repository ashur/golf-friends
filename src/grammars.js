module.exports.firstNames = []
	.concat( require( 'corpora/data/animals/dog_names' )['dog_names'] )
	.concat( require( 'corpora/data/humans/firstNames' )['firstNames'] )

module.exports.lastNames = []
	.concat( require( 'corpora/data/geography/english_towns_cities' )['towns'] )
		.filter( town => town.indexOf( '-' ) === -1 )
	.concat( require( 'corpora/data/humans/spanishLastNames' )['lastNames'] )
	.concat( require( 'corpora/data/humans/lastNames' )['lastNames'] )
