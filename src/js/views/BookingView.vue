<script>
	import {useBookingStore} from '../stores/BookingStore.js'

	export default{
		setup(){
			const bookingStore = useBookingStore()

			return {
				bookingStore,

			}
		},
		mounted(){
			if(this.$route.params.roomID){
				this.bookingStore.selectedRoomID = this.$route.params.roomID;
				this.$router.replace({ name: 'booking'  })
			}
			
		},
		methods: {
			selectedRoomColor: function(){
				if(this.bookingStore.selectedRoomID != ''){
					return this.bookingStore.roomData[this.bookingStore.selectedRoomID].primaryColor;
				}
				return '#979797';
				 
			}
		}
	}
</script>
<template>
	<div class="container">
		<div class="booking">
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
					<div class="booking__step" :class="{'active': bookingStore.bookingStep >= 0}">
						<div class="booking__step-circle">
							<span>1</span>
						</div>
						<div class="booking__step-text">
							<span>RESERVE</span>
						</div>
					</div>
					<div class="booking__steps-line" :class="{'active': bookingStore.bookingStep >= 0}"></div>
					<div class="booking__step" :class="{'active': bookingStore.bookingStep >= 1}">
						<div class="booking__step-circle">
							<span>2</span>
						</div>
						<div class="booking__step-text">
							<span>RESERVE</span>
						</div>
					</div>
					<div class="booking__steps-line" :class="{'active': bookingStore.bookingStep >= 1}"></div>
					<div class="booking__step" :class="{'active': bookingStore.bookingStep >= 2}">
						<div class="booking__step-circle">
							<span>3</span>
						</div>
						<div class="booking__step-text">
							<span>RESERVE</span>
						</div>
					</div>
				</div>
			</div>
			<router-view></router-view>
		</div>
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
			&.active{
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

</style>