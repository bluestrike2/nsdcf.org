(function () {
	$('.hamburger-menu').on('click', function() {
		$(this).toggleClass('active');
		$('#site-nav').toggleClass('active');
	})
})();
