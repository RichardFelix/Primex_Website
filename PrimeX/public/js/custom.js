/* =================== Ready Function =================== */

$(document).ready(function() {

    /* -------------------------------------------------

     Background image height equal to the browser height

    --------------------------------------------------- */

    $(window).on('resize', function() {
        $('.wide-container').css({
            'height': $(window).height()
        });
    });

    /*----------------------------------

      Form sizing on large displays

    ------------------------------------*/
    if($(window).width() > 1500){
        $('#formid').attr('class', 'col-md-8 col-md-offset-3 col-lg-6 ');
    }

    /* ---------------------------

     Scroll Navigation

    --------------------------- */

    $(function() {
        "use strict";
        $('.scroll' || '#scroll').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = $('#navigation-menu').outerHeight();
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 45 + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /* ---------------------------

     Owl Slider

    --------------------------- */

    $(".owl-example1").owlCarousel({

        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        pagination: false,
        singleItem: true,
        autoPlay: true
    });

}); /*------------------- Ready Fuction Ends ---------------------------------------- */

	// -------------------------------------------------------------
	// Collapse menu on click (only for mobile)
	// -------------------------------------------------------------

		$(function(){
			$(".navbar-collapse a").click(function(){
				$(".navbar-collapse").removeClass("in");
				$(".navbar-collapse").css({'height': '0px'});
			});
		}());
