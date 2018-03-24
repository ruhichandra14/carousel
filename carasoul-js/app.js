var carouselApp = (function(){

	var first = 0;
	var last = 3;
	var nextSlide = document.getElementsByClassName("next")[0];
	var prevSlide = document.getElementsByClassName("prev")[0];

	function initCarousel(){
		displaySlides(first, last);
		nextSlide.addEventListener("click", nextSlideHandler);
		prevSlide.addEventListener("click", prevSlideHandler);
	}


	function displaySlides(first, last){
		var slides = document.getElementsByClassName("mySlides");
		for(var i=0;i<slides.length;i++){
			if(i >= first && i < last){
				slides[i].style.display = 'inline-block';
			}
			else{
				slides[i].style.display = 'none';
			}
		}
	}


	function nextSlideHandler(){	
		first = last;
		last = first + 3;
		if(last == 12){
			nextSlide.style.visibility = 'hidden' ;
		}
		prevSlide.style.visibility = 'visible';
		displaySlides(first,last);
	}

	function prevSlideHandler(){
		last = first;
		first = last-3;
		if(first <= 0){
			prevSlide.style.visibility = 'hidden' ;	
		}
		nextSlide.style.visibility = 'visible';
		displaySlides(first,last);
	}


	return{
		initCarousel : initCarousel
	}


})();

carouselApp.initCarousel();


