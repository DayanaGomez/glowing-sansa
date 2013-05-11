
var $slider; 	// reference to our slider
var $slides; 	// holds our individual slides
var $dots; 		// holds reference to our dots
var $arrows; 	// holds reference to our arrows
var $rightArrow; //holds reference to the right arrow
var max; 		// maximun number of slides in our slides show
var index = 0;	// holds number representing active slide
var timer;		// timer for autoplay
var isAuto;		// checks to see if it should autoplay



/**
	Kick starts the party
*/ 

function init() {
	// go get our pointers
	$slider = $( '.slider' );
	$slides = $slider.find( '.slides li' );
	drawDots();
	drawArrows();
	$dots.eq( 0 ).trigger( 'click', true );




}

/**
	Create dots or pagination
*/ 

function drawDots() {

	// create an unorder list
	var $pagination = $( '<ul class="pagination"></ul>' );

	// creates dots for each slides
	$slides.each(function() {
		$pagination.append( '<li>&bull;</li>' );

	});

	// add an event to the dots
	$pagination.on( 'click', 'li', slide );

	// add dots to sliders 
	$slider.append( $pagination );

	$dots = $pagination.children();
	max = $dots.length; // number of slides
	// center pagination
	$pagination.css( 'width', max * $dots.outerWidth() );

/**
	Create arrows
*/ 

}
function drawArrows() {

	$arrows = $(  
		'<div class="arrow right-arrow"></div>' +
		'<div class="arrow left-arrow"></div>'

	)
	.hover( fadeArrow )
	.click( triggerSlide );

	$rightArrow = $arrows.eq( 0 );

	$slider.append( $arrows )
		.hover( toggleArrows );





}

/**
	Makes the slides animate in and out
*/ 

function slide( event, wasTriggered ) {

	var $this = $( this ); 

	isAuto = wasTriggered;

	if ( !isAuto ) {
		clearTimeout( timer );

	}


	// grab clicked dots index number
	index = $this.index();
	// get reference to slide that nees to fade in
	$slides.stop().eq( index )
		.fadeTo( 500, 1 , postSlide )
		.siblings().fadeTo( 500, 0 );

	// animate clicked dot to red
	$this.animate({
		color : 'red'
	}, 500 )
	// animate
	.siblings().stop().animate({
		color : 'black'
	}, 500 );

}
// fades arrowsin and out

function toggleArrows( event ) {
	
	var opacity = 0;

	if ( event.type === 'mouseenter' ) {
		opacity = 0.5;
	}


	$arrows.stop().fadeTo( 250, opacity );
}

// fades arrow to 100%
function fadeArrow( event ) {

	var opacity = 0.5;

	//event.stopPropagation();

	if ( event.type === 'mouseenter' ){
		opacity = 0.75;
	}

	$( this ).stop().fadeTo( 250, opacity );

}

function triggerSlide( event, wasTriggered ) {

	var isLeftArrow = $( this ).hasClass( 'left-arrow' );
	var newIndex;

	if ( isLeftArrow ) {

		if ( index === 0 ) {
			newIndex = max - 1;
		} else {
			newIndex = index - 1;
		}

	} else {

		if ( index === max - 1 ) {
			newIndex = 0;
		} else {
			newIndex = index + 1;
		}

	}

	$dots.eq( newIndex ).trigger( 'click', wasTriggered );

}
// Caption animation
function postSlide() {

	var $this = $( this );

	$this.children( 'p' ).animate({
		bottom : '0px',
		opacity: 1

	}, 500 );

	$this.siblings().children( 'p' ).css({

		bottom : '-20px',
		opacity : 0

	});

	if ( isAuto ) {

		autoPlay( 5000 );
	} else {
		autoPlay( 10000 );

	}

}

/**
	Autoplay

*/

function autoPlay ( time ) {

	timer = setTimeout(function() {

		$rightArrow.trigger( 'click', true );

	}, time );
	
}





$( 'html' ).addClass( 'js' );
// calls init function when document is ready for us
$( document ).ready( init );













































