(function () {
	$('.hamburger').on('click', function() {
		$(this).toggleClass('hamburger--active');
		$('.nav-overlay').toggleClass('nav-overlay--active');
	})
})();
