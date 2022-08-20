<template>
</template>
<script setup>
</script>
<script>
	export default{
		props: ['highlightColor', 'occupancyData', 'openTime', 'openHoursLength'],
		data() {
			return {
				segmentLength: 60, // minutes
				selectedTimeRange: null, // {startIndex: number, endIndex: number}
				timeSegments: [], // each element is an obj {startTime: totalMins, endTime: totalMins}
			}
		},
		watch: { 
			occupancyData: function(newVal, oldVal) {
				this.generateTimeSegments();
			}
		},
		created(){
		},
		mounted(){
			this.generateTimeSegments();			
		},
		methods: {
			generateTimeSegments: function(){
				this.timeSegments = [];
				for (var i = 0; i < this.occupancyData.length; i++) {
					let startTime = this.openTime + i*this.segmentLength;
					this.timeSegments.push({startTime: startTime, endTime: startTime + this.segmentLength});
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
			}
		},
		computed: {

		}
	}

</script>
<style lang="scss" scoped>
@import 'styles/utils/vars.scss'; // for width vars

</style>
