var $myForm = $( 'myForm' );

$myForm.submit( stopSubmit );

function stopSubmit( e ) {

	e.preventDefault();

	var data = $( this ).serialize();

	$.post( this.action, data, removeForm );

}

function removeForm( response ) {
	var $html = $( response ).find( '#contact' ).html();

	$myForm.parent().html( $html );
}