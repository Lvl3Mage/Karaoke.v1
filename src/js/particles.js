import $ from "jquery";
import Mathf from "libs/Mathf"
import Vector2 from "libs/Vector2"

// {
// 	particlePrototype: null,
// 	simContainer: null, //reference to DOM
// 	info: {
// 		"acceleration": [0,-9],
// 		"startingVelocity": [0,0],
// 		"drag": 2,
// 		"edgeBegavior": {
// 			"bottom": "delete"
// 		},
// 		"spawnBehavior": {
// 			"rect": {
// 				"top": 0,
// 				"right": 0,
// 				"bottom": 0.9,
// 				"left": 0
// 			},
// 			"particlesPerSec": 5
// 		},
// 		"maxLifetime": 15
// 	},
// 	particles: [
// 		{
// 			position: {
// 				x: 0,
// 				y: 0,
// 			},
// 			velocity: {
// 				x: 0,
// 				y: 0,
// 			},
// 			ref: null, // reference to DOM
// 		}
// 	],
// },
let particleSystems = [
	
];
function randomRange(min, max) {
	return Math.random() * (max - min) + min;
}
function newParticleSystem(particleDOM){
	let info = $(particleDOM).data("sim-info");
	if(typeof info == "string"){
		info = JSON.parse(info);
	}

	let pSystem = {
		particlePrototypes: $(particleDOM).find(".particle-preview"),
		simContainer: $(particleDOM).find(".particle-sim-container")[0],
		info: info,
		particles: [],
	}
	pSystem.accumulatedParticles = 0;
	pSystem.info.acceleration = new Vector2(pSystem.info.acceleration.x, pSystem.info.acceleration.y);
	return pSystem;
}

function newParticle(pSystem){
	let simContainer = $(pSystem.simContainer);
	let width = simContainer.width();
	let height = simContainer.height();
	let particlePrototype = pSystem.particlePrototypes[Math.floor(Math.random()*pSystem.particlePrototypes.length)];
	let particleDOM = $(particlePrototype).clone().appendTo(simContainer);
	particleDOM.removeClass('particle-preview');
	particleDOM.addClass('particle');
	let spawnRect = pSystem.info.spawnBounds;
	let xPosition = randomRange(spawnRect.left, spawnRect.right);
	let yPosition = randomRange(spawnRect.top, spawnRect.bottom);

	let startingVelocity = pSystem.info.startingVelocity;
	let vel = new Vector2(0,0);
	if(startingVelocity.magnitude){
		var angle = Math.random()*Math.PI*2;
		vel.x = Math.cos(angle)*startingVelocity.magnitude;
		vel.y = Math.sin(angle)*startingVelocity.magnitude;
	}
	else{
		if(startingVelocity.x){
			vel.x = startingVelocity.x;
		}
		else if(startingVelocity.minX && startingVelocity.maxX){
			vel.x = randomRange(startingVelocity.minX, startingVelocity.maxX);
		}
		if(startingVelocity.y){
			vel.y = startingVelocity.y;
		}
		else if(startingVelocity.minY && startingVelocity.maxY){
			vel.y = randomRange(startingVelocity.minY, startingVelocity.maxY);
		}	
	}
	let startingRotation = pSystem.info.startingRotation;
	let rotation = 0;
	if(startingRotation.angle){
		rotation = startingRotation.angle;
	}
	else if(startingRotation.min && startingRotation.max){
		rotation = randomRange(startingRotation.min, startingRotation.max);
	}
	let startingAngularVelocity = pSystem.info.startingAngularVelocity;
	let angularVelocity = 0;
	if(startingAngularVelocity.velocity){
		angularVelocity = startingAngularVelocity.velocity;
	}
	else if(startingAngularVelocity.min && startingAngularVelocity.max){
		angularVelocity = randomRange(startingAngularVelocity.min, startingAngularVelocity.max);
	}

	// console.log(particleDOM);
	let particle = {
		position: new Vector2(xPosition*width, yPosition*height),
		velocity: vel,
		rotation: rotation,
		angularVelocity: angularVelocity,
		ref: particleDOM[0],
		ttl: pSystem.info.maxLifetime,
	};
	pSystem.particles.push(particle);
	return particle;
}
function UpdateSystems(tick){
	for(let system of particleSystems){
		UpdateParticleSystem(system, tick);
	}
}
function UpdateParticleSystem(system, tick){


	let simContainer = $(system.simContainer);
	let width = simContainer.width();
	let height = simContainer.height();

	//Spawn particles
	if(system.particles.length < system.info.maxParticles){
		let spawnRate = system.info.spawnRate;
		if(system.info.spawnRateMode == "areaRelative"){
			spawnRate *= width*(system.info.spawnBounds.right - system.info.spawnBounds.left) *height * (system.info.spawnBounds.bottom - system.info.spawnBounds.top);
		}
		system.accumulatedParticles += tick * spawnRate;
		system.accumulatedParticles = Math.min(system.info.maxParticles - system.particles.length, system.accumulatedParticles);
		while(system.accumulatedParticles >= 1){
			system.accumulatedParticles--;
			newParticle(system);
		}	
	}
	

	//Update particle velocity, position & ttl
	let acceleration = system.info.acceleration.Scale(tick);
	let drag = system.info.drag;
	let containerPosition = simContainer.offset();
	let relCoor = new Vector2(
		containerPosition.left,
		containerPosition.top
	);
	relCoor = Vector2.Sub(relCoor,mousePos);

	for (let i = 0; i < system.particles.length; i++) {
		let particle = system.particles[i];
		// console.log(system.info.acceleration.Scale(0.01),tick)
		particle.velocity = Vector2.Add(particle.velocity, acceleration)

		let dragSubstraction = particle.velocity.Scale(1 - 1/(1+drag * tick));
		// console.log(particle.velocity);
		particle.velocity = Vector2.Sub(particle.velocity, dragSubstraction);
		if(system.info.cursorPull && !isMobileDevice()){
			ParticleCursorPull(particle, 700, 1.5, tick, relCoor);
		}

		particle.rotation += particle.angularVelocity;

		particle.position = Vector2.Add(particle.position,particle.velocity.Scale(tick));

		particle.ttl -= tick;
		particle.ref.style.left = particle.position.x + "px";
		particle.ref.style.top = particle.position.y + "px";

		particle.ref.style.transform = "translate(-50%, -50%) rotate("+ particle.rotation +"deg)";
	}

	let eliminationBounds = system.info.eliminationBounds;
	let realBounds = {
		top: eliminationBounds.top * height,
		bottom: eliminationBounds.bottom * height,
		right: eliminationBounds.right * width,
		left: eliminationBounds.left * width,
	}
	
	//Delete particles
	for (let i = 0; i < system.particles.length; i++) {
		let particle = system.particles[i];
		let xBounds = particle.position.x >= realBounds.left && particle.position.x <= realBounds.right;
		let yBounds = particle.position.y >= realBounds.top && particle.position.y <= realBounds.bottom;
		if(!(xBounds && yBounds) || particle.ttl <= 0) {
			// console.log(particle.position, realBounds)
			$(particle.ref).remove();
			system.particles.splice(i,1);
			i--;
		}
	}
}
function ParticleCursorPull(particle, force, minDistance, tick, containerRelMousePos){
	// let particleObj = $(particle.ref);
	// let particleOffset = particleObj.offset();

	let relCoor = Vector2.Add(containerRelMousePos, particle.position);
	// let relCoor = new Vector2(
	// 	particleObj.offset().left + particleObj.width()/2,
	// 	particleObj.offset().top + particleObj.height()/2
	// );
	// relCoor = Vector2.Sub(relCoor,mousePos);
	if((relCoor.x**2 + relCoor.y**2) > 40000){
		// particle.ref.style.backgroundColor = 'transparent'; 
		return;
	}
	// particle.ref.style.backgroundColor = 'green'; 
	var length = relCoor.Length()/100;
	let pushVector = relCoor.Normalized().Scale((force*tick)/(length*length + minDistance));
	particle.position = Vector2.Add(particle.position, pushVector);
	particle.velocity = Vector2.Add(particle.velocity, pushVector);
}

$(document).ready(function(){
	let systems = $('.particle-system');
	for(let system of systems){
		particleSystems.push(newParticleSystem(system));
		// newParticle(particleSystems[0]);
	}
	if(systems.length > 0){
		UpdateLoop();
	}
	// console.log(newParticle(particleSystems[0]));
	
});

function Timeout(time) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, time);
	});
}

async function UpdateLoop(){
	const fixedDeltaTime = 0.02;
	const maxDeltaTime = 0.6;
	let lastFrameTime = performance.now();
	let deltaTime = fixedDeltaTime;
	
	while(true){
		let startFrameTime = performance.now();

		console.log(deltaTime);
		deltaTime = Math.min(maxDeltaTime, deltaTime);
		UpdateSystems(deltaTime);
		// ComponentEventHandler.CallBuiltinEvents();

		let endFrameTime = performance.now();

		let frameTime = (endFrameTime - startFrameTime)/1000;

		let timeLeft = fixedDeltaTime - frameTime;
		timeLeft = Math.max(0,timeLeft);



		let deltaTime_ms = endFrameTime - lastFrameTime;
		deltaTime = deltaTime_ms/1000;
		lastFrameTime = endFrameTime;


		await Timeout(timeLeft * 1000);
	}
}



let mousePos = new Vector2(0,0);	
	function FindMousePos(){
		mousePos.x = event.pageX;
		mousePos.y = event.pageY;
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
function isMobileDevice() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};