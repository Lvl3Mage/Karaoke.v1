<template>
	<div class="time-selector" :style="'--roomColor:' + highlightColor">
		<div class="time-selector__fields">
			<div class="time-selector__field">
				<div class="time-selector__field-description">
					Start time
				</div>
				<div class="input-field">
					<ph-clock :size="14" color="#fff" />
					<span>
						{{startTimeFormatted}}
					</span>
				</div>
			</div>
			<div class="time-selector__field">
				<div class="time-selector__field-description">
					End time
				</div>
				<div class="input-field">
					<ph-clock :size="14" color="#fff" />
					<span>
						{{endTimeFormatted}}
					</span>
					
				</div>
			</div>
			<div class="time-selector__field">
				<div class="time-selector__field-description">
					Total hours
				</div>
				<div class="input-field">
					{{hourLength}}
				</div>
			</div>
		</div>
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
	</div>
</template>
<script setup>
	import { PhClock} from "phosphor-vue";
</script>
<script>
	let Selector = {
		props: ['highlightColor', 'occupancyData', 'openTime', 'modelValue'],
		data() {
			let startIndex = null;
			let endIndex = null;
			if(this.modelValue != null){
				startIndex = this.modelValue.startIndex;
				endIndex = this.modelValue.endIndex;
			}
			return {
				segmentLength: 60, // minutes
				startIndex: startIndex,
				endIndex: endIndex,
			}
		},
		watch: {
			modelValue:function(val){
				if(val == null){
					this.startIndex = null;
					this.endIndex = null;
				}
				else{
					this.startIndex = val.startIndex;
					this.endIndex = val.endIndex;
				}
			},
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
		},
		mounted(){
		},
		emits: ['update:modelValue'],
		methods: {
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
					this.setRange({start:index, end:index});
					return;
				}
				if(index == this.startIndex && index == this.endIndex){
					this.setRange({start:null, end:null});
					return;
				}

				if(index == this.startIndex){
					this.setStart(this.startIndex+1);
					return;
				}
				if(index == this.endIndex){
					this.setEnd(this.endIndex-1);
					return;
				}

				if(this.isExpandable(index)){
					if(index < this.startIndex){
						this.setStart(this.startIndex-1);
					}
					else if(this.endIndex < index){
						this.setEnd(this.endIndex+1);
					}
				}
			},
			setRange: function(range){
				this.startIndex = range.start;
				this.endIndex = range.end;
				this.rangeChange();
			},
			setStart: function(newStart){
				this.startIndex = newStart;
				this.rangeChange();
			},
			setEnd: function(newEnd){
				this.endIndex = newEnd;
				this.rangeChange();
			},
			rangeChange: function(){
				if(this.startIndex == null && this.endIndex == null){
					this.$emit("update:modelValue",null);
					return;
				}
				this.$emit("update:modelValue", {
					startIndex:this.startIndex,
					endIndex:this.endIndex,
					startTime: this.tConvert(this.timeSegments[this.startIndex].startTime),
					endTime: this.tConvert(this.timeSegments[this.endIndex].endTime)
				});
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
			startTimeFormatted: function(){
				if(this.startIndex == null){
					return "--:--";
				}
				return this.tConvert(this.timeSegments[this.startIndex].startTime);
			},
			endTimeFormatted: function(){
				if(this.endIndex == null){
					return "--:--";
				}
				return this.tConvert(this.timeSegments[this.endIndex].endTime);
			},
			hourLength: function(){
				if(this.startIndex == null){
					return 0;
				}
				return this.endIndex - this.startIndex + 1;
			},
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

</script>
<style lang="scss" scoped>
@import 'styles/utils/vars.scss'; // for width vars
.cost{
	border-top: 1px solid white;
}
.input-field{
	cursor: default;
	background: linear-gradient(180deg, #7b7979 0.55%, #232020 100%);
	border-radius: 8px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	&>span{
		margin-left: 8px;
	}

}
.noise-overlay{
	position: absolute;
	background-image: url("../../assets/images/noise.png");
	background-repeat: repeat;
	background-size: var(--noise-size, 300px);
	width: 100%;
	height: 100%;
	z-index: -1;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	opacity: var(--noise-opacity, 0.4);
	&__wrapper{
		overflow: hidden;
		position: relative;
	}
}
.time-selector {
	// pointer-events:none;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	&__fields {
		display: flex;
		width: 100%;
		padding: 0 5%;
		justify-content: space-around;
		margin-bottom: 32px;
		@media screen and (max-width: $phoneWidth) {
			padding: 0;
		}
	}
	&__field-description{
		font-family: 'Chivo';
		font-style: normal;
		font-weight: 900;
		font-size: 14px;
		margin-bottom: 15px;
	}
	&__field {
		flex: 0 0 33%;
		padding: 5px;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
	}
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
		overflow: hidden;
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
			cursor: default;
			.cost{
				color: #fff;
				background: #979797;
			}
			// .cost{
			// 	display: none;
			// }
			// .time{
			// 	height: 100%;
			// }
		}

	}
}
</style>
