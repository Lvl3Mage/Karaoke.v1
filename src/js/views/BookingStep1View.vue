<script setup>
	import Calendar from '../components/Calendar.vue'
	import TimeRangeSelector from '../components/TimeRangeSelector.vue'
	import PeopleCountSelector from '../components/PeopleCountSelector.vue'
	const bookingStore = useBookingStore()
</script>
<script>
	import {axios, api} from '../App.vue';
	import {useBookingStore} from '../stores/BookingStore.js'

	export default{
		data() {
			let pendingDateRequests = {};
			let roomNames = Object.keys(this.bookingStore.roomData);

			for (let roomName of roomNames) {
				pendingDateRequests[roomName] = {};
			}


			return {
				pendingDateRequests:pendingDateRequests,
				nextRoute: {name:"booking-step-2"},
				countAmogus: 0,
			}
		},
		watch: {
			selectedDate: function(){
				this.requestSelectedSchedule();
			},
		},
		created(){
			this.bookingStore.openStep = 1;
		},
		mounted(){
			// AXIOS
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
			this.requestSelectedSchedule();
		},
		methods: {
			dayRefreshCycle: async function(){

			},
			loadNearbySchedule: function(targetDate, targetRoom){
				let dates = []
				for (var i = -5; i <= 5; i++) {
					let date = new Date(targetDate);
					date.setDate(targetDate.getDate() + i);
					dates.push(date);
				}
				this.loadScheduleForDates(dates, targetDate, targetRoom);
			},
			selectRoom: function(roomID){
				this.bookingStore.selectedRoomID = roomID;
				this.requestSelectedSchedule();
			},
			
			loadScheduleForDates: async function(dates, targetDate, targetRoom){
				this.pendingDateRequests[targetRoom][this.bookingStore.formatDate(targetDate)] = "pending";

				//Data generation (remove when making the ajax request)
					let data = {
						"occupancyData": [
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
								"cost": 15,
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
								"cost": 15,
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
								"cost": 15,
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
								"cost": 15,
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
								"cost": 15,
							},
							{
								"state": "booked",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
								"cost": 15,
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
								"cost": 15,
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
								"cost": 15,
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
								"cost": 15,
							},
							{
								"state": "available",// available/booked/reserved
								"tokens": "TOKEN",//Token sent on request, only needed if states is "reserved"
								"cost": 15,
							},

							//....
						],
						"openTime": 720,//mins since midnight
					}
					let response = {};
					for (var i = 0; i < dates.length; i++) {
						response[dates[i].toLocaleDateString('en-GB')] = data;
					}
					

				console.log(response);
				delete this.pendingDateRequests[targetRoom][this.bookingStore.formatDate(targetDate)];
				for(var date in response) {
					this.bookingStore.roomData[targetRoom].scheduleData[date] = response[date];
				}
					
			},
			requestSelectedSchedule: function(){
				if(this.bookingStore.formatedSelectedDate in this.pendingDateRequests[this.bookingStore.selectedRoomID]){
					return;
				}
				this.loadNearbySchedule(this.bookingStore.selectedDate, this.bookingStore.selectedRoomID);
				
			},
			nextView: function(){
				if(this.isStepComplete){
					this.$router.push(this.nextRoute);	
				}
				
			},
		},

		computed: {
			selectedRoomColor: function(){
				return this.selectedRoom.primaryColor;
				 
			},
			selectedDate: function(){
				return this.bookingStore.selectedDate;
			},
			isStepComplete: function(){

				return this.bookingStore.stepCompletion >= this.$router.resolve(this.nextRoute).meta.minCompletion;
			},
			selectedRoom: function(){
				return this.bookingStore.roomData[this.bookingStore.selectedRoomID];
			},
			scheduleData: function(){
				return this.selectedRoom.scheduleData;
			},
			selectedSchedule: function(){
				return this.selectedRoom.scheduleData[this.bookingStore.formatedSelectedDate];
			},
			selectedOccupancyData: function(){
				return this.selectedSchedule.occupancyData;
			},
			bookingDataAvailable: function(){
				return this.bookingStore.formatedSelectedDate in this.scheduleData;
			},
			
		}
	}
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
						<img :src="selectedRoom.previewImage" alt="">
					</div>
					<div class="booking__room-title font--prim-title text--700 text--L">
						{{value.name}}
					</div>
				</div>
			</div>
			<div class="booking__calendar-column">
				<div class="font--prim-text text--700 text--S m--b-10 text--center">Date</div>
				<Calendar :highlightColor="selectedRoomColor" v-model="bookingStore.selectedDate" ></Calendar>
			</div>
			<div class="booking__time-selector">
				<TimeRangeSelector :highlightColor="selectedRoomColor" :occupancyData="selectedOccupancyData" :openTime="selectedSchedule.openTime" v-model="bookingStore.selectedRange"></TimeRangeSelector>
				<div class="booking__people-selector-row">
					<PeopleCountSelector :minCount="selectedRoom.minPeople" :maxCount="selectedRoom.maxPeople" :highlightColor="selectedRoomColor" v-model="bookingStore.selectedPeopleCount"></PeopleCountSelector>
					<div class="booking__price-wrapper">
						<span>Price</span>
						<div class="booking__price">{{bookingStore.roomPrice}}</div>
					</div>
				</div>
				<div class="booking__next-button-wrapper">
					<div class="booking__next-button" @click="nextView()" :class="{'disabled': !isStepComplete}" >
						<span>Next</span>
					</div>
				</div>
				
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
		&__people-selector-row{
			margin-top: 25px;
			padding: 0 25px;
			display: flex;
			justify-content: space-between;
			@media screen and (max-width: $phoneWidth) {
				justify-content: center;
				flex-direction: column;
				align-items: center;
				padding: 0;
			}
		}
		&__price-wrapper {
			align-self: start;
			
			font-family: 'Chivo';
			font-style: normal;
			font-weight: 900;
			font-size: 14px;
			line-height: 17px;
			flex: 0 1 160px;
			@media screen and (max-width: $phoneWidth) {
				margin-top: 15px;
				flex: auto;
				width: 160px;
			}
		}
		&__price {
			width: 100%;
			margin-top: 10px;
			padding: 4px 0;
			border: 1px solid #FFFFFF;
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
			border-radius: 8px;
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-size: 14px;
			line-height: 16px;
			display: flex;
			justify-content: center;
		}
		&__next-button-wrapper {
			display: flex;
			justify-content: flex-end;
			margin-top: 15px;
		}
		&__next-button {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-size: 32px;
			line-height: 38px;
			color: #232020;
			padding: 15px 50px;
			background: #FFFFFF;
			border-radius: 8px;
			cursor: pointer;
			transition: all 0.3s;
			@media screen and (max-width: $smTabletWidth) {
				text-align: center;
				width: 100%;
			}
			&.disabled{
				cursor: default;
				background: #777;
			}
			&:not(.disabled){
				&:hover{
					box-shadow: 0 0 20px 1px rgba(255,255,255,0.5);
				}
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
