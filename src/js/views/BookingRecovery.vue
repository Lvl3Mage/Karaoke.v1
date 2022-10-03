
<script setup>
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
			}
		},
		watch: {
		},
		mounted(){
			
			this.bookingStore.$reset();


			let uri = window.location.search.substring(1); 
			let params = new URLSearchParams(uri);
			let token = params.get("token");
			if(!token){
				this.recoveryFailed();
				return;
			}
			let data = new FormData();
			data.append('action', 'recoverReservationData');
			axios
				.post(api.baseURL,data)
				.then(response => {

					this.recoverRoomData();
					this.recoverItemData();

					this.bookingStore.selectedRoomID = response.roomID;
					this.bookingStore.selectedPeopleCount = response.peopleCount;
					this.bookingStore.orderDescription = response.orderDescription;

					this.bookingStore.reservationTTL = response.ttl;

					this.bookingStore.selectedDate = Date.parse(response.recoveryData.selectedDate);

					this.bookingStore.selectedRange = response.recoveryData.selectedRange;
					
					this.bookingStore.itemOrders = response.recoveryData.itemOrders;

					this.bookingStore.packOrders = response.recoveryData.packOrders;

					for (var i = 0; i < response.recoveryData.contactFields.length; i++) {
						this.bookingStore.contactFields[i].value = response.recoveryData.contactFields[i]
					}
				})
				.catch((err) => {
					this.recoveryFailed();
				});
		},
		methods: {
			recoverRoomData: function(){
				let data = new FormData();
				data.append('action', 'getRoomData');
				axios
					.post(api.baseURL,data)
					.then(response => {
						let roomIDs = Object.keys(response.data);
						for (let roomID of roomIDs) {
							let room = response.data[roomID];

							room.scheduleData = {
								occupancyData:{}
							};
							this.bookingStore.roomData[roomID] = room;
						}
						this.checkDataValidity();
					})
					.catch((err) => {
						this.recoveryFailed();
					});
			},
			recoverItemData: function(){
				let itemData = new FormData();
				itemData.append('action', 'getItemsList');
				axios
					.post(api.baseURL,itemData)
					.then(response => {
						this.bookingStore.itemData = response.data.itemData;
						this.bookingStore.packData = response.data.packageData;
						this.checkDataValidity();
					})			
					.catch((err) => {
						this.recoveryFailed();
					});
			},
			checkDataValidity: function(){
				let roomData = this.bookingStore.roomData;
				let itemData = this.bookingStore.itemData;
				let packData = this.bookingStore.packData;
				if(Object.keys(roomData).length != 0 && itemData != null && packData.length > 0){
					this.errorModalStore.OpenModal("Payment failed.", "Please try again.");
					this.$router.replace({ name: 'booking-step-3'  });
				}
			},
			recoveryFailed: function(){
				this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
				this.$router.replace({ name: 'booking-step-1'});
			}
		},
		computed: {
		}
	}
</script>
<template>
	<div class="loader">
		<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
	</div>
	
	
</template>
<style scoped lang="scss">
	@import 'styles/utils/vars.scss';
	
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