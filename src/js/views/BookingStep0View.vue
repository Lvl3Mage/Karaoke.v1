<script setup>
	import Calendar from '../components/Calendar.vue'
	const bookingStore = useBookingStore()
</script>
<script>
	import {useBookingStore} from '../stores/BookingStore.js'

	export default{
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
		<div class="font--prim-text text--400 m--b-25 text--S">
			Please select one of the rooms and the time period you would like to reserve
		</div>
		
		<div class="booking">
			<div class="booking__rooms">
				<div class="booking__room" @click="selectRoom(key)" :class="{'open': key == bookingStore.selectedRoomID, 'closed': bookingStore.selectedRoomID != '' && key != bookingStore.selectedRoomID}" v-for="(value, key) in bookingStore.roomData" :key="value" :style="'--roomColor:'+ value.primaryColor">
					<div class="booking__room-image ibg ibg--cover">
						<img src="/assets/images/main.jpg" alt="">
					</div>
					<div class="booking__room-title font--prim-title text--700 text--L">
						{{value.name}}
					</div>
				</div>
			</div>
			<div class="booking__callendar-column">
				<Calendar></Calendar>
			</div>
			<div class="booking__time-selector">
				
			</div>
			
		</div>
	</div>
	
</template>
<style scoped lang="scss">
	.booking {
		display: flex;
		justify-content: space-between;
		&__rooms {
			height: 500px;
			flex: 0 0 25%;
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
				}
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
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 0 0 5px 5px;
			transition: all 0.5s;
		}

		&__callendar-column {
			flex: 0 0 30%;
		}
		&__time-selector {
			flex: 0 0 40%;
		}
	}
</style>