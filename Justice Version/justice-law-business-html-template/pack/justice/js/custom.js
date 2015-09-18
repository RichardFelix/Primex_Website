

    // -------------------------------------------------------------
    // Google Map Customization
    // -------------------------------------------------------------

		jQuery(function ($) {
			
			'use strict';

			var map;
     
			map = new GMaps({
				div: '#map-wrapper',
				lat: 40.741193,
				lng:  -73.993081,
				scrollwheel:false,
				zoom: 16,
				zoomControl : false,
				panControl : false,
				streetViewControl : false,
				mapTypeControl: false,
				overviewMapControl: false,
				clickable: true,
                draggable: false 
			});
            
			var image = '';
			map.addMarker({
				lat: 40.741193,
				lng:  -73.993081,
				icon: image,
				animation: google.maps.Animation.DROP,
				verticalAlign: 'bottom',
				horizontalAlign: 'center',
				backgroundColor: '#d0cfd3',
                infoWindow: {
                  content: '<p style="color:black">PrimeX<br/>54 West 21 Street<br/>12 Floor<br/>New York, NY 10010</p>'
                }   
			})
            
//            google.maps.event.trigger(map.markers[0], 'click');
            
            
			var styles = [ 

			{
				"featureType": "road",
				"stylers": [
				{ "color": "#ffffff" }
				]
			},{
				"featureType": "water",
				"stylers": [
				{ "color": "#99b3cc" }
				]
			},{
				"featureType": "landscape",
				"stylers": [
				{ "color": "#f2efe9" }
				]
			},{
				"elementType": "labels.text.fill",
				"stylers": [
				{ "color": "#d3cfcf" }
				]
			},{
				"featureType": "poi",
				"stylers": [
				{ "color": "#ded2ac" }
				]
			},{
				"elementType": "labels.text",
				"stylers": [
				{ "saturation": 1 },
				{ "weight": 0.1 },
				{ "color": "#000000" }
				]
			}

			];

			map.addStyle({
				styledMapName:"Styled Map",
				styles: styles,
				mapTypeId: "map_style"  
			});

			map.setStyle("map_style");
            
		}());

	// -------------------------------------------------------------
	// Collapse menu on click (only for mobile)
	// -------------------------------------------------------------

		$(function(){
			$(".navbar-collapse a").click(function(){
				$(".navbar-collapse").removeClass("in");
				$(".navbar-collapse").css({'height': '0px'}); 
			});
		}());



/* =================== Ready Function =================== */

$(document).ready(function() {


    /* -------------------------------------------------

     Background image height equal to the browser height

    --------------------------------------------------- */

    $('.wide-container').css({
        'height': $(window).height()
    });
    $(window).on('resize', function() {
        $('.wide-container').css({
            'height': $(window).height()
        });
    });

    /* -------------------------------------------------

     Background Image

    --------------------------------------------------- */

    bgImage();

    function bgImage() {
        var pageSection = $(".image-bg, .parallax-bg");
        pageSection.each(function(indx) {
            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });
    }



    /* ---------------------------

     Tooltips Calling

    --------------------------- */
	"use strict";
    $('[data-toggle="tooltip"]').tooltip();


    /* ---------------------------

     Scroll Navigation 

    --------------------------- */

    $(function() {
        "use strict";
        $('.scroll').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = $('#navigation-menu').outerHeight();
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 45 + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    
     $(function() {
        "use strict";
        $('#scroll').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = $('#navigation-menu').outerHeight();
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 45 + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
    });


    /* ---------------------------

     Animation

    --------------------------- */
    $(function() {
        "use strict";
        $('.animated').appear(function() {
            var elem = $(this);
            var animation = elem.data('animation');
            if (!elem.hasClass('visible')) {
                var animationDelay = elem.data('animation-delay');
                if (animationDelay) {
                    setTimeout(function() {
                        elem.addClass(animation + " visible");
                    }, animationDelay);
                } else {
                    elem.addClass(animation + " visible");
                }
            }
        });
    });


    /* ---------------------------

     Owl Slider

    --------------------------- */

    $(".owl-example1").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        pagination: false,
        singleItem: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoPlay: true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false
    });

}); /*------------------- Ready Fuction Ends ---------------------------------------- */


