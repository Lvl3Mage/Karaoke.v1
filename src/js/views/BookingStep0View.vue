<script setup>
	import Calendar from '../components/Calendar.vue'
	import TimeRangeSelector from '../components/TimeRangeSelector.vue'
	const bookingStore = useBookingStore()
</script>
<script>
	const APIScheduleData = 
	{
		"19/08/2022": {
			"room1": {
				"occupancyData": [
					{
						"state": "available",// available/booked/reserved
						"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
					},
					{
						"state": "available",// available/booked/reserved
						"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
					},
					//....
				],
				"openTime": 720,//mins since midnight
			},
			"room2": {
				"occupancyData": [
					{
						"state": "available",// available/booked/reserved
						"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
					},
					{
						"state": "available",// available/booked/reserved
						"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
					},
					//....
				],
				"openTime": 720,//mins since midnight
			},
			"room3": {
				"occupancyData": [
					{
						"state": "available",// available/booked/reserved
						"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
					},
					{
						"state": "available",// available/booked/reserved
						"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
					},
					//....
				],
				"openTime": 720,//mins since midnight
			},
		},
		"20/08/2022": {
			"room1": {
				"occupancyData": [
					{
						"state": "available",// available/booked/reserved
						"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
					},
					{
						"state": "booked",// available/booked/reserved
						"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
					},
					//....
				],
				"openTime": 720,//mins since midnight
			},
			"room2": {
				"occupancyData": [
					{
						"state": "available",// available/booked/reserved
						"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
					},
					{
						"state": "booked",// available/booked/reserved
						"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
					},
					//....
				],
				"openTime": 720,//mins since midnight
			},
			"room3": {
				"occupancyData": [
					{
						"state": "available",// available/booked/reserved
						"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
					},
					{
						"state": "booked",// available/booked/reserved
						"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
					},
					//....
				],
				"openTime": 720,//mins since midnight
			},
		}
	};
	import {axios, api} from '../App.vue';
	import {useBookingStore} from '../stores/BookingStore.js'

	export default{
		data() {
			return {
			}
		},
		mounted(){
			// console.log(this.bookingStore.selectedDate);
			// axios
			// 	.post(api.baseURL + "/api-token-auth/",data)
			// 	.then(function(response){
			// 		this.bookingStore.roomData = response.roomData;
			// 		if(this.roomID in this.bookingStore.roomData){
			// 			this.bookingStore.selectedRoomID = this.roomID;
			// 		}
			// 		else{
			// 			//if not room is selected select the default room
			// 			this.bookingStore.selectedRoomID = Object.keys(this.bookingStore.roomData)[0];
			// 		}
			// }.bind({room:this.$route.params.roomID, bookingStore: this.bookingStore}));
			this.loadSelectedDateSchedule();
			// this.bookingStore.scheduleData = APIScheduleData;
		},
		methods: {
			dayRefreshCycle: async function(){

			},
			loadSelectedDateSchedule: function(){
				let selectedDate = this.bookingStore.selectedDate;
				let dates = []
				for (var i = -5; i <= 5; i++) {
					let date = new Date(selectedDate);
					date.setDate(selectedDate.getDate() + i);
					dates.push(date);
				}
				this.loadScheduleForDates(dates);
			},
			selectRoom: function(roomID){
				this.bookingStore.selectedRoomID = roomID;
			},
			selectedRoomColor: function(){
				if(this.bookingStore.selectedRoomID != ''){
					return this.bookingStore.roomData[this.bookingStore.selectedRoomID].primaryColor;
				}
				return '#979797';
				 
			},
			updateDate: function(newDate){
				this.bookingStore.selectedDate = newDate;
				this.loadSelectedDateSchedule();
				//load
			},
			loadScheduleForDates: async function(dates){
				//Data generation (remove when making the ajax request)
					let data = {
						"occupancyData": [
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
							},
							{
								"state": "booked",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
							},

							//....
						],
						"openTime": 720,//mins since midnight
					}
					let genericResponse = {"room1": data,"room2": data,"room3": data,"room4": data,};

					let response = {};
					for (var i = 0; i < dates.length; i++) {
						response[dates[i].toLocaleDateString('en-GB')] = genericResponse;
					}
					console.log(response);

				//ajax request with dates
				await this.delay(1000);
				//data assignment
				// setTimeout(() => {  
				// await delay(1000);
				for(var date in response) {
					this.bookingStore.scheduleData[date] = response[date];
				}
				// }, 2000);
					
			},
			//method for loading dates near the current one
		},
		computed: {
			bookingDataAvailable: function(){
				return this.bookingStore.selectedRoomID in this.bookingStore.roomData && this.bookingStore.formatedSelectedDate in this.bookingStore.scheduleData; // checks if undefined at the same time
			}
		}
	}
	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
</script>
<template>
	<div class="wide-container">
		<div class="font--prim-text text--400 m--b-25 text--S" v-if="bookingDataAvailable">
			Please select one of the rooms and the time period you would like to reserve
		</div>
		<div class="booking" v-if="bookingDataAvailable">
			<div class="booking__rooms">
				<div class="booking__room" @click="selectRoom(key)" :class="{'open': key == bookingStore.selectedRoomID, 'closed': bookingStore.selectedRoomID != '' && key != bookingStore.selectedRoomID}" v-for="(value, key) in bookingStore.roomData" :key="value" :style="'--roomColor:'+ value.primaryColor">
					<div class="booking__room-image">
						<img src="/assets/images/main.jpg" alt="">
					</div>
					<div class="booking__room-title font--prim-title text--700 text--L">
						{{value.name}}
					</div>
				</div>
			</div>
			<div class="booking__calendar-column">
				<div class="font--prim-text text--700 text--S m--b-10 text--center">Date</div>
				<Calendar :highlightColor="selectedRoomColor()" :defaultDate="bookingStore.selectedDate" @date-changed="updateDate"></Calendar>
			</div>
			<div class="booking__time-selector">
				<TimeRangeSelector :highlightColor="selectedRoomColor()" :occupancyData="bookingStore.scheduleData[bookingStore.formatedSelectedDate][bookingStore.selectedRoomID].occupancyData" :openTime="bookingStore.scheduleData[bookingStore.formatedSelectedDate][bookingStore.selectedRoomID].openTime"></TimeRangeSelector>
			</div>
		</div>
		<div class="loader" v-if="!bookingDataAvailable">
			<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
	</div>
	
</template>
<style scoped lang="scss">
	@import 'styles/utils/vars.scss';
	.wide-container{
		max-width: 1440px;
		margin: auto;
		padding: 0 50px;
		@media screen and (max-width: $tabletWidth) {
			padding: 0 15px;
		}
	}
	.booking {
		display: flex;
		justify-content: space-around;
		@media screen and (max-width: $tabletWidth) {
			flex-wrap: wrap;
		}
		
		&__rooms {
			height: 500px;
			flex: 0 0 190px;
			display: flex;
			flex-direction: column;
			margin-right: 50px;
			@media screen and (max-width: $smDesktopWidth) {
				margin-right: 15px;
			}
			@media screen and (max-width: $tabletWidth) {
				flex: 0 0 100%;
				margin: 0;
				margin-bottom: 75px;
			}

		}
		&__room {
			display: flex;
			flex-direction: column;
			flex: 5 1 0;
			transition: all 0.4s;
			filter: grayscale(1);
			cursor: pointer;
			.booking__room-title{
				background: #555;
			}
			&:hover{
				flex: 6 1 0;
				filter: grayscale(0);
				.booking__room-title{
					background: var(--roomColor);
				}
			}
			&.open{
				filter: grayscale(0);
				flex: 10 1 0;
				.booking__room-title{
					background: var(--roomColor);
				}
			}
			&.closed{
				//no styles for now xd
			}
		}
		&__room-image {
			flex-grow: 1;
			height: 0;
			&>img{
				height: 100%;
				width: 100%;
				object-fit:cover;
			}
		}
		&__room-title {
			flex: 0 0 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 0 0 5px 5px;
			transition: all 0.5s;
		}

		&__calendar-column {
			z-index: 5;
			flex: 0 0 255px;
			margin-right: 50px;
			@media screen and (max-width: $smDesktopWidth) {
				margin-right: 15px;
			}
			@media screen and (max-width: $tabletWidth) {
				margin: 0 auto;
			}
			@media screen and (max-width: $smTabletWidth) {
				flex: 0 0 100%;
			}
		}
		&__time-selector {
			flex: 1 0 0;
			max-width: 540px;
			
			@media screen and (max-width: $tabletWidth) {
				margin: auto;
				padding: 0 15px;
    			max-width: 410px;
			}
		}
	}

	.loader{
		display: flex;
		min-height: 50vh;
		justify-content: center;
		align-items: center;
		.lds-roller {
		  display: inline-block;
		  position: relative;
		  width: 80px;
		  height: 80px;
		}
		.lds-roller div {
		  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		  transform-origin: 40px 40px;
		}
		.lds-roller div:after {
		  content: " ";
		  display: block;
		  position: absolute;
		  width: 7px;
		  height: 7px;
		  border-radius: 50%;
		  background: #fff;
		  margin: -4px 0 0 -4px;
		}
		.lds-roller div:nth-child(1) {
		  animation-delay: -0.036s;
		}
		.lds-roller div:nth-child(1):after {
		  top: 63px;
		  left: 63px;
		}
		.lds-roller div:nth-child(2) {
		  animation-delay: -0.072s;
		}
		.lds-roller div:nth-child(2):after {
		  top: 68px;
		  left: 56px;
		}
		.lds-roller div:nth-child(3) {
		  animation-delay: -0.108s;
		}
		.lds-roller div:nth-child(3):after {
		  top: 71px;
		  left: 48px;
		}
		.lds-roller div:nth-child(4) {
		  animation-delay: -0.144s;
		}
		.lds-roller div:nth-child(4):after {
		  top: 72px;
		  left: 40px;
		}
		.lds-roller div:nth-child(5) {
		  animation-delay: -0.18s;
		}
		.lds-roller div:nth-child(5):after {
		  top: 71px;
		  left: 32px;
		}
		.lds-roller div:nth-child(6) {
		  animation-delay: -0.216s;
		}
		.lds-roller div:nth-child(6):after {
		  top: 68px;
		  left: 24px;
		}
		.lds-roller div:nth-child(7) {
		  animation-delay: -0.252s;
		}
		.lds-roller div:nth-child(7):after {
		  top: 63px;
		  left: 17px;
		}
		.lds-roller div:nth-child(8) {
		  animation-delay: -0.288s;
		}
		.lds-roller div:nth-child(8):after {
		  top: 56px;
		  left: 12px;
		}
		@keyframes lds-roller {
		  0% {
		    transform: rotate(0deg);
		  }
		  100% {
		    transform: rotate(360deg);
		  }
		}
	}

</style>