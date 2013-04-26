
$( "a" ).mouseenter( showTooltip );

function showTooltip() {
	var $this = $( this );
	var title = $this.attr( 'title' );

	$this.tooltip( title )
}

function hideTooltip() {
	$( this ).tooltip (false);
}