jQuery(function ($) {
    'use strict';

    // -------------------------------------------------------------
    //	1. Scroll Menu / Navigation Scroll
    // -------------------------------------------------------------
		
		$(window).bind('scroll', function(){
		if($(this).scrollTop() > 10) {
		$(".navbar").addClass('sticky'); }
		else if($(this).scrollTop() <= 10) {
		$(".navbar").removeClass('sticky'); }
		});
		});

    // -------------------------------------------------------------
    // WOW setup
    // -------------------------------------------------------------		


		jQuery(function ($) {
			var wow = new WOW({
			mobile:       true
			});
			wow.init();
		}());
		



