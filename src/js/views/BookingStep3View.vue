<script setup>
	const bookingStore = useBookingStore();
	import ShoppingCartCheckout from '../components/ShoppingCartCheckout.vue'
	import InputField from '../components/InputField.vue'
	import ShoppingCart from '../components/ShoppingCart.vue'
	const errorModalStore = useErrorModalStore();
</script>
<script>
	import {axios, api} from '../App.vue';
	import {useBookingStore} from '../stores/BookingStore.js'
	import {useErrorModalStore} from '../stores/ErrorModalStore.js'

	export default{
		data() {
			return {
				// nextRoute: {name:"booking-step-3"},
				prevRoute: {name:'booking-step-2'},
				TOS: false,
			}
		},
		watch: {

		},
		created(){
			this.bookingStore.openStep = 3;
		},
		mounted(){

		},
		methods: {
			attemptSubmit: function(){
				let valid = true;
				for (var i = 0; i < this.bookingStore.contactFields.length; i++) {
					let invalid = !this.bookingStore.contactFields[i].regex.test(this.bookingStore.contactFields[i].value);
					if(this.bookingStore.contactFields[i].obligatory){
						valid = valid && !invalid;
						this.bookingStore.contactFields[i].invalid = invalid;	
					}
				}
				if(valid){
					let contactFields = [];
					for (var i = 0; i < this.bookingStore.contactFields.length; i++) {
						contactFields.push({
							title: this.bookingStore.contactFields[i].title,
							value: this.bookingStore.contactFields[i].value,
						});
						
					}
					let bookingData = {
						itemOrders: this.bookingStore.activeOrders,
						packageOrders: this.bookingStore.packOrders,
						contactFields: contactFields,
						totalPrice: this.bookingStore.totalPrice,
						description: this.bookingStore.orderDescription,
					};
					bookingData = JSON.stringify(bookingData);
					// let amougs = {
					// 	data: bookingData,
					// }
					// console.log(JSON.stringify(amougs));
					// console.log(bookingData);
					let data = new FormData();
					console.log(bookingData);
					data.append('action', 'createBooking');
					data.append('bookingData', bookingData);
					data.append('token', this.bookingStore.reservationToken);
					axios
						.post(api.baseURL,data)
						.then(response => {

							console.log(response.data);
							window.location.replace("https://karaoke.marmadot.com/booking-confirmation?token=" + this.bookingStore.reservationToken + '&order=' + response.data.booking_id);
							// if(response.data.status == 200){
								
							// }
							// else{
							// 	this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
							// }
							

					});
				}
			},
			prevView: function(){
				this.$router.push(this.prevRoute);
			}
		},

		computed: {
			isStepComplete: function(){
				return this.TOS;
			},
			selectedRoomColor: function(){
				return this.selectedRoom.primaryColor;
				 
			},
			selectedRoom: function(){
				return this.bookingStore.roomData[this.bookingStore.selectedRoomID];
			},
		}
	}
</script>
<template>
	<div class="container">
		<div class="checkout">
			<div class="checkout__window">
				<div class="">Please enter your details</div>
				<div class="checkout__fields">
					<div class="checkout__field" v-for="field in bookingStore.contactFields" :key="field">
						<div class="checkout__field-title">
							<span>{{field.title}} </span><span v-if="field.obligatory">*</span>
						</div>
						<InputField 
							v-model="field.value" 
							:placeholder="field.placeholder" 
							:invalid="field.invalid" 
							:invalidMessage="field.invalidMessage"
							@fieldClick="field.invalid = false"
						></InputField>
					</div>	
				</div>
				<div class="tos__checkbox-wrapper">
					<div class="tos__checkbox-tick" @click="TOS = !TOS">
						<img :src="require('assetDir/images/svg/tick.svg')" alt="tick"  v-if="TOS">
					</div>
					<div class="tos__checkbox-text">
						Сonfirm that I agree with the Terms of Service and Privacy Policy
					</div>	
				</div>
				<div class="payment-selection" >
					<div class="payment-selection__title">
						Please choose a payment method
					</div>
					<div class="payment-selection__methods">
						<div class="payment-selection__method" :style="'--shadowColor:' + method.shadowColor" v-for="(method, i) in bookingStore.paymentMethods" :key="i" :class="{'active': i == bookingStore.selectedPaymentMethod}" @click="bookingStore.selectedPaymentMethod = i">
							<img :src="method.preview" alt="">
						</div>
					</div>
				</div>
			</div>		
			<div class="checkout__window checkout__window--mt">
				<div class="shopping-cart-window">
					<ShoppingCart
						:prevEnabled="true"
						:nextEnabled="isStepComplete"
						@prev-clicked="prevView()"
						@next-clicked="attemptSubmit()"
					>
						<template v-slot:next-text>
							Pay
						</template>
						<template v-slot:prev-text>
							Back
						</template>
					</ShoppingCart>	
				</div>

			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	@import 'styles/utils/vars.scss';
	.tos{
		&__checkbox-wrapper {
			display: flex;
			align-items: center;
			margin-bottom: 25px;
		}
		&__checkbox-tick {
			cursor: pointer;
			width: 20px;
			height: 20px;
			border: 1px solid #FFFFFF;
			border-radius: 4px;
			margin-right: 15px;
			display: flex;
			justify-content: center;
			align-items: center;
			img{
				width: 80%;
				height: auto;
			}
		}
		&__checkbox-text {
			font-family: 'Chivo';
			font-style: normal;
			font-weight: 400;
			font-size: 12px;
		}
	}
	.shopping-cart-window{
		top: 25px;
		position: sticky;
		// height: calc(100vh - 50px);
		@media screen and (max-width: 1200px) {
			height: auto;
		}
		overflow-y: auto;
		padding: 15px;
		scrollbar-width: thin;
		&::-webkit-scrollbar {
			width: 15px;
			@media screen and (max-width: $phoneWidth){
				width: 10px;
			}
		}

		&::-webkit-scrollbar-track {
			background-color: $background-color;
			border-radius: 5px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: #555;
			border: 3px solid transparent;
			border-radius: 5px;
			background-clip: content-box;
		}
	}
	.checkout {
		display: flex;
		@media screen and (max-width: 1200px) {
			flex-direction: column;
		}
		&__window{
			width: 50%;
			&--mt{
				margin-top: 28px;
				@media screen and (max-width: 1200px) {
					margin-top: 0;
				}
			}
			@media screen and (max-width: 1200px) {
				width: 100%;
				
			}
		}
		&__fields{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			margin-top: 25px;
		}
		&__field-title	{
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-size: 14px;
			line-height: 16px;
			margin-bottom: 15px;
		}
		&__field{
			flex: 0 0 calc(50% - 15px);
			@media screen and (max-width: $phoneWidth) {
				flex: 0 0 100%;
			}
		}
	}
	.payment-selection {
		&__title {
			font-family: 'Chivo';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			margin-bottom: 25px;
		}
		&__methods {
			display: flex;
			flex-wrap: wrap;
		}
		&__method {
			flex: 0 0 25%;
			@media screen and (max-width: $smTabletWidth) {
				flex: 0 0 33%;
			}
			padding: 15px;
			cursor: pointer;
			filter: drop-shadow(0 0 0 transparent);
			transition: all 0.5s;
			&.active{
				filter: drop-shadow(0 0 10px var(--shadowColor))
			}
			img{
				width: 100%;
				height: auto;
			}
		}
	}


</style>
