
(function ($) {
	"use strict";

    jQuery(document).ready(function($){


		/*---------------------------------------------*
		 * Scroll to Top
		 ---------------------------------------------*/
		
			jQuery("#backtotop").click(function () {
				jQuery("body,html").animate({
					scrollTop: 0
				}, 600);
			});
			jQuery(window).scroll(function () {
				if (jQuery(window).scrollTop() > 250) {
					jQuery("#backtotop").addClass("visible");
				} else {
					jQuery("#backtotop").removeClass("visible");
				}
			});
	
        /*---------------------------------------------*
		 * Sticky Menu
		 ---------------------------------------------*/

			$(".header-area").sticky({topSpacing:0});
		
		//Add smooth scrolling to all links -->
			$(".smooth-scroll a").on('click', function(event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
			  // Prevent default anchor click behavior
			  event.preventDefault();

			  // Store hash
			  var hash = this.hash;

			  // Using jQuery's animate() method to add smooth page scroll
			  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			  $('html, body').animate({
				scrollTop: $(hash).offset().top
			  }, 800, function(){
		   
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			  });
			} // End if
		  });

        /*---------------------------------------------*
		 * NiceScroll
		 ---------------------------------------------*/

		$("body").niceScroll({
			cursorwidth:12,
			cursoropacitymin:0.4,
			cursorcolor:'#6e8cb6',
			cursorborder:'none',
			cursorborderradius:4,
			autohidemode:'leave'
		});
		
   		/*---------------------------------------------*
		 * Bootstrap Scroolspy
		 ---------------------------------------------*/

			$('body').scrollspy({
				target: '.navbar-collapse',
				offset: 160
			});
	
			
		/*---------------------------------------------*
		 * Active and Removeclass in Navbar
		 ---------------------------------------------*/

		$(".main-menu ul.nav.navbar-nav li a").click(function(){
			$(".navbar-collapse").removeClass("in");
			
		});

		/*---------------------------------------------*
		 * Preloader
		 ---------------------------------------------*/

		jQuery(window).load(function(){

			$('.loader').fadeOut(); // will first fade out the loading animation
			$('.loader_cogs').delay(200).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(200).css({'overflow-x':'hidden'});


	    });
 
    });

	
    
	
		

	
	


}(jQuery));	
