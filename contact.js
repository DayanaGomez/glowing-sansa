var $myForm = $( 'myForm' );

$myForm.submit( stopSubmit );

function stopSubmit( e ) {

	e.preventDefault();

	var data = $( this ).serialize();

	$.post( this.action, data, removeForm );

}

function removeForm( response ) {
	var $html = $( response ).find( '#contact' ).html();
	//the simple way
	$myForm.parent().html( $html );

	var $popup = $( '<div class="popup"></div>' );
	$popup.append ( $html );
	$( 'body' ).append( $popup );
	$popup.delay( 2500 ).fadeout();
	$( '#contact' ).slideUp( 1000 );


}