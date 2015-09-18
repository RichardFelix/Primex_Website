

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


/* =================== Load Function =================== */
$(window).load(function() {
    "use strict";
    /* ----------- Page Loader ----------- */
    $(".loader-item").delay(700).fadeOut();
    $("#pageloader").delay(1000).fadeOut("slow");
    /* ----------- Pretty Photo ----------- */
//	"use strict";
//    $("a[data-rel^='prettyPhoto']").prettyPhoto({
//        deeplinking: false
//    });
//	"use strict";
//    initPortfolioGrid();
    
    
});
/* =================== Load Function Ends =================== */




/* =================== Ready Function =================== */

$(document).ready(function() {




//    //$('.input-name').enter(function() {
//	$(document).on( 'blur', '.subscibe', function(e){
//		"use strict";
//        var email = $("#subscribe_email").val();
//        if (!valid_email_address($("#subscribe_email").val())) {
//            $(".message").html('The email address you entered was invalid. Please make sure you enter a valid email address to subscribe.');
//        } else {
//
//            $(".message").html("<span style='color:green;'>Adding your email address...</span>");
//            $.ajax({
//                url: 'mailchimp/subscribe.php',
//                data: {
//                    'email': email
//                },
//                type: 'POST',
//                success: function(msg) {
//                    if (msg == "success") {
//                        $("#subscribe_email").val("");
//                        $(".message").html('<span style="color:green;">You have successfully subscribed to our mailing list.</span>');
//
//                    } else {
//                        $(".message").html('something wrong.');
//                    }
//                }
//            });
//        }
//
//        return false;
//    });




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

     Fixed Menu on Scroll

    --------------------------- */
//
//    $(function() {
//        "use strict";
//        $(".sticker").sticky({
//            topSpacing: 0
//        });
//    });


    /* ---------------------------

     Menu Tooggle 

    --------------------------- */

    /* header Contact (Phone) */
	$(document).on( 'click', '.header-contact', function(e){
		"use strict";
        $(".header-contact-content").show("fast", function() {});
		$(document).on( 'click', '.close', function(e){
            $(".header-contact-content").hide("fast", function() {});
        })
    });



    /* header Search (Search Form) */
	$(document).on( 'click', '.header-search', function(e){
		"use strict";
        $(".header-search-content").show("fast", function() {});
		$(document).on( 'click', '.close', function(e){
            $(".header-search-content").hide("fast", function() {});
        })
    });



    /* header Share (Search Social Icons) */
	$(document).on( 'click', '.header-share', function(e){
		"use strict";
        $(".header-share-content").show("fast", function() {});
		$(document).on( 'click', '.close', function(e){
            $(".header-share-content").hide("fast", function() {});
        })
    });


    /* ---------------------------

     Load More 

    --------------------------- */

//    var loadtext = $('.load-more');
//	$(document).on( 'click', '.load-posts', function(e){
//		"use strict";
//        if ($(this).hasClass('disable')) return false;
//
//        $(this).html('<i class="fa fa-spin fa-spinner"></i> Loading');
//
//        var $hidden = loadtext.filter(':hidden:first').delay(600);
//
//        if (!$hidden.next('.load-more').length) {
//            $hidden.fadeIn(500);
//            $(this).addClass('disable');
//            $(this).fadeTo("slow", 0.23) /*.delay(600)*/
//                .queue(function(n) {
//                    $(this).html('All Posts Loaded <i class="icon-checkmark2"></i>');
//                    n();
//                }).fadeTo("slow", 1);
//
//        } else {
//            $hidden.fadeIn(500);
//            $(this).fadeTo("slow", 0.23) /*.delay(600)*/
//                .queue(function(g) {
//                    $(this).html('Load More Post <i class="icon-curved-arrow">');
//                    g();
//                }).fadeTo("slow", 1);
//
//        }
//    });



    /* ---------------------------

     Counter

    --------------------------- */

//$(".count-number").appear(function(){
//		$('.count-number').each(function(){
//			datacount = $(this).attr('data-count');
//			$(this).find('.counter').delay(6000).countTo({
//				from: 10,
//				to: datacount,
//				speed: 3000,
//				refreshInterval: 50,
//			});
//		});
//	});


    /* ---------------------------

     Day Counter 

    --------------------------- */

//    countDown();
//
//    function countDown() {
//		"use strict";
//        $('.countdown').each(function() {
//            var counter_id = $(this).attr('id');
//            var counter_type = $(this).data('counter');
//            var year = $(this).data('year');
//            var month = $(this).data('month');
//            var date = $(this).data('date');
//
//            var countDay = new Date();
//            countDay = new Date(year, month - 1, date);
//
//            if (counter_type == "down") {
//                $("#" + counter_id).countdown({
//                    labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Mins', 'Secs'],
//                    labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Min', 'Sec'],
//                    until: countDay
//                });
//            } else if (counter_type == "up") {
//                $("#" + counter_id).countdown({
//                    labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Mins', 'Secs'],
//                    labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Min', 'Sec'],
//                    since: countDay
//                });
//            }
//        });
//    }



    /* ---------------------------

     Progrss Bar

    --------------------------- */
    var bar = $('.progress-bar');
    $(bar).appear(function() {
        bar_width = $(this).attr('aria-valuenow');

        $(this).width(bar_width + '%');
        $(this).find('span').fadeIn(500);
    });




    /* -----------------Background Super Slides-------------- */
    $(function() {
        "use strict";
        if ($("#slides").length) {
            $('#slides').superslides({
                animation: 'fade',
                play: 7000,
                animation_speed: 2000
            });
        }
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

    $(".owl-example2").owlCarousel({

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

    /* ============ Client Slider =============== */
    $(".client-slider").owlCarousel({
        items: 4,
        lazyLoad: true,
        autoPlay: true,
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        pagination: false,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [767, 2],
        itemsTabletSmall: [480, 1],
        itemsMobile: [360, 1]
    });

    /* ============ Feed Back Slider =============== */
    $(".feedback-slider").owlCarousel({
        items: 3,
        lazyLoad: true,
        autoPlay: true,
        navigation: false,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        pagination: true,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [767, 2],
        itemsTabletSmall: [480, 1],
        itemsMobile: [360, 1]
    });




    /* ---------------------------

     Text Slider

    --------------------------- */

//    var dd = $('.text-scroll-slider').easyTicker({
//        direction: 'up',
//        easing: 'easeInOutExpo',
//        speed: 'slow',
//        interval: 3900,
//        height: 'auto',
//        visible: 1,
//        mousePause: 0,
//        controls: {
//            up: '.up',
//            down: '.down',
//            toggle: '.toggle',
//            stopText: 'Stop !!!'
//        }
//    }).data('easyTicker');
//
//    var dd1 = $('.template_path_tweets').easyTicker({
//        direction: 'up',
//        easing: 'easeInOutBack',
//        speed: 'slow',
//        interval: 2000,
//        height: 'auto',
//        visible: 3,
//        mousePause: 0,
//        controls: {
//            up: '.up',
//            down: '.down',
//            toggle: '.toggle',
//            stopText: 'Stop !!!'
//        }
//    }).data('easyTicker');

    /* ---------------------------

     Text Typed Slider

    --------------------------- */

//    $(".element").each(function() {
//        var $this = $(this);
//        $this.typed({
//            strings: $this.attr('data-elements').split(','),
//            loop: true,
//            typeSpeed: 100, // typing speed
//            backDelay: 3000 // pause before backspacing
//        });
//    });
//
//    $.ajax({
//            method: "POST",
//            url: "twitter/tweet-api.php",
//            data: {}
//        })
//        .done(function(msg) {
//            $(".twitter").append(msg);
//        });




    /* ---------------------------

     Social Feed

    --------------------------- */
//    locationSocialFeed();
//
//    function locationSocialFeed() {
//        var $ = jQuery,
//            socialFeed = $('.social-feed');
//
//        if (typeof($.fn.isotope) !== 'undefined') {
//            socialFeed.isotope({
//                itemSelector: '.isotope-item',
//            }).addClass('loaded');
//
//            $('#load-more').click(function() {
//                var item1, item2, item3, items, tmp;
//
//                items = socialFeed.find('.item-clone');
//                item1 = $(items[Math.floor(Math.random() * items.length)]).clone();
//                item2 = $(items[Math.floor(Math.random() * items.length)]).clone();
//                item3 = $(items[Math.floor(Math.random() * items.length)]).clone();
//                tmp = $().add(item1).add(item2).add(item3);
//
//                var images = tmp.find('img');
//
//                images.imagesLoaded(function() {
//                    return socialFeed.isotope('insert', tmp);
//                });
//            });
//        }
//    }

    /* ---------------------------

     Social Photo Stream

    --------------------------- */
//    socialPhotostream();
//
//    function socialPhotostream() {
//        if ($(".my-feeds").length != 0) {
//            /* ================ FLICKR FEED ================ */
//            $('.flickr-feed').socialstream({
//                    socialnetwork: 'flickr',
//                    limit: 12,
//                    username: 'Envato'
//                })
//                /* ================ PINTEREST FEED ================ */
//            $('.pinterest-feed').socialstream({
//                    socialnetwork: 'pinterest',
//                    limit: 12,
//                    username: 'vmrkela'
//                })
//                /* ================ INSTAGRAM FEED ================ */
//            $('.instagram-feed').socialstream({
//                    socialnetwork: 'instagram',
//                    limit: 12,
//                    username: 'google'
//                })
//                /* ================ INSTAGRAM FOOTER FEED ================ */
//            $('.instagram-footer-feed').socialstream({
//                    socialnetwork: 'instagram',
//                    limit: 10,
//                    username: 'google'
//                })
//                /* ================ DRIBBBLE FEED ================ */
//            $('.dribbble-feed').socialstream({
//                    socialnetwork: 'dribbble',
//                    limit: 15,
//                    username: 'envato'
//                })
//                /* ================ NEWSFEED ================ */
//            $('.instagram-footer-feed').socialstream({
//                    socialnetwork: 'newsfeed',
//                    limit: 10,
//                    username: '#'
//                })
//                /* ================ PICASA FEED ================ */
//            $('.picasa-feed').socialstream({
//                socialnetwork: 'picasa',
//                limit: 15,
//                username: 'envato'
//            });
//            /* ================ YOUTUBE FEED ================ */
//            $('.youtube-feed').socialstream({
//                socialnetwork: 'youtube',
//                limit: 15,
//                username: 'Envato'
//            })
//
//        }
//    }
    /* ----------------------------------

     Contact Form

    ----------------------------------- */
//	$(document).on( 'click', '#sendingbtn', function(e){
//        var contact_name = $("#contact_name").val();
//        var contact_email = $("#contact_email").val();
//        var contact_message = $("#contact_message").val();
//        var contact_phoneno = $("#contact_phoneno").val();
//        $.ajax({
//
//            'url': 'process/mail.php',
//            'type': 'POST',
//            'data': {
//                contact_name: contact_name,
//                contact_email: contact_email,
//                contact_message: contact_message,
//                contact_phoneno: contact_phoneno
//            },
//            'success': function(data) {
//                $(".form-message").empty();
//				$(".form-message").css("display","block");
//                $(".form-message").append(data);
//            }
//        });
//
//
//    });

    /*------------------- Contact Form Ends ---------------------------------------- */
}); /*------------------- Ready Fuction Ends ---------------------------------------- */


/* =================== ONLOAD FUCTION ======================= */

/* ----------------------------------

 Google Map

----------------------------------- */

//window.onload = MapLoadScript;
//
//function GmapInit() {
//    Gmap = $('.map-canvas');
//    Gmap.each(function() {
//        var $this = $(this),
//            lat = -35.2835,
//            lng = 149.128,
//            zoom = 12,
//            scrollwheel = false,
//            zoomcontrol = true,
//            draggable = true,
//            mapType = google.maps.MapTypeId.ROADMAP,
//            title = '',
//            contentString = '',
//            dataLat = $this.data('lat'),
//            dataLng = $this.data('lng'),
//            dataZoom = $this.data('zoom'),
//            dataType = $this.data('type'),
//            dataScrollwheel = $this.data('scrollwheel'),
//            dataZoomcontrol = $this.data('zoomcontrol'),
//            dataHue = $this.data('hue'),
//            dataTitle = $this.data('title'),
//            dataContent = $this.data('content');
//
//        if (dataZoom !== undefined && dataZoom !== false) {
//            zoom = parseFloat(dataZoom);
//        }
//        if (dataLat !== undefined && dataLat !== false) {
//            lat = parseFloat(dataLat);
//        }
//        if (dataLng !== undefined && dataLng !== false) {
//            lng = parseFloat(dataLng);
//        }
//        if (dataScrollwheel !== undefined && dataScrollwheel !== null) {
//            scrollwheel = dataScrollwheel;
//        }
//        if (dataZoomcontrol !== undefined && dataZoomcontrol !== null) {
//            zoomcontrol = dataZoomcontrol;
//        }
//        if (dataType !== undefined && dataType !== false) {
//            if (dataType == 'satellite') {
//                mapType = google.maps.MapTypeId.SATELLITE;
//            } else if (dataType == 'hybrid') {
//                mapType = google.maps.MapTypeId.HYBRID;
//            } else if (dataType == 'terrain') {
//                mapType = google.maps.MapTypeId.TERRAIN;
//            }
//        }
//        if (dataTitle !== undefined && dataTitle !== false) {
//            title = dataTitle;
//        }
//        if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
//            draggable = false;
//        }
//
//        var mapOptions = {
//            zoom: zoom,
//            scrollwheel: scrollwheel,
//            zoomControl: zoomcontrol,
//            draggable: draggable,
//            center: new google.maps.LatLng(lat, lng),
//            mapTypeId: mapType
//        };
//        var map = new google.maps.Map($this[0], mapOptions);
//
//        var image = 'img/map-marker.png';
//        if (dataContent !== undefined && dataContent !== false) {
//            contentString = '<div class="map-data">' + '<h6>' + title + '</h6>' + '<div class="map-content">' + dataContent + '</div>' + '</div>';
//        }
//        var infowindow = new google.maps.InfoWindow({
//            content: contentString
//        });
//
//        var marker = new google.maps.Marker({
//            position: new google.maps.LatLng(lat, lng),
//            map: map,
//            icon: image,
//            title: title
//        });
//        if (dataContent !== undefined && dataContent !== false) {
//            google.maps.event.addListener(marker, 'click', function() {
//                infowindow.open(map, marker);
//            });
//        }
//
//        if (dataHue !== undefined && dataHue !== false) {
//            var styles = [{
//                stylers: [{
//                    hue: dataHue
//                }, {
//                    saturation: 80
//                }, {
//                    lightness: -10
//                }]
//            }];
//            map.setOptions({
//                styles: styles
//            });
//        }
//    });
//}
//
//
//function MapLoadScript() {
//    var script = document.createElement('script');
//    script.type = 'text/javascript';
//    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=GmapInit';
//    document.body.appendChild(script);
//}
/*------------------- Onload Fuction Ends ---------------------------------------- */



/* ----------------------------------

 Portfolio Filter

----------------------------------- */
//
//function initPortfolioGrid() {
//    $('.project-grid').each(function() {
//        var $port_container = $(this);
//
//        var filter_selector = $port_container.parent().find('.project-filters a.active').data('filter');
//
//        $port_container.isotope({
//            itemSelector: '.item',
//            filter: filter_selector,
//            animationEngine: "css",
//            masonry: {
//                columnWidth: '.grid-sizer'
//            }
//        });
//
//        // Portfolio Filter Items
//		$(document).on( 'click', '.project-filters a', function(e){
//            $(this).parent().parent().find('a.active').removeClass('active');
//            $(this).addClass('active');
//            var selector = $(this).parent().parent().find('a.active').attr('data-filter');
//            $(this).parents().find('.project-grid').isotope({
//                filter: selector,
//                animationEngine: "css"
//            });
//
//            return false;
//        });
//    });
//}
//var polarData = [{
//        value: 500,
//        color: "#3AACC6",
//        highlight: "#FF5A5E",
//        label: "Case Won"
//    }, {
//        value: 280,
//        color: "#73CDB4",
//        highlight: "#73CDB4",
//        label: "On Hold"
//    }, {
//        value: 420,
//        color: "#FDD3A9",
//        highlight: "#FFC870",
//        label: "Running Case"
//    }, {
//        value: 300,
//        color: "#FC8E77",
//        highlight: "#FC8E77",
//        label: "Case Dismiss"
//    },
//
//];
//if ($("#chart-area").length) {
//var ctx = document.getElementById("chart-area").getContext("2d");
//window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
//            responsive: true
//        });
//		 }

function valid_email_address(email) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(email);
}

