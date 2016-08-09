$(function() {
	mainScreenFadeIn();
	$('.button').click(mainScreenFadeOut);


});

var mainScreenFadeOut = function(){
	var fileName = $(this).data('div-name');
	sectionFadeOut();
	if(fileName == 'Back'){
		mainScreenFadeIn();
	} 
	else {
		contentFadeIn();
		if(fileName == 'Resume'){
			setTimeout(function() {
				$('.resumeContent').fadeIn(500);
			}, 500);
		}
		if(fileName == 'Contacts'){
			setTimeout(function() {
				$('.contactContent').fadeIn(500);
			}, 500);
		}
		if(fileName == 'Photos'){
			setTimeout(function() {
				$('.photoContent').fadeIn(500);
			}, 500);
		}
		if(fileName == 'Posts'){
			setTimeout(function() {
				$('.postContent').fadeIn(500);
			}, 500);
		}
	}
}

var mainScreenFadeIn = function(){
	setTimeout(function() {
		$('#fixed-button').fadeOut(500);
		$('#main').fadeOut(500);
	}, 0);

	setTimeout(function() {
		$('#banner').fadeIn(1000);
		$('#button-banner').fadeIn(1000);
	}, 500);

}

var contentFadeIn = function(){
	$('#banner').fadeOut(1000);
	$('#button-banner').fadeOut(1000);
	setTimeout(function() {
		$('#fixed-button').fadeIn(500);
		$('#main').fadeIn(500);
	}, 1000);
}

var sectionFadeOut = function(){
	$('.resumeContent').fadeOut(500);
	$('.photoContent').fadeOut(500);
	$('.contactContent').fadeOut(500);
	$('.postContent').fadeOut(500);

}