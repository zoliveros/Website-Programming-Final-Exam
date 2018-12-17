// you want to wrap everything until everything is ready to go
$(document).ready(function(){

	// set the slideindex to 0 / 1, whichever makes more sense to you
	var slideIndex = 1;
	showSlides(slideIndex);


	// n represents which slides to show, in this case it's 0
	function showSlides(n){
		// setting var slides - with the class name .mySlides
		var slides = $(".Slides");
		var dots = $(".dot");


		// if user click next, went on last image, we're gonna set the slideIndex to 1
		if (n > slides.length){
			slideIndex = 1;
		}

		// if user click previous when on 1 image, we're gonna send them to the last image
		if (n < 1){
			slideIndex = slides.length;
		}

		//looping through my slides and get rid of them
		for (var i=0; i < slides.length; i++){
			slides[i].style.display="none";
		}


		// replaceing class name for dotsonce it's active
		for (var i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace("active","")
		}

		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += " active";
		// the space before active is needed.
	};

	// telling the arrows and dots to do something
	$(".prev").click(function(){
		slideIndex -= 1;
		showSlides(slideIndex);
	});

	$(".next").click(function(){
		slideIndex += 1;
		showSlides(slideIndex);
		// have to tell which slide to show-- here comes in (slideIndex)
	});

	$(".dot").click(function(){
		// gotta look at var of index for .dots, and select in this index
		//index will be 0,1,2 or 3; but for make it logically more simpler we do it 1,2,3,4; so slideIndex = index + 1
		var index = $(".dot").index(this);
		slideIndex = index + 1;
		showSlides(slideIndex);
	});


 	$("img").fadeout();


});
