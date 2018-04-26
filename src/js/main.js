(function () {
	$('.hamburger').on('click', function() {
		$(this).toggleClass('hamburger--active');
		$('.nav-overlay').toggleClass('nav-overlay--active');
	});

	$('#checkbox--business-reservation').change(function () {
		$('.business-reservation').toggleClass("business-reservation--is-active", this.checked);
	}).change();

})();
