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
				nameregex: /(.|\s)*\S(.|\s)*/,
				emailregex: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
				phoneregex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
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
			nextView: function(){
				if(this.isStepComplete){
					this.$router.push(this.nextRoute);	
				}
				
			},
			prevView: function(){
				this.$router.push(this.prevRoute);
			}
		},

		computed: {
			isStepComplete: function(){
				return false;
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
					<div class="checkout__field">
						<div class="checkout__field-title">
							<span>Name *</span>
						</div>
						<InputField v-model="bookingStore.name" :placeholder="'David'" :regex="emailregex"></InputField>
					</div>	
					<div class="checkout__field">
						<div class="checkout__field-title">
							<span>E-mail *</span>
						</div>
						<InputField v-model="bookingStore.name" :placeholder="'example@example.com'" :regex="phoneregex"></InputField>
					</div>	
					<div class="checkout__field">
						<div class="checkout__field-title">
							<span>Phone *</span>
						</div>
						<InputField v-model="bookingStore.name" :placeholder="'+919367788755'" :regex="emailregex"></InputField>
					</div>	
				</div>
				
			</div>			
			<div class="checkout__window">
				<div class="shopping-cart-window">
					<ShoppingCartCheckout
						:prevEnabled="true"
						:nextEnabled="isStepComplete"
						@prev-clicked="prevView()"
						@next-clicked="nextView()"
					>
						<template v-slot:next-text>
							Confirm
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
		}
	}

</style>
