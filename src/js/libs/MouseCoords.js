import Vector2 from "libs/Vector2"
import $ from "jquery";

let mouseCoords = new Vector2(0,0);	
function FindMousePos(){
	mouseCoords.x = event.pageX;
	mouseCoords.y = event.pageY;
}
$(document).ready(function(event) {
	$(document).on("mousemove", function(event) {
		if(event.pageX !== 'undefined'){
			FindMousePos();
		}
		
	});
	$(document).on("mousewheel", function(event) {
		if(event.pageX !== 'undefined'){
			FindMousePos();
		}
	});
});
export default mouseCoords;