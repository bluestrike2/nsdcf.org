(function () {
	$('.nav-icon').on('click', function() {
		$(this).toggleClass('nav-icon--active');
		$('.nav-overlay').toggleClass('nav-overlay--active');
	})
})();
