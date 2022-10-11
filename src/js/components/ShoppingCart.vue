<template>
	<div class="cart">
		<div class="cart__title">
			You have ordered
		</div>
		<div class="cart__section-title">
			Room
		</div>
		<div class="cart__room">
			<div class="cart__room-preview">
				<img :src="selectedRoom.previewImage" alt="">
			</div>
			<div class="cart__room-details">
				<div class="cart__room-title-wrapper">
					<div class="cart__room-title">
						{{selectedRoom.name}} Room
					</div>
					<div class="cart__room-price price-underline">
						{{bookingStore.roomPrice}} KD
					</div>
				</div>
				<div class="cart__room-row">
					<span>Date: {{bookingStore.selectedDate.toLocaleDateString('en-GB')}}</span>
				</div>
				<div class="cart__room-row">
					<span>Time: {{bookingStore.selectedRange.startTime}} - {{bookingStore.selectedRange.endTime}}</span>
				</div>
				<div class="cart__room-row">
					<span>People: {{bookingStore.selectedPeopleCount}}</span>
				</div>
			</div>
		</div>
		<div class="cart__section-title">
			<span>Additionally</span>
		</div>
		<div class="cart__orders">
			<div class="cart__order" v-for="(order, i) in activeOrders" :key="i">
				<div class="cart__order-content">
					<div class="cart__order-title">
						{{order.title}}:
					</div>
					<div class="cart__order-units">
						<div class="cart__order-units-change-button" @click="changeOrderCount(i,-1)" v-if="!order.description">
							-
						</div>
						<span>{{order.count}} {{pluralUnitCheck(order.count,'unit','units')}}</span>
						<div class="cart__order-units-change-button" @click="changeOrderCount(i,1)" v-if="!order.description">
							+
						</div>
					</div>
					<div class="cart__order-remove" @click="removeOrder(i)">
						Remove
						<div class="cart__order-cross"></div>
					</div>
					<div class="cart__order-price price-underline">
						{{order.count*order.price}} KD
					</div>
				</div>
				<div class="cart__order-details" v-if="order.description">
					{{order.description}}
				</div>
			</div>
			<div class="cart__order" v-for="(order, i) in bookingStore.packOrders" :key="i">
				<div class="cart__order-content">
					<div class="cart__order-title">
						{{order.title}}:
					</div>
					<div class="cart__order-remove" @click="bookingStore.packOrders.splice(i,1)">
						Remove
						<div class="cart__order-cross"></div>
					</div>
					<div class="cart__order-price price-underline">
						{{order.price}} KD
					</div>
				</div>
				<div class="cart__order-details" >
					<textarea rows="4" cols="50" placeholder="Specify any package details here. We will contact you if any additional details will be needed" v-model="order.description"></textarea>
				</div>
			</div>
		</div>


		<div class="cart__description cart-bottom">
			<textarea rows="4" cols="50" placeholder="Add any additional comments here" v-model="bookingStore.orderDescription"></textarea>
		</div>
		<div class="cart__price">
			<span class="cart__price-title">Total Price</span>
			<span class="cart__price-total price-underline">{{bookingStore.totalPrice.toFixed(2)}}</span>
		</div>
		
	</div>
	<div class="cart__buttons">
		<div class="cart__button cart__button--prev" :class="{'active': prevEnabled}" @click="prevClick()">
			<span>
				<slot name="prev-text">Back</slot>
			</span>
		</div>
		<div class="cart__button cart__button--next" :class="{'active': nextEnabled}" @click="nextClick()">
			<span>
				<slot name="next-text">Next</slot>
			</span>
		</div>
	</div>
</template>

<script setup>
	import {useBookingStore} from '../stores/BookingStore.js'
	const bookingStore = useBookingStore()
</script>
<script>
	export default{
		props: ['nextEnabled', 'prevEnabled'],
		data() {
			return {
			}
		},
		created(){
		},
		mounted(){
		},
		watch:{
			// modelValue:function(val){
			// 	this.selectedDate = val;
			// },
		},
		emits: ['prev-clicked', 'next-clicked'],
		//you gae
		methods: {
			prevClick: function(){
				if(this.prevEnabled){
					this.$emit('prev-clicked');
				}
			},
			nextClick: function(){
				if(this.nextEnabled){
					this.$emit('next-clicked');
				}
			},
			changeOrderCount: function(orderID, change){
				if(this.activeOrders[orderID].count + change <= 0){
					this.removeOrder(orderID);
					return
				}
				this.activeOrders[orderID].count += change;
			},
			removeOrder: function(index){
				this.activeOrders[index].active = false;
			},
			pluralUnitCheck: function(count, singleUnit, pluralUnit){
				if(count > 1){
					return pluralUnit;
				}
				return singleUnit;
			},

		},
		computed: {
			activeOrders: function(){
				return this.bookingStore.activeOrders;
			},			
			selectedRoom: function(){
				return this.bookingStore.roomData[this.bookingStore.selectedRoomID];
			},
			selectedSchedule: function(){
				return this.selectedRoom.scheduleData[this.bookingStore.dictFormatedSelectedDate];
			},
			selectedOccupancyData: function(){
				return this.selectedSchedule.occupancyData;
			},
			roomPrice: function(){
				let startIndex = this.bookingStore.selectedRange.startIndex;
				let endIndex = this.bookingStore.selectedRange.endIndex;
				let price = 0;
				for (var i = startIndex; i <= endIndex; i++) {
					price += this.selectedOccupancyData[i].cost * this.bookingStore.selectedPeopleCount;
				}
				return price;
			}
		}
	}

</script>

<style lang="scss" scoped>
@import 'styles/utils/vars.scss';
.price-underline{
	text-decoration: underline;
	text-underline-offset: 2px;
}
.cart-bottom{
	margin-top: auto;
}
.cart {
	display: flex;
	flex-direction: column;
	min-height: 500px;
	// min-width: 350px;
	background: #3A3838;
	box-shadow: 10px 10px 6px #000000;
	padding: 20px;
	@media screen and (max-width: $phoneWidth) {
		padding: 10px;
	}
	&__title {
		font-family: 'Chivo';
		font-style: normal;
		font-weight: 900;
		font-size: 20px;
		margin-bottom: 20px;
	}
	&__section-title {
		font-family: 'Chivo';
		font-style: italic;
		font-weight: 400;
		font-size: 14px;
		margin-bottom: 12px;
		margin-top: 15px;
	}
	&__room {
		display: flex;
	}
	&__room-preview {
		flex: 0 0 30%;
		&>img{
			height: 100%;
			width: 100%;
			object-fit:cover;
		}	
	}
	&__room-details {
		margin-left: 15px;
		flex-grow: 1;
	}
	&__room-title-wrapper {
		display: flex;
		justify-content: space-between;
	}
	&__room-title {
		font-family: 'Chivo';
		font-style: normal;
		font-weight: 900;
		font-size: 16px;
	}
	&__room-price {
		font-family: 'Chivo';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
	}
	&__room-row {
		font-family: 'Chivo';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
	}
	&__orders {
		margin-bottom: 15px;
	}
	&__order {
		padding: 5px 0;
		&:not(:last-child){
			@media screen and (max-width: $phoneWidth) {
				border-bottom: 1px solid #555;
			}	
		}
		
	}
	&__order-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media screen and (max-width: $phoneWidth) {
			flex-wrap: wrap;
		}
	}
	&__order-title {
		font-family: 'Chivo';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		flex: 0 0 25%;
		@media screen and (max-width: $phoneWidth) {
			flex: 0 0 50%;
			display: flex;
			justify-content: center;
			padding: 5px;
			order: 0;
		}
	}
	&__order-units{
		text-align: center;
		flex: 1 0 25%;
		display: flex;
		align-items: center;
		-webkit-user-select: none; /* Safari */        
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
		@media screen and (max-width: $phoneWidth) {
			flex: 0 0 50%;
			display: flex;
			justify-content: center;
			padding: 5px;
			order: 2;
		}
	}
	&__order-units-change-button{
		margin: 0 5px;
		border: 2px solid #fff;
		width: 20px;
		height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 15px;
		background: #232020;
		cursor: pointer;
		@media screen and (max-width: $phoneWidth) {
			margin: 0 3px;
		}
	}
	&__order-remove{
		flex: 0 0 25%;
		display: flex;
		align-items: center;
		cursor: pointer;
		@media screen and (max-width: $phoneWidth) {
			flex: 0 0 50%;
			display: flex;
			justify-content: center;
			padding: 5px;
			order: 3;
		}
	}
	&__order-cross{
		margin-left: 5px;
		width: 10px;
		height: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		&:before, &:after{
			content: '';
			right: 0;
			height: 1px;
			width: 100%;
			background: #aaa;
		}
		&:before{
			transform: translateY(0.5px) rotate(45deg) ;
			transform-origin: center center;
		}
		&:after{
			transform: translateY(-0.5px) rotate(-45deg) ;
			transform-origin: center center;
		}
	}
	&__order-price {
		min-width: 60px;
		font-family: 'Chivo';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		flex: 0 0 auto;
		@media screen and (max-width: $phoneWidth) {
			flex: 0 0 50%;
			display: flex;
			justify-content: center;
			padding: 5px;
			order: 1;
		}
	}
	&__order-details {
		margin-left: 25px;
		font-family: 'Chivo';
		font-style: italic;
		font-weight: 400;
		font-size: 14px;
		margin-bottom: 5px;
		@media screen and (max-width: $phoneWidth) {
			margin: 0;
			text-align: center;
		}
		textarea{
			margin-top: 15px;
			background: #5B5959;
			box-shadow: 2px 3px 4px #232020;
			border-radius: 10px;
			border: none;
			width: 80%;
			resize: none;
			color: #fff;
			padding: 10px;
		}
	}
	&__description {
		textarea{
			background: #5B5959;
			box-shadow: 2px 3px 4px #232020;
			border-radius: 10px;
			border: none;
			width: 100%;
			resize: none;
			color: #fff;
			padding: 10px;
		}
		margin-bottom: 15px;
	}
	&__price {
		font-family: 'Chivo';
		font-style: normal;
		font-weight: 900;
		font-size: 20px;
		text-align: right;
		margin-bottom: 10px;
	}
	&__price-title {
		margin-right: 30px;
	}
	&__price-total {
	}
	&__buttons {
		margin-top: 25px;
		display: flex;
		justify-content: space-between;
		@media screen and (max-width: $phoneWidth) {
			flex-wrap: wrap;
		}
		
	}
	&__button{
		cursor: pointer;
		text-align: center;
		padding: 15px;
		flex: 1 1 50%;
		margin: 0 10px;
		margin-bottom: 15px;
		
		border-radius: 8px;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 32px;
		line-height: 38px;
		transition: all 0.3s ease-in-out;
		&--prev{
			border: 1px solid #FFFFFF;
			background: #232020;
			display: flex;
			align-items: center;
			justify-content: center;
			&:before{
				content: '';
				font-size: 0;
				box-sizing: border-box;
				width: 15px;
				height: 15px;
				margin-left: 4px;
				border-left: none;
				border-bottom: none;
				border-right: 4px solid #fff;
				border-top: 4px solid #fff;
				background-color: transparent;
				border-radius: 8%;
				transform: rotate(-135deg);
				margin-right: 15px;
			}
			&.active{
				&:hover{
					background: #333;
					box-shadow: inset 0 0 10px 5px #111;
				}
			}
		}
		&--next{
			background: #FFFFFF;
			color: #232020;
			&.active{
				&:hover{
					box-shadow: 0 0 20px 1px rgba(255,255,255,0.5);
				}	
			}
			
		}
		&:not(.active){
			cursor: default;
			opacity: 0.6;
		}
	}
}

</style>
