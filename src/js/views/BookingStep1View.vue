<script setup>
	import Calendar from '../components/Calendar.vue'
	import TimeRangeSelector from '../components/TimeRangeSelector.vue'
	import PeopleCountSelector from '../components/PeopleCountSelector.vue'
	const bookingStore = useBookingStore()
</script>
<script>
	import $ from "jquery";
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
				testCount: 15,
				pendingDateRequests:pendingDateRequests,
				nextRoute: {name:"booking-step-2"},
				countAmogus: 0,
				dayRefreshActive: false,
				priceModalOpen: false,
			}
		},
		watch: {
			selectedDate: function(){
				this.requestSelectedSchedule();
			},
			selectedSchedule: function(){
				if(this.bookingStore.selectedRange != null && this.bookingDataAvailable){
					if(this.bookingStore.selectedRange.endIndex >= this.selectedSchedule.occupancyData.length){
						this.bookingStore.selectedRange = null;
					}	
				}
			}
		},
		created(){
			this.bookingStore.openStep = 1;
		},
		mounted(){
			if(this.bookingStore.scrollToRoomSelection){
				this.scrollToAsync('.booking__rooms');
				this.bookingStore.scrollToRoomSelection = false;
			}
			
			this.requestSelectedSchedule();
			this.dayRefreshCycle();
		},
		methods: {
			scrollToAsync: async function(targetSelector){
				while(!this.bookingDataAvailable){
					await delay(100);
				}
				this.$nextTick(function(){
					$('.page-content-wrapper').stop().animate(
						{
							scrollTop:$(targetSelector).offset().top + $('.page-content-wrapper').scrollTop() -60
						}, 500, 'swing');
				});
			},
			dayRefreshCycle: async function(){
				this.dayRefreshActive = true;
				let timer = 0;
				while (this.dayRefreshActive){
					await delay(100);
					timer += 100;
					if(timer > 10000){
						if(!(this.bookingStore.dictFormatedSelectedDate in this.pendingDateRequests[this.bookingStore.selectedRoomID])){
							this.loadScheduleForDates(this.bookingStore.selectedDate, this.bookingStore.selectedDate, this.bookingStore.selectedDate,this.bookingStore.selectedRoomID);
						}
						timer = 0;
					}
				}
				console.log('day refresh exit');
				
				
			},
			loadNearbySchedule: function(targetDate, targetRoom){
				let startDate = new Date(targetDate);
				startDate.setDate(startDate.getDate() - 5);
				let endDate = new Date(targetDate);
				endDate.setDate(endDate.getDate() + 5);
				this.loadScheduleForDates(startDate, endDate, targetDate, targetRoom);
			},
			selectRoom: function(roomID){
				this.bookingStore.selectedRoomID = roomID;
				this.requestSelectedSchedule();
				this.scrollToAsync('.booking__calendar-column');
			},
			
			loadScheduleForDates: async function(startDate, endDate, targetDate, targetRoom){
				this.pendingDateRequests[targetRoom][this.bookingStore.formatDictDate(targetDate)] = "pending";

				let data = new FormData();
				data.append('action', 'getScheduleData');

				data.append('room-id', targetRoom);
				data.append('start-date', this.bookingStore.formatDictDate(startDate));
				data.append('end-date', this.bookingStore.formatDictDate(endDate));
				let token = ''
				if(this.bookingStore.reservationToken != null){
					token = this.bookingStore.reservationToken;
				}
				data.append('token', token);
				data.append('clientTimeZone', (new Date()).getTimezoneOffset());
				axios
					.post(api.baseURL,data)
					.then(response => {
						console.log(response.data);
						delete this.pendingDateRequests[targetRoom][this.bookingStore.formatDictDate(targetDate)];
						for(var date in response.data) {
							var time = response.data[date].work_time.open.split(':');
							var minutes = (+time[0]) * 60 + (+time[1]);
							let scheduleData = {
								occupancyData: response.data[date].occupancyData,
								openTime: minutes,
							}

							for(let hourID in scheduleData.occupancyData){
								scheduleData.occupancyData[hourID].state = scheduleData.occupancyData[hourID].availability;
								delete scheduleData.occupancyData[hourID].availability;
							}
							if(this.bookingStore.selectedRange != null){
								if(this.bookingStore.selectedRange.endIndex >= scheduleData.occupancyData.length){
									this.bookingStore.selectedRange = null;
								}	
							}			
							this.bookingStore.roomData[targetRoom].scheduleData[date] = scheduleData;
						}
				});
			},
			requestSelectedSchedule: function(){
				if(this.bookingStore.dictFormatedSelectedDate in this.pendingDateRequests[this.bookingStore.selectedRoomID]){
					return;
				}
				this.loadNearbySchedule(this.bookingStore.selectedDate, this.bookingStore.selectedRoomID);
				
			},
			nextView: function(){
				if(this.isStepComplete){
					this.$router.push(this.nextRoute);	
				}
				
			},
			getTimeSegmentColor: function(segmentID){
				if(this.selectedOccupancyData[segmentID].state == 'occupied'){
					return '#979797';
				}
				else if(this.bookingStore.selectedRange != null){
					let range = this.bookingStore.selectedRange;
					if(range.startIndex <= segmentID && range.endIndex >= segmentID){
						return this.selectedRoomColor;
					}
				}
				return '#FFF'
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
				return this.selectedRoom.scheduleData[this.bookingStore.dictFormatedSelectedDate];
			},
			selectedOccupancyData: function(){
				return this.selectedSchedule.occupancyData;
			},
			bookingDataAvailable: function(){
				return this.bookingStore.dictFormatedSelectedDate in this.scheduleData;

			},
			
		},
		beforeUnmount(){
			this.dayRefreshActive = false;
		}
	}
	function setCookie(name,value,days) {
	    var expires = "";
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days*24*60*60*1000));
	        expires = "; expires=" + date.toUTCString();
	    }
	    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}
	const delay = ms => new Promise(res => setTimeout(res, ms));
</script>
<template>
	<!-- {{bookingDataAvailable}} -->
	<div class="wide-container">
		<div class="font--prim-text text--400 m--b-25 text--S" v-if="bookingDataAvailable">
			Please select one of the rooms and the time period you would like to reserve
		</div>
		<div class="booking" v-if="bookingDataAvailable">
			<div class="booking__rooms">
				<div class="booking__room" @click="selectRoom(key)" :class="{'open': key == bookingStore.selectedRoomID, 'closed': bookingStore.selectedRoomID != '' && key != bookingStore.selectedRoomID}" v-for="(value, key) in bookingStore.roomData" :key="value" :style="'--roomColor:'+ value.primaryColor">
					<div class="booking__room-image">
						<img :src="value.previewImage" alt="">
					</div>
					<div class="booking__room-title font--prim-title text--700 text--L">
						{{value.name}}
					</div>
				</div>
			</div>
			<div class="booking__calendar-column">
				<div class="font--prim-text text--700 text--S m--b-10 text--center">Date</div>
				<Calendar :highlightColor="selectedRoomColor" v-model="bookingStore.selectedDate" ></Calendar>
				<div class="microphone microphone--desktop">
					<div class="microphone__outer-wrapper">
						<!-- transformAxisRotation is a little innacturate but it's accurate enough to look good so I'm going to leave it here -->
						<!-- I've added a 7 to the total rotation to reduce the size a little (this way there's a gap) -->
						<div v-for="(hour, i) in selectedOccupancyData" :key="i" class="microphone__circle-section" 
						:style="'--transformAxisRotation:' + (Math.acos((4/(selectedOccupancyData.length))) * 180/Math.PI + 7) +'deg' + '; --offset:' + ((i/(selectedOccupancyData.length))*360 + 270 + 180/selectedOccupancyData.length) + 'deg ; --color:'+getTimeSegmentColor(i)+ ';'">
							
						</div>
						<div class="microphone__inner-wrapper">
							<div class="microphone__image rotate-to-mouse" data-lerp-speed="0.1">
								<img :src="require('assetDir/images/svg/microphone.svg')" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="booking__time-selector">
				<TimeRangeSelector :highlightColor="selectedRoomColor" :occupancyData="selectedOccupancyData" :openTime="selectedSchedule.openTime" v-model="bookingStore.selectedRange"></TimeRangeSelector>
				<div class="booking__view-price-button-wrapper">
					<div class="booking__view-price-button" @click="priceModalOpen = true">
						View schedule / prices
					</div>	
				</div>
				<div class="booking__people-selector-row">
					<PeopleCountSelector :minCount="selectedRoom.minCapacity" :maxCount="selectedRoom.maxCapacity" :highlightColor="selectedRoomColor" v-model="bookingStore.selectedPeopleCount"></PeopleCountSelector>
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
				<div class="microphone microphone--mobile">
					<div class="microphone__outer-wrapper">
						<!-- transformAxisRotation is a little innacturate but it's accurate enough to look good so I'm going to leave it here -->
						<!-- I've added a 7 to the total rotation to reduce the size a little (this way there's a gap) -->
						<div v-for="(hour, i) in selectedOccupancyData" :key="i" class="microphone__circle-section" 
						:style="'--transformAxisRotation:' + (Math.acos((4/(selectedOccupancyData.length))) * 180/Math.PI + 7) +'deg' + '; --offset:' + ((i/(selectedOccupancyData.length))*360 + 270 + 180/selectedOccupancyData.length) + 'deg ; --color:'+getTimeSegmentColor(i)+ ';'">
							
						</div>
						<div class="microphone__inner-wrapper">
							<div class="microphone__image rotate-to-mouse" data-lerp-speed="0.1">
								<img :src="require('assetDir/images/svg/microphone.svg')" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="def-modal" :class="{'modal-active': priceModalOpen}" @click="priceModalOpen = false">
			<div class="def-modal__outer-container container">
				<div class="def-modal__inner-container def-modal__inner-container--75">
					<div class="def-modal__wrapper" @click.stop>
						<div class="def-modal__top m--b-15">
							<div class="def-modal__title price-modal__title">
								<span class="modal-title">Schedule information</span>
							</div>
							<div class="def-modal__cross" @click="priceModalOpen = false">
								<div class="def-modal__cross-line def-modal__cross-line--1"></div>
								<div class="def-modal__cross-line def-modal__cross-line--2"></div>
							</div>
						</div>
						<div class="def-modal__content-wrapper def-modal-class-name modal-content-wrapper">
							<div class="price-modal__elements">
								<div class="price-modal__element" v-for="info in selectedRoom.scheduleInfo" :key="info">
									<div class="price-modal__element-title">
										{{info.title}}
									</div>
									<div class="price-modal__element-content">
										{{info.content}}
									</div>
								</div>
							</div>
							<div class="price-modal__additional-info" v-for="info in selectedRoom.additionalInfo" :key="info">
								{{info}}
							</div>
						</div>
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
	.microphone {
		&--desktop{
			@media screen and (max-width: $smTabletWidth) {
				display: none;
			}
		}
		&--mobile{
			@media screen and (min-width: $smTabletWidth) {
				display: none;
			}
		}
		position: relative;
		z-index: -1;
		width: 100%;
		aspect-ratio: 1/1;
		display: flex;
		justify-content: center;
		align-items: center;
		@media screen and (max-width: $smTabletWidth) {
			margin: auto;
			width: 70%;
		}
		&__outer-wrapper {
			width: 80%;
			height: 80%;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			overflow: hidden;
			border-radius: 50%;
			// border: 15px solid var(--highlight-color, #FFF);
			// background: var(--highlight-color, #FFF);
			// box-shadow: 4px 4px 15px var(--highlight-color, #FFF);
		}
		&__circle-section{
			z-index: 0;
			position: absolute;
			width: 100%;
			height: 100%;
			transition: all 0.4s;
			background: var(--color);
			transform: rotate(var(--offset)) translateX(70%) rotate3d(1, 0, 0, var(--transformAxisRotation)) rotate(45deg);

		}
		&__inner-wrapper {
			z-index: 1;
			width: calc(100% - 35px);
			height: calc(100% - 35px);
			border-radius: 50%;
			background: $background-color;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		&__image {
			// transition: all 0.5s;
			// transform: rotate(var(--desired-rotation));
			width: 60%;
			height: 60%;
			img{
				height: 100%;
				width: 100%;
				object-fit:contain;
				transform: translateX(9%);
			}
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
				order: 1;

				flex: 0 0 100%;
				margin: 0;
				margin-top: 25px;
				margin-bottom: 75px;
			}

		}
		&__room {
			@media screen and (max-width: $tabletWidth) {
				overflow: hidden;
				border-radius: 5px;
			}
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
					color: var(--textColorBG);
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
			display: flex;
			flex-direction: column;
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
		&__view-price-button-wrapper{
			display: flex;
			padding: 15px 0;
			justify-content: flex-end;
		}
		&__view-price-button {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-size: 12px;
			line-height: 15px;
			color: #232020;
			padding: 7px 10px;
			background: #FFFFFF;
			border-radius: 8px;
			cursor: pointer;
			transition: all 0.3s;
			@media screen and (max-width: $smTabletWidth) {
				text-align: center;
				width: 100%;
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
	.price-modal {
		&__title{
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-size: 24px;
			color: #FC4F53;
		}
		&__elements {
			margin-bottom: 25px;
		}
		&__element {
			display: flex;
			&-title{
				flex: 0 0 50%;
				font-weight: 700;
				font-size: 16px;
			}
			&-content{
				flex: 0 0 50%;
				font-weight: 400;
				font-size: 14px;
			}
			// &:before{
			// 	content: '';
			// 	flex: 0 0 4px;
			// 	height: 4px;
			// 	border-radius: 4px;
			// 	background: #232020;
			// 	align-self: center;
			// 	margin-right: 10px;
			// }
		}
		&__additional-info{
			margin-bottom: 25px;
			text-align: center;
			font-weight: 700;
			font-size: 14px;
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
