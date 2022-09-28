
<script setup>
	import { PhClock} from "phosphor-vue";
	const bookingStore = useBookingStore()
	const errorModalStore = useErrorModalStore();
</script>
<script>
	import {useBookingStore} from '../stores/BookingStore.js'
	import {useErrorModalStore} from '../stores/ErrorModalStore.js'
	import {axios, api} from '../App.vue';
	export default{
		data() {
			return {
				timerModalActive: false,
			}
		},
		watch: {
			timer: function(val){
				if(val == 60){
					this.timerModalActive = true;
				}
				if(val == null){
					this.timerModalActive = false;
					console.log(this.errorModalStore);
					this.errorModalStore.OpenModal("It seems your reservation time has expired.", 'You can attempt to reserve the same time again.');
					this.$router.replace({name:'booking-step-1'});	

				}
			},
		},
		mounted(){
			let data = new FormData();
			data.append('action', 'getRoomData');
			axios
				.post(api.baseURL,data)
				.then(response => {
					console.log(response);
					let roomIDs = Object.keys(response.data);
					for (let roomID of roomIDs) {
						let room = response.data[roomID];

						room.scheduleData = {
							occupancyData:{}
						};
						this.bookingStore.roomData[roomID] = room;
					}

					let uri = window.location.search.substring(1); 
					let params = new URLSearchParams(uri);
					let selectRoom = params.get("selectRoom");
					if(selectRoom in this.bookingStore.roomData){
						this.bookingStore.selectedRoomID = selectRoom;
					}
					else{
						for(let roomID of roomIDs){
							console.log(roomID)
							if(this.bookingStore.roomData[roomID].default){
								this.bookingStore.selectedRoomID = roomID;
								break;
							}
						}				
					}

					this.$router.replace({ name: 'booking'  });
			});
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
			// let response = APIRoomData;
			
			
		},
		methods: {
			selectedRoomColor: function(){
				if(this.bookingStore.selectedRoomID != ''){
					return this.bookingStore.roomData[this.bookingStore.selectedRoomID].primaryColor;
				}
				return '#979797';
				 
			},
			openTimerModal: function(){
				if(this.timer <= 60){
					this.timerModalActive = true;
				}
			},
			extendReservationTime: function(){
				let data = new FormData();
				data.append('action', 'extendTTL');
				data.append('token', this.bookingStore.reservationToken)
				axios
					.post(api.baseURL,data)
					.then(response => {
						console.log(response.data);
						if(response.data.status == 200){
							this.bookingStore.reservationTTL = response.data.ttl;
						}
						else{
							this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
						}
					})			
					.catch((err) => {
						this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
					});
					

				this.timerModalActive = false;
			},
		},
		computed: {
			bookingDataAvailable: function(){
				return this.bookingStore.selectedRoomID in this.bookingStore.roomData;
			},
			bgTextColor: function(){
				return this.bookingStore.roomData[this.bookingStore.selectedRoomID].highlightedTextColor;
			},
			timer: function(){
				return this.bookingStore.reservationTTL;
			},
			formattedTimer: function(){
				let time = this.timer;
				let minutes = Math.floor(time / 60);
				if(minutes < 10){
					minutes = "0" + minutes;
				}
				let seconds = time % 60;
				if(seconds < 10){
					seconds = "0" + seconds;
				}
				return minutes + ":" + seconds;
			}
		}
	}
</script>
<template>
	<div class="booking" v-if="bookingDataAvailable" :style="'--roomColor:' + selectedRoomColor() + '; --textColorBG:' + bgTextColor + ';'">
		<div class="container">
			<div class="booking__top-bar">
				<div class="booking__logo">
					<img :src="require('assetDir/images/logo.png')" alt="">
				</div>
				<div class="booking__complementary-wrapper">
					<div class="booking__title-wrapper">
						<span>Book me</span>
					</div>
					<div class="booking__timer-wrapper" :class="{'highlighted': bookingStore.reservationTTL <= 60}"  v-if="bookingStore.reservationTTL != null" @click="openTimerModal()">
						<ph-clock :size="23" color="#fff" /><span>{{formattedTimer}}</span>
					</div>	
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
							<span>Additions</span>
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
	<div class="def-modal light" :class="{'modal-active': timerModalActive}" @click="timerModalActive = false">
		<div class="def-modal__outer-container container">
			<div class="def-modal__inner-container def-modal__inner-container--50">
				<div class="def-modal__wrapper" @click.stop>
					<div class="def-modal__top">
						<div class="def-modal__title">
							<span class="modal-title"></span>
						</div>
						<div class="def-modal__cross" @click="timerModalActive = false">
							<div class="def-modal__cross-line def-modal__cross-line--1"></div>
							<div class="def-modal__cross-line def-modal__cross-line--2"></div>
						</div>
					</div>
					<div class="def-modal__content-wrapper def-modal-class-name modal-content-wrapper">
						<div class="alert-modal">
							<div class="alert-modal__title m--b-15">
								Your reservation time is about to expire
							</div>
							<div class="alert-modal__image">
								<img :src="require('assetDir/images/waiting.png')" alt="">
							</div>
							<div class="alert-modal__message m--b-45">
								Do you want to extend it?
							</div>
							<div class="alert-modal__buttons">
								<div class="alert-modal__button alert-modal__button--dismiss" @click="timerModalActive = false">
									No
								</div>
								<div class="alert-modal__button alert-modal__button--accept" @click="extendReservationTime()">
									Yes
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</div>
	<div class="def-modal light" :class="{'modal-active': errorModalStore.modalOpen}" @click="errorModalStore.modalOpen = false">
		<div class="def-modal__outer-container container">
			<div class="def-modal__inner-container def-modal__inner-container--50">
				<div class="def-modal__wrapper" @click.stop>
					<div class="def-modal__top">
						<div class="def-modal__title">
							<span class="modal-title"></span>
						</div>
						<div class="def-modal__cross" @click="errorModalStore.modalOpen = false">
							<div class="def-modal__cross-line def-modal__cross-line--1"></div>
							<div class="def-modal__cross-line def-modal__cross-line--2"></div>
						</div>
					</div>
					<div class="def-modal__content-wrapper def-modal-class-name modal-content-wrapper">
						<div class="alert-modal">
							<div class="alert-modal__title m--b-15">
								{{errorModalStore.modalTitle}}
							</div>
							<div class="alert-modal__message m--b-45">
								{{errorModalStore.modalText}}
							</div>
							<div class="alert-modal__buttons">
								<div class="alert-modal__button alert-modal__button--dismiss" @click="errorModalStore.modalOpen = false">
									Ok
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</div>
	
	
</template>
<style scoped lang="scss">
	@import 'styles/utils/vars.scss';
	
	.alert-modal {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		&__title {
			color: #232020;
			font-family: 'Playfair Display';
			font-style: normal;
			font-weight: 600;
			font-size: 24px;
			line-height: 40px;
		}
		&__image {
			img{
				width: 200px;
				height: auto;
			}
		}
		&__message {
			color: #232020;
			font-family: 'Playfair Display';
			font-style: normal;
			font-weight: 600;
			font-size: 28px;
		}
		&__buttons {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			width: 100%;
		}
		&__button {
			margin: 15px 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 150px;
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 600;
			font-size: 28px;
			border-radius: 14px;
			padding: 10px;
			cursor: pointer;
			&--dismiss {
				border: 1px solid #232020;
				color: #232020;
			}
			&--accept {
				color: #fff;
				background: #902FDC;
				

			}
		}
	}
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
		&__complementary-wrapper{
			display: flex;
			justify-content: space-between;
			align-items: center;
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
		&__timer-wrapper {
			position: absolute;
			bottom: 0;
			right: 0;

			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-size: 28px;
			line-height: 28px;
			@media screen and (max-width: $tabletWidth) {
				position: relative;
			}
			span{
				margin-left: 15px;
			}
			display: flex;
			align-items: center;
			color: #FFFFFF;
			&.highlighted{
				cursor: pointer;
				color: #FC4F53;
			}
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
					color: var(--textColorBG);
					box-shadow: 4px 4px 15px rgba(255, 255, 255, 0.9);
				}
				.booking__step-text{
					color: #FFF;
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