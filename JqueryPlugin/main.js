function Person( name ) {
	this.name = name;
}

Person.prototype.sayName = function() {
	console.log( this.name );
};

var Mike = new Person ( 'Mike' );
var Joyce = new Person ( 'Joyce' );

Mike.sayName();
Joyce.sayName();

$( 'a' ).greenify().delay( 1000 ).hide();

var myObj = {};

myObj.returnMe = function() {
	return myObj;
};

myObj.seriously = function() {
	return myObj.returnMe();
}

$.fn.log = function( message ) {

	console.log( message );
};

$( 'a' ).log( 'hello' );

(function( $ ) {

 	$.fn.greenify = function() {
 		return this.css( 'color', 'green' );
 }( jQuery ));

