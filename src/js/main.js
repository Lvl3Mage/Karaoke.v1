import $ from "jquery";

$('.burger-btn').on('click', function(){
	$(this).toggleClass('active');
	$('.navigation').toggleClass('active');
	$('.sidebar').toggleClass('active');
	$('.sidebar-background').toggleClass('active');
});
$('.navigation__item, .sidebar-background').on('click', function() {
	$('.burger-btn').removeClass('active');
	$('.navigation').removeClass('active');
	$('.sidebar').removeClass('active');
	$('.sidebar-background').removeClass('active');
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


///MODAL

$(document).on('click', '.modal-trigger', function(event) {
	$("body").css("overflow", "hidden");

	var modalID = $(this).data('modal-id');
	var modal = $("#" + modalID + ".modal");
	modal.addClass("modal-active");

	var modalTitle = $(this).data('modal-title');
	if(typeof modalTitle !== 'undefined'){
		modal.find(".modal-title").html(modalTitle);
	}
	let modalFieldPresets= $(this).data('field-presets');
	if(modalFieldPresets){
		for (let i = 0; i < modalFieldPresets.length; i++) {
			modal.find(modalFieldPresets[i].childSelector).val(modalFieldPresets[i].value);
		}
	}
});
$(document).on('mousedown touchstart', '.modal-bg, .modal-cross', function(event) {
	$("body").css("overflow", "visible");
	var modal = $(this).closest(".modal");
	modal.removeClass("modal-active");
});
$(document).on('mousedown touchstart', '.modal-window', function(event) {
	event.stopPropagation();
});

