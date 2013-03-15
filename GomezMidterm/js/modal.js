var thumbnails = document.getElementsByClassName ('thumb');
var modal = document.getElementById('winmask');
var mainImage = document.getElementById('mainImage');
var closeButton = document.getElementById('close');
var nextButton = document.getElementById('next');
var previousButton = document.getElementById ('previous');
var counter; 

//console.log(thumbnails);

for (var i = 0; i < thumbnails.length; i++) {
	thumbnails[i].addEventListener('click', openModal);
}

closeButton.addEventListener('click', closeModal);
nextButton.addEventListener( 'click', showImage);
previousButton.addEventListener( 'click', showImage);

function openModal(event){
	event.preventDefault();
	counter = getIndex( this );
	console.log( counter );
	mainImage.src = this.href;
	modal.style.display = 'block';
}

function closeModal(){
	modal.style.display ='none';	
}

//moves to next image
function showImage(){
//determines which direction to go
	if ( this.id === 'next' ) {
		if(counter !== thumbnails.length -1){


		counter++;
		}else{
			counter = 0;
		} 
	} else{
			if ( counter !== 0 ){
				counter--;
			} else {
					counter = thumbnails.length -1;
				}
			}
			

	
//set images source to next anchors href
	mainImage.src = thumbnails[ counter ].href;
}

// pulls index of clicked image
function getIndex( element ){
	for ( var i = 0; i < thumbnails.length; i++){
		if (element === thumbnails [i]){
			return i;
		}
	}

}// JavaScript Document