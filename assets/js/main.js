(function () {

	$(function() {
	  var header  = $(".header__inner");
		var mast = $(".mast").offset().top;
		var mastEnd = $(".mast").offset().top + $(".mast").outerHeight();
		//+ header.outerHeight();

	  $(window).scroll(function() {
	    var scroll = $(window).scrollTop();
	    if (scroll >= mast && scroll <= mastEnd) {
				header.addClass("header__inner--scrolled");
	    } else {
	      header.removeClass("header__inner--scrolled");
	    }
	  });
	});

	$('.hamburger').on('click', function() {
		$(this).toggleClass('hamburger--active');
		$('.nav-overlay').toggleClass('nav-overlay--active');
		$('.header').toggleClass('header--nav-overlay-active');
	});

	$('#checkbox--business-reservation').change(function () {
		$('.business-reservation').toggleClass("business-reservation--is-active", this.checked);
	}).change();

	$('.alumni-form__link').click(function(event){
		event.preventDefault();
    var id = $(this).attr("ref");
    $('#'+id).slideToggle('slow');
	});

	$('#directed_donation').change(function() {
		var textarea = $('.directed_donation_other');
		var textClass = "directed_donation_other--active"

		if($(this).val() == 'Other'){
			textarea.addClass(textClass);
		} else {
			textarea.removeClass(textClass);
		}
	});

})();
