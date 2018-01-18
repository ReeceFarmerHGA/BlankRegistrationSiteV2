/*eslint-env jquery*/

(function ($) {

	$(function () {

		'use strict';

		// DOM ready, take it away

		$(window).on('load', function() {
			var paddingHeight = $('header.header').outerHeight() + parseInt($('header.header').css('margin-bottom'));
			if($('section.hero').length > 0) {
				$('section.hero').css('margin-top', paddingHeight);
			} else {
				$('body').css('margin-top', paddingHeight);
			}

		});

		$(window).on('scroll load', function() {
			$('header.header').addClass('sticky');
			if($(this).scrollTop() > 200) {
				$('header.header').addClass('sticky--stuck');
			} else {
				$('header.header').removeClass('sticky--stuck');
			}
		});


		$('.hero-main').slick({
			arrows: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 4000,
			infinite: true,
			speed: 600,
			fade: true,
			cssEase: 'linear'
		});

	});

})(jQuery, this);
