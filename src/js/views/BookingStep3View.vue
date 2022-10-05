<script setup>
	const bookingStore = useBookingStore();
	import ShoppingCartCheckout from '../components/ShoppingCartCheckout.vue'
	import InputField from '../components/InputField.vue'
	import ShoppingCart from '../components/ShoppingCart.vue'
	const errorModalStore = useErrorModalStore();
</script>
<!-- <script src="https://demo.myfatoorah.com/cardview/v2/session.js"></script> -->
<script>
	import {axios, api} from '../App.vue';
	import {useBookingStore} from '../stores/BookingStore.js'
	import {useErrorModalStore} from '../stores/ErrorModalStore.js'
	import $ from 'jquery';
	export default{
		data() {
			return {
				prevRoute: {name:'booking-step-2'},
				TOS: false,
				paymentModalOpen: false,

				recoveryData: '',
				bookingData: '',
				selectedPaymentMethod: '',
			}
		},
		watch: {

		},
		created(){
			this.bookingStore.openStep = 3;
		},
		mounted(){
			this.$nextTick(function(){
				$('.page-content-wrapper').scrollTop(0);
			});
			
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
					let data = new FormData();
					data.append('action', 'getPaymentMethods');
					data.append('price', this.bookingStore.totalPrice);
					axios
						.post(api.baseURL,data)
						.then(response => {
							let paymentMethods = response.data.paymentMethods;
							this.bookingStore.paymentMethods = [];
							for (var i = 0; i < paymentMethods.length; i++) {
								this.bookingStore.paymentMethods.push({
									id: paymentMethods[i].PaymentMethodId,
									preview: paymentMethods[i].ImageUrl,
									shadowColor: '#AAA'
								});
							}
						})
						.catch(function(error){
							console.log(error)
							this.paymentModalOpen = false;
							this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
						}.bind(this));
					this.paymentModalOpen = true;
				}
			},
			prevView: function(){
				this.$router.push(this.prevRoute);
			},
			submitBooking: function(){
				let contactFields = [];
				let contactFieldsOrdered = [];
				for (var i = 0; i < this.bookingStore.contactFields.length; i++) {
					contactFields.push({
						title: this.bookingStore.contactFields[i].title,
						value: this.bookingStore.contactFields[i].value,
					});
					contactFieldsOrdered.push(this.bookingStore.contactFields[i].value)
				}
				this.bookingData = JSON.stringify({
					itemOrders: this.bookingStore.activeOrders,
					packageOrders: this.bookingStore.packOrders,
					contactFields: contactFields,
					totalPrice: this.bookingStore.totalPrice,
					description: this.bookingStore.orderDescription,
				});
				this.recoveryData = JSON.stringify({
					selectedDate: this.bookingStore.selectedDate,
					selectedRange: this.bookingStore.selectedRange,
					itemOrders: this.bookingStore.itemOrders,
					packOrders: this.bookingStore.packOrders,
					contactFields: contactFieldsOrdered,
				});
				this.$nextTick(function(){
					document.forms["payment-submit-form"].submit(); 
				});
			},
		},

		computed: {
			selectedPaymentId: function(){
				if(this.bookingStore.paymentMethods.length-1 < this.bookingStore.selectedPaymentMethod){
					return null;
				}
				return this.bookingStore.paymentMethods[this.bookingStore.selectedPaymentMethod].id;
			},
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
						Сonfirm that I agree with the <a class="def-link" target="_blank" href="/privacy-policy">Terms of Service and Privacy Policy</a>
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
		
		<div class="def-modal" :class="{'modal-active': paymentModalOpen}" @click="paymentModalOpen = false">
			<div class="def-modal__outer-container container">
				<div class="def-modal__inner-container def-modal__inner-container--50">
					<div class="def-modal__wrapper" @click.stop>
						<div class="def-modal__top">
							<div class="def-modal__title">
								<span class="modal-title">Please select a payment method</span>
							</div>
							<div class="def-modal__cross" @click="paymentModalOpen = false">
								<div class="def-modal__cross-line def-modal__cross-line--1"></div>
								<div class="def-modal__cross-line def-modal__cross-line--2"></div>
							</div>
						</div>
						<div class="def-modal__content-wrapper def-modal-class-name modal-content-wrapper">
							<div class="" v-if="bookingStore.paymentMethods != null">
								<div class="payment-selection" >
									<div class="payment-selection__methods">
										<div class="payment-selection__method" :style="'--shadowColor:' + method.shadowColor" v-for="(method, i) in bookingStore.paymentMethods" :key="i" :class="{'active': i == bookingStore.selectedPaymentMethod}" @click="bookingStore.selectedPaymentMethod = i">
											<img :src="method.preview" alt="">
										</div>
									</div>
								</div>
								<button class="pay-submit-button" @click="submitBooking()">Confirm Payment</button>
								<form action="/payment" method="POST" class="pay-submit-form" name="payment-submit-form">
									<input type="hidden" :value="bookingData" name="bookinData"> 
									<input type="hidden" :value="selectedPaymentId" name="selectedPaymentMethod">
									<input type="hidden" :value="recoveryData" name="recoveryData">
									<input type="hidden" :value="this.bookingStore.reservationToken" name="token">
								</form>	
							</div>
							<div class="payment-selection__loader" v-if="bookingStore.paymentMethods == null">
								<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
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
	.pay-submit-button{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 600;
		font-size: 28px;
		border-radius: 14px;
		padding: 10px;
		cursor: pointer;
		border: 1px solid #232020;
		color: #232020;
	}
	.pay-submit-form{
		display: none;
	}
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
		&__loader {
			width: 100%;
			height: 40vh;
			display: flex;
			align-items: center;
			justify-content: center;
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


</style>
