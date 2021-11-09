$(function () {
	$('ul li:has("ul")').append('<span></span>');
	$('ul li a').click(function() {
		var checkElement = $(this).next(),
			visibleElement = $('ul ul:visible');

		visibleElement.stop().animate({'height':'toggle'}, 500).parent().removeClass('active');
		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			checkElement.stop().animate({'height':'toggle'}, 500).parent().addClass('active');
			return false;
        }
		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			return false;
		}
	});
});
