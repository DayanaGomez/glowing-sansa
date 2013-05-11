$( document ).ready(function() {

	var $this;

	//entry point
	$( '.button' ).mouseover(function( e ) {

		$this = $( this );

		$this.siblings( '.content' ).stop().animate({
			width : '0px'

		}, 450);

		$this.next().stop().animate({

			width : '240px'

		}, 500);


	});

	$( '#accordian' ).mouseleave(function( e ) {

		$this.next().stop().animate({
			width : '0px'

		}, 500);

	});



});