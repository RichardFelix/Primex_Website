	  // -------------------------------------------------------------
    // INDEX
    // -------------------------------------------------------------
    //	1. Google Map Customization
    //	2. WOW setup
    //	3. Timer setup
    //	4. progress-bar activator
    //	5. Scroll Menu / Navigation Scroll
    //	6. Collapse menu on click (only for mobile)
    //	7. Accordion
    //	8. bxSlider
    //  9. Call Button (only for mobile)
    // -------------------------------------------------------------
    // End INDEX
    // -------------------------------------------------------------



    // -------------------------------------------------------------
    // Google Map Customization
    // -------------------------------------------------------------

		jQuery(function ($) {
			
			'use strict';

			var map;
     
			map = new GMaps({
				el: '#map-wrapper',
				lat: 40.741193,
				lng:  -73.993081,
				scrollwheel:false,
				zoom: 16,
				zoomControl : true,
				panControl : true,
				streetViewControl : true,
				mapTypeControl: false,
				overviewMapControl: false,
				clickable: true
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
            
            google.maps.event.trigger(map.markers[0], 'click');
            
            
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
    // Timer setup
    // -------------------------------------------------------------


		$('#achievement').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});


    // -------------------------------------------------------------
    // progress-bar activator
    // -------------------------------------------------------------

		$('#about-our-firm').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
					if (visible) {
					$(this).find('.progress-bar').each(function () {
					var $this = $(this);
					var width = $this.text();
					$(this).animate({width:width, duration:1000,});   
					$({ Counter: 0 }).animate( { Counter: $this.text() }, {
						duration: 6000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter)+'%');
						}
					});
				});
				$(this).unbind('inview');
			}
		});
    
	

	// -------------------------------------------------------------
	// Scroll Menu / Navigation Scroll
	// -------------------------------------------------------------
		
		
	    (function () {

			$(window).scroll(function(event) {
				Scroll();
			});	
			
			$('.navbar-collapse ul li a').click(function() {  
				$('html, body').animate({scrollTop: $(this.hash).offset().top -65}, 1000);
				return false;
			});
			
			// User define function
			function Scroll() {
				var contentTop      =   [];
				var contentBottom   =   [];
				var winTop      =   $(window).scrollTop();
				var rangeTop    =   200;
				var rangeBottom =   500;
				$('.navbar-collapse').find('.scroll a').each(function(){
					contentTop.push( $( $(this).attr('href') ).offset().top);
					contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
				})
				$.each( contentTop, function(i){
					if ( winTop > contentTop[i] - rangeTop ){
						$('.navbar-collapse li.scroll')
						.removeClass('active')
						.eq(i).addClass('active');			
					}
				})

			};
	    	
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




	// -------------------------------------------------------------
	// Accordion
	// -------------------------------------------------------------

		(function () {	
			$('.collapse').on('show.bs.collapse', function() {
				var id = $(this).attr('id');
				$('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
				$('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
			});

			$('.collapse').on('hide.bs.collapse', function() {
				var id = $(this).attr('id');
	     		$('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-faq');
				$('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-right"></i>');
			});
		}());



	// -------------------------------------------------------------
	// Contact form
	// -------------------------------------------------------------
	
	//Ajax contact

$(function() {
$('#contact-form').submit(function() {
var name = $('#name').val();
var email =$('#email').val();
var subject =$('#subject').val();
var message =$('#message').val();
        $.ajax({
            type: 'POST',
            url: './sendemail.php',
            data: { name:name, email:email, subject:subject, message:message,  }
        });
		$('#contact-form').trigger('reset');
		$('.show-on-success').show("slow");
        return false;
    }); 
})
	
    // -------------------------------------------------------------
	// bxSlider
	// -------------------------------------------------------------
		$('.slider').bxSlider({ auto:true,touchEnabled:false, controls:false, 
		onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
		    console.log(currentSlideHtmlObject);
		    $('.active-slide').removeClass('active-slide');
		    $('.slider>.item').eq(currentSlideHtmlObject + 1).addClass('active-slide')
		},
		onSliderLoad: function () {
		    $('.slider>.item').eq(1).addClass('active-slide')
		}, });

//------------------------------------
// call button ( mobile phone only )
//-------------------------------------
/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

    if(jQuery.browser.mobile){  
        $("h2#click2call").replaceWith('<button class="btn wow fadeInRight" data-wow-duration="700ms" data-wow-delay="700ms"><a href="#how-to-reach-us" id="call">Click to Call</a></button>');
        $("a#call").attr("href", "tel:18776789830");
    }


