<template>
	<div class="time-selector" :style="'--roomColor:' + highlightColor">
		<div class="time-selector__content-wrapper">
			<div v-for="(timeSegment,index) in timeSegments" 
				:key="timeSegment" 
				
				:class="{
					'selected': isSelected(index),
					'highlighted': isHighlighted(index),
					'booked': isBooked(index),
					'unavailable': !isAvailable(index) && dragging,
				}"
				@mousedown="BeginDrag(index)"
				@mouseover="dragOver(index)"
				class="time-selector__sector"
			>
				{{tConvert(timeSegment.startTime)}} - {{tConvert(timeSegment.endTime)}}
			</div>	
		</div>
		
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
				let oldStart = this.startIndex;
				let oldEnd = this.endIndex;
				this.startIndex = null;
				this.endIndex = null;

				this.BeginDrag(oldStart);
				if(this.startIndex == null){
					this.dragging = false;
					return;
				}
				this.dragOver(oldEnd);
				this.dragging = false;
				if(this.endIndex == null){
					this.startIndex = null;
					return;
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
				this.dragging = false;
			},
			BeginDrag: function(index){
				if(this.isBooked(index)){
					return;
				}
				this.dragStartIndex = index;
				this.startIndex = index;
				this.endIndex = null;
				this.dragging = true;
			},
			dragOver: function(index){
				if(!this.dragging){
					return;
				}
				if(this.isAvailable(index)){
					if(index >= this.dragStartIndex){
						this.startIndex = this.dragStartIndex;
						this.endIndex = index;
					}
					else{
						this.startIndex = index;
						this.endIndex = this.dragStartIndex;
					}
					

				}
			},
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
			setStart: function(newStart){
				this.startIndex = newStart;
			},
			setEnd: function(newEnd){
				if(newEnd < this.startIndex){
					this.endIndex = this.startIndex;
					this.startIndex = newEnd;
				}
				else{
					this.endIndex = newEnd;
				}
				
			},
			isSelected: function(index){
				if(this.startIndex == null || this.endIndex == null){ // null returns false on number comparisons
					return this.isHighlighted(index);
				}
				return this.startIndex <= index && index <= this.endIndex;
			},
			isHighlighted: function(index){
				return index == this.startIndex || index == this.endIndex;
			},
			isAvailable: function(index){
				if(this.startIndex == null){
					return true;
				}
				let from = Math.min(index, this.startIndex);
				let to = Math.max(index, this.startIndex);
				for (var i = from; i <= to; i++) {
					if(this.isBooked(i)){ // if any inbetweens are booked -> not available
						return false;
					}
				}
				return true; // if no inbetweens are booked -> available
			},
			isBooked: function(index){
				let occupancy = this.occupancyData[index];
				return occupancy.state != "available";
			}
			
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
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	&__content-wrapper{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	&__sector {
		-webkit-user-select: none; /* Safari */        
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
		cursor: pointer;
		padding: 10px 10px;
		width: 120px;
		text-align: center;
		border: 1px solid #FFFFFF;
		border-radius: 8px;
		margin: 7px;

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
			margin: 4px;
		}

		&.selected{
			background: var(--roomColor);
		}
		&.highlighted{
			filter: drop-shadow(0px 0px 10px var(--roomColor));
			// background: darken(var(--roomColor), 10%);
		}
		&.unavailable{
			opacity: 0.8;
			cursor: default;
		}
		&.booked{
			opacity: 1;
			background: #979797;
			cursor: default;;
		}

	}
}

</style>
