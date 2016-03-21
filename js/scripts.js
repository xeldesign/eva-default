// --------------------------------------------------------- //
// Smooth scroll
// --------------------------------------------------------- //

smoothScroll.init();

// --------------------------------------------------------- //
// WOW animate initialised
// --------------------------------------------------------- //

new WOW().init();


// --------------------------------------------------------- //
// Loader
// --------------------------------------------------------- //

$(window).load(function () {
	$(".loader").fadeOut(1000);
})


// --------------------------------------------------------- //
// Navigation Opacity Change when scroll
// --------------------------------------------------------- //


function checkScroll() {
	var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

	if ($(window).scrollTop() > startY) {
		$('.navbar').addClass("scrolled");
	} else {
		$('.navbar').removeClass("scrolled");
	}
}

if ($('.navbar').length > 0) {
	$(window).on("scroll load resize", function () {
		checkScroll();
	});
}

// --------------------------------------------------------- //
// Masonary
// --------------------------------------------------------- //


$('.grid').masonry({
	// options...
	itemSelector: '.grid-item',
	columnWidth: 0
});


// --------------------------------------------------------- //
// Isotope for Masonary
// --------------------------------------------------------- //

$(document).ready(function () {

	$('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});

});


// --------------------------------------------------------- //
// Loading effect
// --------------------------------------------------------- //

$(window).load(function () {
	$('#page').addClass('displayed');
});
