<script setup>
	const bookingStore = useBookingStore();
	import ShoppingCartCheckout from '../components/ShoppingCartCheckout.vue'
	import InputField from '../components/InputField.vue'
</script>
<script>
	import {axios, api} from '../App.vue';
	import {useBookingStore} from '../stores/BookingStore.js'

	export default{
		data() {
			return {
				// nextRoute: {name:"booking-step-3"},
				prevRoute: {name:'booking-step-2'},
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
					valid = valid && !invalid;
					this.bookingStore.contactFields[i].invalid = invalid;
				}
				if(valid){
					//submit
				}
			},
			prevView: function(){
				this.$router.push(this.prevRoute);
			}
		},

		computed: {
			isStepComplete: function(){
				return true;
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
			<div class="checkout__window">
				<div class="shopping-cart-window">
					<ShoppingCartCheckout
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
					</ShoppingCartCheckout>	
				</div>

			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
	@import 'styles/utils/vars.scss';
	.shopping-cart-window{
		top: 25px;
		position: sticky;
		height: calc(100vh - 50px);
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
			@media screen and (max-width: 1200px) {
				width: 100%;
			}
		}
		&__fields{
			display: flex;
			flex-wrap: wrap;
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
			padding: 15px;
			flex: 0 0 50%;
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
