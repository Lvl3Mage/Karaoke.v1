
<script>

	const APIRoomData = 
	{
		'room1': {
			primaryColor: '#902FDC',
			name: 'Hula',
			previewImage: '/assets/images/main.jpg', // link
			minPeople: 5,
			maxPeople: 10,
		},
		'room2': {
			primaryColor: '#1D4ED8',
			name: 'Party',
			previewImage: '/assets/images/main.jpg',
			minPeople: 2,
			maxPeople: 10,
		},
		'room3': {
			primaryColor: '#FEE159',
			name: 'Ukulele',
			previewImage: '/assets/images/main.jpg',
			minPeople: 5,
			maxPeople: 15,
		},
		'room4': {
			primaryColor: '#F569A3',
			name: 'Flamingo',
			previewImage: '/assets/images/main.jpg',
			minPeople: 5,
			maxPeople: 10,
		}
	};
	import {useBookingStore} from '../stores/BookingStore.js'
	import {axios, api} from '../App.vue';
	export default{
		setup(){
			const bookingStore = useBookingStore()

			return {
				bookingStore,

			}
		},
		mounted(){
			//
				// let data = new FormData();


					// data.append('username', this.log);

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
			let response = APIRoomData;
			let roomNames = Object.keys(response);
			for (let roomName of roomNames) {
				let room = response[roomName];

				room.scheduleData = {
					occupancyData:{}
				};


				this.bookingStore.roomData[roomName] = room;
			}


			if(this.$route.params.roomID in this.bookingStore.roomData){
				this.bookingStore.selectedRoomID = this.$route.params.roomID;
			}
			else{
				//if not room is selected select the first room
				this.bookingStore.selectedRoomID = Object.keys(this.bookingStore.roomData)[0];
				
			}

			this.$router.replace({ name: 'booking'  });
			
		},
		methods: {
			selectedRoomColor: function(){
				if(this.bookingStore.selectedRoomID != ''){
					return this.bookingStore.roomData[this.bookingStore.selectedRoomID].primaryColor;
				}
				return '#979797';
				 
			}
		},
		computed: {
			bookingDataAvailable: function(){
				return this.bookingStore.selectedRoomID in this.bookingStore.roomData;
			}
		}
	}
</script>
<template>
	<div class="booking" v-if="bookingDataAvailable">
		<div class="container">
			<div class="booking__top-bar">
				<div class="booking__logo">
					<img src="/assets/images/logo.png" alt="">
				</div>
				<div class="booking__title-wrapper">
					<span>Book me</span>
				</div>	
			</div>
			<div class="booking__steps-wrapper m--b-45" :style="'--roomColor:' + selectedRoomColor()">
				<div class="booking__steps">
					<router-link :to="{name: 'booking-step-1'}" class="booking__step" :class="{'active': bookingStore.openStep >= 1}">
						<div class="booking__step-circle">
							<span>1</span>
						</div>
						<div class="booking__step-text">
							<span>RESERVE</span>
						</div>
					</router-link>
					<div class="booking__steps-line" :class="{'active': bookingStore.openStep >= 1}"></div>
					<router-link :to="{name: 'booking-step-2'}" class="booking__step" :class="{'active': bookingStore.openStep >= 2}">
						<div class="booking__step-circle">
							<span>2</span>
						</div>
						<div class="booking__step-text">
							<span>Additionaly</span>
						</div>
					</router-link>
					<div class="booking__steps-line" :class="{'active': bookingStore.openStep >= 2}"></div>
					<router-link :to="{name: 'booking-step-3'}" class="booking__step" :class="{'active': bookingStore.openStep >= 3}">
						<div class="booking__step-circle">
							<span>3</span>
						</div>
						<div class="booking__step-text">
							<span>Confirmation</span>
						</div>
					</router-link>
				</div>
			</div>	
		</div>
		
		<router-view ></router-view>
	</div>
	<div class="loader" v-if="!bookingDataAvailable">
		<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
	</div>
	
	
</template>
<style scoped lang="scss">
	@import 'styles/utils/vars.scss';
	
	
	.booking {
		&__top-bar{
			position: relative;

		}
		&__logo {
			margin: auto;
			width: 150px;
			&>img{
				width: 100%;
				height: auto;
			}
		}
		&__title-wrapper {
			position: absolute;
			bottom: 0;
			left: 0;
			@media screen and (max-width: $tabletWidth) {
				position: relative;
				font-size: 48px;
			}

			font-family: serif;
			font-family: 'Playfair Display';
			font-style: normal;
			font-weight: 700;
			font-size: 64px;
		}
		&__steps-wrapper {
		}
		
		&__steps {
			margin: 30px auto 0 auto;
			width: 350px;
			@media screen and (max-width: $tabletWidth) {
				width: 280px;
			}
			// margin: auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&__step {
			position: relative;
			cursor: default;
			&.active{
				cursor: pointer;
				.booking__step-circle{
					background: var(--roomColor);
					border: 1px solid #FFFFFF;
					color: #FFFFFF;
					box-shadow: 4px 4px 15px rgba(255, 255, 255, 0.9);
				}
				.booking__step-text{
					color: #FFFFFF;
					text-shadow: 4px 4px 15px rgba(255, 255, 255, 0.9);
					
				}
			}
		}
		&__step-circle{
			width: 30px;
			height: 30px;
			background: #979797;
			color: #D9D9D9;
			border-radius: 30px;
			display: flex;
			align-items: center;
			justify-content: center;

			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-size: 16px;

			box-shadow: 4px 4px 15px rgba(255, 255, 255, 0);
			transition: all 0.5s;
		}
		&__step-text{
			text-transform: uppercase;
			position: absolute;
			bottom: 100%;
			left: 0;
			right: 0;
			display: flex;
			justify-content: center;

			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-size: 14px;

			color: #979797;

			box-shadow: 4px 4px 15px rgba(255, 255, 255, 0);
			transition: all 0.5s;

		}
		&__steps-line{
			height: 0;
			flex-grow: 1;
			border: 1px dashed #FFFFFF;
			z-index: -5;
			transition: all 0.5s;
			&.active{
				border: 1px dashed var(--roomColor);
				box-shadow: 4px 4px 15px rgba(255, 255, 255, 0.9);

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