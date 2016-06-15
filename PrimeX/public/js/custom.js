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


  /* -------------------------------------------------------------
     Google Map Customization
     ------------------------------------------------------------- */

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
