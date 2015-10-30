$(function() {
	$( '.header-rent-button' ).click(function() {
  		$('.jumbo-text').text('Find your next rental');
  		$('.jumbotron').css('background-image', 'url(http://www.zillowstatic.com/static-homepage/847ac5e/static-homepage/images/backgrounds/Rental_Hero_1024x500_2x.jpg)');
	});
	$( '.header-sell-button' ).click(function() {
  		$('.jumbo-text').text('Sell your home');
  		$('.jumbotron').css('background-image', 'url(http://www.zillowstatic.com/static-homepage/847ac5e/static-homepage/images/backgrounds/Sell_Hero_120987520_1024x500_2x.jpg)');
	});
	$( '.header-buy-button' ).click(function() {
  		$('.jumbo-text').text('Find your way home');
  		$('.jumbotron').css('background-image', 'url(http://www.zillowstatic.com/static-homepage/959f393/static-homepage/images/backgrounds/FirstTime_Hero_124544671_1024x500_2x.jpg)');
	});

	// banner only changes color when scrolling from the top of the page :(
	$( document ).scroll(function() {
		$('.call-to-action').css('background-color', 'rgba(24,93,52,.85)');
	});

	$('.call-to-action').mouseenter(function() {
		$('.call-to-action').css('background-color', 'rgba(93,24,52,.85)');
	});

});
