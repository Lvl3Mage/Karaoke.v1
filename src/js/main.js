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
$(document).ready(function(){
	ibg();
});