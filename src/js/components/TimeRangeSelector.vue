<template>
	<div class="time-selector" :style="'--roomColor:' + highlightColor">
		<div class="time-selector__content-wrapper">
			<div v-for="(timeSegment,index) in timeSegments" 
				:key="timeSegment" 
				
				:class="{
					'selected': isSelected(index),
					'border': isBorder(index),
					'border--start': isStart(index),
					'border--end': isEnd(index),
					'booked': isBooked(index),
					'expandable': isExpandable(index),
				}"
				@click="segmentClick(index)"
				class="time-selector__sector"
			>
				{{tConvert(timeSegment.startTime)}} - {{tConvert(timeSegment.endTime)}}
			</div>	
		</div>
		<!-- @touchstart="BeginDrag(index)"
				v-touch:rollover="LogIndex(index)"
				@mousedown="BeginDrag(index)"
				@mouseover="dragOver(index)" -->
	</div>
</template>
<script setup>
</script>
<script>
	let Selector = {
		props: ['highlightColor', 'occupancyData', 'openTime'],
		data() {
			return {
				segmentLength: 60, // minutes
				startIndex: null,
				endIndex: null,
				dragging: false,
				dragStartIndex: null,
			}
		},
		watch: {
			occupancyData: function(val){
				if(this.startIndex == null || this.endIndex == null){
					return;
				}
				for (var i = this.startIndex; i <= this.endIndex; i++) {
					if(this.isBooked(i)){
						this.startIndex = null;
						this.endIndex = null;
						return;
					}
				}
			}
		},
		created(){
			onMouseDown = this.mouseDown;
			onMouseUp = this.mouseUp;
		},
		mounted(){
		},
		methods: {
			mouseDown: function(){
				// console.log('down');
			},
			mouseUp: function(){
				// this.dragging = false;
			},
			// BeginDrag: function(index){
			// 	if(this.dragging){
			// 		this.dragging = false;
			// 		return;
			// 	}
			// 	if(this.isBooked(index)){
			// 		return;
			// 	}
			// 	this.dragStartIndex = index;
			// 	this.startIndex = index;
			// 	this.endIndex = null;
			// 	this.dragging = true;
			// },
			// dragOver: function(index){
			// 	console.log(index);
			// 	if(!this.dragging){
			// 		return;
			// 	}
			// 	if(this.isAvailable(index)){
			// 		if(index >= this.dragStartIndex){
			// 			this.startIndex = this.dragStartIndex;
			// 			this.endIndex = index;
			// 		}
			// 		else{
			// 			this.startIndex = index;
			// 			this.endIndex = this.dragStartIndex;
			// 		}
					

			// 	}
			// },
			tConvert: function(totalMinutes){ // converts a time in total minutes from midnight to a regular24 hour time
				totalMinutes = totalMinutes % 1440; // ensures the time is limited to 1 day

				let minutes = totalMinutes % 60;
				// console.log(minutes);
				let hours = Math.round((totalMinutes - minutes) / 60);


				let strMinutes = minutes;
				if(minutes<10){
					strMinutes = "0" + strMinutes;
				}

				let strHours = hours;
				if(hours<10){
					strHours = "0" + strHours;
				}

				// let resultString = strMinutes + ":" + strHours;
				return strHours + ":" + strMinutes;
			},
			segmentClick: function(index){
				if(this.isBooked(index)){
					return;
				}
				if(this.startIndex == null && this.endIndex == null){
					this.startIndex = index;
					this.endIndex = index;
					return;
				}
				if(index == this.startIndex && index == this.endIndex){
					this.startIndex = null;
					this.endIndex = null;
					return;
				}
				if(index == this.startIndex){
					this.startIndex++;
					return;
				}
				if(index == this.endIndex){
					this.endIndex--;
					return;
				}

				if(this.isExpandable(index)){

					if(index < this.startIndex){
						this.startIndex--;
					}
					else if(this.endIndex < index){

						this.endIndex++;
					}
				}
			},
			setStart: function(newStart){
				this.startIndex = newStart;
			},
			setEnd: function(newEnd){
				this.endIndex = newEnd;
			},
			isSelected: function(index){
				if(this.startIndex == null || this.endIndex == null){ // null returns false on number comparisons
					return false;
				}
				return this.startIndex <= index && index <= this.endIndex;
			},
			isBorder: function(index){
				return this.startIndex == index || index == this.endIndex;
			},
			isStart: function(index){
				return this.startIndex == index && index != this.endIndex;
			},
			isEnd: function(index){
				return this.endIndex == index && index != this.startIndex;
			},
			isExpandable: function(index){
				if(this.startIndex == null && this.endIndex == null && !this.isBooked(index)){
					return true;
				}
				return !this.isBooked(index) && (index == (this.startIndex - 1) || index == (this.endIndex + 1));
			},
			isAvailable: function(index){
				if(this.isBooked(index)){
					return false;
				}
				return this.startIndex == null && this.endIndex == null || this.isExpandable(index) || this.isBorder;
				//
					// let from = Math.min(index, this.startIndex);
					// let to = Math.max(index, this.startIndex);
					// for (var i = from; i <= to; i++) {
					// 	if(this.isBooked(i)){ // if any inbetweens are booked -> not available
					// 		return false;
					// 	}
					// }
					// return true; // if no inbetweens are booked -> available
				//
			},
			isBooked: function(index){
				let occupancy = this.occupancyData[index];
				return occupancy.state != "available";
			},			
		},
		computed: {
			timeSegments: function(){
				let segments = [];
				for (var i = 0; i < this.occupancyData.length; i++) {
					let startTime = this.openTime + i*this.segmentLength;
					segments.push({startTime: startTime, endTime: startTime + this.segmentLength});
				}
				return segments;
			},
		}
	}
	export default Selector;
	let onMouseDown;
	let onMouseUp;
	window.addEventListener('mouseup', 
		function(e){
			if(onMouseUp){
				onMouseUp()
			}
			
		}, false);
	window.addEventListener('mousedown', 
		function(e){
			if(onMouseDown){
				onMouseDown()
			}
			
		}, false);

</script>
<style lang="scss" scoped>
@import 'styles/utils/vars.scss'; // for width vars
.time-selector {
	// pointer-events:none;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	&__content-wrapper{
		width: 100%;
		display: grid;
		grid-gap: 7px;
		grid-template-columns: repeat(auto-fit, 120px);
		@media screen and (max-width:$smDesktopWidth) {
			grid-template-columns: repeat(auto-fit, 100px);
		}
		@media screen and (max-width:1052px) {
			grid-gap: 4px;
			grid-template-columns: repeat(auto-fit, 86px);
		}
		
		justify-items: center;
		justify-content: center;
		padding: initial;
		// display: flex;
		// flex-wrap: wrap;
		// justify-content: start;
	}
	&__sector {
		transition: all 0.5s;
		// pointer-events: auto; 
		-webkit-user-select: none; /* Safari */        
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
		cursor: default;
		padding: 10px 10px;
		width: 120px;
		text-align: center;
		border: 1px solid #FFFFFF;
		border-radius: 8px;
		// margin: 7px;

		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 16px;

		@media screen and (max-width:$smDesktopWidth) {
			width: 100px;
			font-size: 12px;
		}
		@media screen and (max-width:1052px) {
			width: 86px;
			font-size: 11px;
			padding: 7px 0;
			// margin: 4px;
		}
		opacity: 0.2;

		&.selected{
			opacity: 0.6;
			background: var(--roomColor);
		}
		&.border{
			opacity: 1;
			background: var(--roomColor);
			filter: drop-shadow(0px 0px 10px var(--roomColor));
			cursor: pointer;
			position: relative;
			&--start{
				border-radius: 1px 8px 8px 1px;
			}	
			&--end{
				border-radius: 8px 1px 1px 8px;
			}
			// background: darken(var(--roomColor), 10%);
		}
		&.expandable{
			opacity: 1;
			cursor: pointer;
		}
		&.booked{
			opacity: 1;
			background: #979797;
			cursor: default;;
		}

	}
}
</style>
