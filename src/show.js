( async function ( ) {
		ss = [ ] ;
		ss . push ( "<table>" ) ;
		ss . push ( '<tr><th>filename' )
		const downloads = await browser . downloads . search ( { limit : 20 , orderBy : [ '-startTime' ] , state : 'complete' } ) ;
		for ( let down of downloads ) {
			ss . push ( '<tr><td>' )
			ss . push ( down . filename )
		}
		ss . push ( "</table>" ) ;
		document . getElementById ( "popup-content" ) . innerHTML = ss . join ( '' ) ;
	} ) ( ) ;

