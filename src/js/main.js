import $ from "jquery";
import Vector2 from "libs/Vector2"
import Mathf from "libs/Mathf"
import mouseCoords from "libs/MouseCoords"
$('.menu-slider-item').click(function(){
	if(!$(this).find('.menu-slider__description').hasClass('hide')){
		$('.menu-slider__description.hide').removeClass('hide')
		$(this).find('.menu-slider__description').addClass('hide')
	}
	else{
		$(this).find('.menu-slider__description').removeClass('hide')
	};
});

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
		////console.log(ratioMultiplier);
		$(this).css("height", (parseFloat($(this).css("width")) * ratioMultiplier).toString() + "px");
	});
}
function RatioH(){
	$.each($('.ratio-h'), function(index, val) {
		var ratioMultiplier = parseFloat($(this).data("ratio-multiplier"));
		if(ratioMultiplier == "undefined"){
			ratioMultiplier = 1;
		}
		////console.log(ratioMultiplier);
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
// 	////console.log('move');
// });


///MODAL

$(document).on('click', '.modal-trigger', function(event) {


	var modalID = $(this).data('modal-id');
	let modal = OpenModal('#' + modalID);
	

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
	let modalContent = $(this).data('modal-content');
	if(modalContent){
		modal.find('.modal-content-wrapper').html(modalContent);
	}
	
});
function OpenModal(selector){
	$("body").css("overflow", "hidden");
	var modal = $(selector + ".modal");
	modal.addClass("modal-active");
	return modal;
}
$(document).on('mousedown touchstart', '.modal-bg, .modal-cross', function(event) {
	CloseModal(this);
});
function CloseModal(selector){
	if($('.modal-active').length == 1){ // only 1 modal window is open
		$("body").css("overflow", "visible");
	}
	var modal = $(selector).closest(".modal");
	modal.removeClass("modal-active");
}
$(document).on('mousedown touchstart', '.modal-window', function(event) {
	event.stopPropagation();
});

//READMORE START
$(document).on('click', '.readmore', function(event) {
	$(this).toggleClass("toggled");
	ToggleReadmoreObjects($(this));
});
function ToggleReadmoreObjects(readmore){
	let readmoreObjects = $("[data-readmore-identifier="+readmore.attr('id')+"]");
	if(readmoreObjects.length == 0){
		return;
	}
	for (var i = 0; i < readmoreObjects.length; i++) {
		let readmoreObject = $(readmoreObjects[i]);
		if(readmore.hasClass("toggled")){

			readmoreObject.removeClass("hidden");
		}
		else{
			readmoreObject.addClass("hidden");
		}
		
	}
}
//First run through for every readmore when page loads
$(document).ready(function(){
	$('.readmore').each(function(){
		ToggleReadmoreObjects($(this));
	});
});

//READMORE END


//Item accordeon
$(window).resize(function(){
	UpdateItemLists();
});
$(document).on('click', '.item-category', function(event) {
	let isOpen = $(this).closest('.item-list-wrapper').hasClass('open');
	$('.item-list-wrapper').removeClass('open');
	$(this).closest('.item-list-wrapper').toggleClass('open',!isOpen);
	UpdateItemLists();
});
function UpdateItemLists(){
	$(".item-list-wrapper").each(function(){
		AnimateListCategory($(this));
	})
}
function AnimateListCategory(listWrapper){
	let category = listWrapper.find('.item-category');
	let list = listWrapper.find('.item-list');

	let targetHeight = category.outerHeight(true)
	if(listWrapper.hasClass('open')){
		targetHeight += list.outerHeight(true);
	}
	listWrapper.stop().animate({
		height: targetHeight+"px"
	}, 500);
}
$(document).ready(function(){
	RotateToMouse();
});
async function RotateToMouse(){
	while(true){
		$('.rotate-to-mouse').each(function(){
			let rotatedObject = $(this);
			let offset = rotatedObject.offset()
			var relCoor = new Vector2(
				offset.left + rotatedObject.width()/2,
				offset.top + rotatedObject.height()/2
			);
			relCoor = Vector2.Sub(relCoor,mouseCoords);
			let desiredRotation = Vector2.Angle(Vector2.up,relCoor);
			// //console.log(desiredRotation);
			let curRotation = rotatedObject.data('cur-rotation');
			if(!curRotation){
				curRotation = desiredRotation;
			}
			curRotation = Mathf.LerpRotation(curRotation,desiredRotation,rotatedObject.data('lerp-speed'));

			rotatedObject.css("transform", 'rotate(' + curRotation + 'deg)');
			rotatedObject.data('cur-rotation', curRotation);
		});
		await Timeout(20)
	}
	
}
function Timeout(time) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, time);
	});
}