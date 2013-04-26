(function( $ ) {

	var $tooltip = $( '<div class="tooltip" />' );
	
	$.fn.tooltip = function( content ) {
		if( content )
		var offset = this.offset();

		$tooltip.html( content )
			.css ({
				top: offset.top,
				left: offset.left + 50
			})
			.hide()
			.appendTo( 'body' )
			.fadeIn();
	} else {
		$tooltip.detached();
	}

}( jQuery ));
