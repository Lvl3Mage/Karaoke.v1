import $ from "jquery";

$('.burger-btn').on('click', function(){
	$(this).toggleClass('active');
	$('.navigation').toggleClass('active');
	$('.sidebar').toggleClass('active');
});
function ibg(){
	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
		$(this).find('img').first().css("width", 0);
		$(this).find('img').first().css("height", 0);
		$(this).find('img').first().css("display", "none");
		$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
}
function RatioW(){
	$.each($('.ratio-w'), function(index, val) {
		var ratioMultiplier = parseFloat($(this).data("ratio-multiplier"));
		if(ratioMultiplier == "undefined"){
			ratioMultiplier = 1;
		}
		console.log(ratioMultiplier);
		$(this).css("height", (parseFloat($(this).css("width")) * ratioMultiplier).toString() + "px");
	});
}
function RatioH(){
	$.each($('.ratio-h'), function(index, val) {
		var ratioMultiplier = parseFloat($(this).data("ratio-multiplier"));
		if(ratioMultiplier == "undefined"){
			ratioMultiplier = 1;
		}
		console.log(ratioMultiplier);
		$(this).css("width", (parseFloat($(this).css("height")) * ratioMultiplier).toString() + "px");
	});
}
$(document).ready(function(){
	ibg();
	RatioW();
	RatioH();
});

$(window).resize(function(){
	RatioW();
	RatioH();
});
$('.sidebar-lang').on('click', function(e){
	$('.sidebar-lang__list').addClass('active');
	e.stopPropagation();
	// $('#'+$(this).data('lang-id')).
});
$('.sidebar-lang__item').on('click', function() {

	$('.sidebar-lang__item').removeClass('selected');
	$(this).addClass('selected');

	$('.sidebar-lang').removeClass('active');
	$('#'+$(this).data('lang-id')).addClass('active');
});

$(document).on('click', function(){
	$('.sidebar-lang__list').removeClass('active');
});
// $(document).on('tap',document, function(){
// 	console.log('move');
// });