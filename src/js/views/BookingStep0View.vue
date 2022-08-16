<script>
	import {useBookingStore} from '../stores/BookingStore.js'

	export default{
		setup(){
			const bookingStore = useBookingStore()

			return {
				bookingStore,

			}
		},
		data() {
			return {
			}
		},
		mounted(){
		},
		methods: {
			selectRoom: function(roomID){
				this.bookingStore.selectedRoomID = roomID;
			}
		}
	}
</script>
<template>
	<div class="container">
		<span class="">
			Please select one of the rooms and the time period you would like to reserve
		</span>
		
		<div class="booking">
		<div class="booking__rooms">
			<div class="booking__room" @click="selectRoom(key)" :class="{'open': key == bookingStore.selectedRoomID, 'closed': bookingStore.selectedRoomID != '' && key != bookingStore.selectedRoomID}" v-for="(value, key) in bookingStore.roomData" :key="value" :style="'--roomColor:'+ value.primaryColor">
				<div class="booking__room-image ibg ibg--cover">
					<img src="/assets/images/main.jpg" alt="">
				</div>
				<div class="booking__room-title">
					{{value.name}}
				</div>
			</div>
		</div>
		<div class="booking__main-content-wrapper">
			<div class="booking__date-time-selectors">
				
			</div>	
		</div>
		
	</div>
	</div>
	
</template>
<style scoped lang="scss">
	.booking {
		&__rooms {
			height: 500px;
			display: flex;
			flex-direction: column;
		}
		&__room {
			display: flex;
			flex-direction: column;
			flex: 5 1 0;
			transition: all 0.4s;
			filter: grayscale(1);
			cursor: pointer;
			&:hover{
				flex: 6 1 0;
				filter: grayscale(0);
			}
			&.open{
				filter: grayscale(0);
				flex: 10 1 0;
			}
			&.closed{
				//no styles for now xd
			}
		}
		&__room-image {
			flex-grow: 1;
		}
		&__room-title {
			flex: 0 0 50px;
			background: var(--roomColor);
			display: flex;
			justify-content: center;
			align-items: center;

			font-family: 'PT Sans';
			font-style: normal;
			font-weight: 700;
			font-size: 30px;
			border-radius: 0 0 5px 5px;
		}
	}
</style>