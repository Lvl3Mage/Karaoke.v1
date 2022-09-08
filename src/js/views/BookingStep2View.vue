<script setup>
	const bookingStore = useBookingStore()
	import Item from '../components/Item.vue'
</script>
<script>
	let APIItemData = 
	[
		{
			title: 'Desert',
			items: [
				{
					innerID: "123231",
					title: 'Good cake',
					image: '/assets/images/main.jpg',
					price: 2,
					maxCount: 15,
					unit: 'unit',
					description: true,
					placeholder: 'write text here',
				},
				{
					innerID: "232321",
					title: 'Good cake 2',
					image: '/assets/images/main.jpg',
					price: 2,
					maxCount: 15,
					unit: 'unit',
					description: true,
					placeholder: 'write text here',
				},
				{
					innerID: "34534",
					title: 'Good cake 3',
					image: '/assets/images/main.jpg',
					price: 2,
					unit: 'unit',
					description: false,
				},
			],
		}	
	];
	import {axios, api} from '../App.vue';
	import {useBookingStore} from '../stores/BookingStore.js'

	export default{
		data() {
			return {
			}
		},
		watch: {

		},
		created(){
			this.bookingStore.openStep = 2;

			//ajax request for data
				this.bookingStore.itemData = APIItemData;

		},
		mounted(){

		},
		methods: {
			addOrder: function(categoryID, itemID ,itemOrder){
				console.log(itemOrder);
				let item = this.bookingStore.itemData[categoryID].items[itemID];
				let order = {
					title: item.title,
					innerID: item.innerID,
					price: item.price,
					unit: item.unit,
					count: itemOrder.count,
				};
				if(itemOrder.description){
					order.description = itemOrder.description;
				}
				if(!itemOrder.description){
					//find item with same innerID
					for (var i = 0; i < this.bookingStore.itemOrders.length; i++) {
						if(this.bookingStore.itemOrders[i].innerID == order.innerID){
							this.bookingStore.itemOrders[i].count += order.count;
							return;
						}
						
					}
				}
				this.bookingStore.itemOrders.push(order);
			}
		},

		computed: {
			itemsLoaded: function(){
				return this.bookingStore.itemData != null;
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
	<div class="item-select" v-if="itemsLoaded">
		<div class="item-select__item-window">
			<div class="item-select__item-list-wrapper" v-for="(category, i) in bookingStore.itemData" :key="i">
				<div class="item-select__item-list-category">
					<span>{{category.title}}</span>
				</div>
				<div class="item-select__item-list">
					<Item v-for="(item, j) in category.items" :key="j" 
						:maxCount="item.maxCount ? item.maxCount : 10"
						:description="item.description"
						:placeholder="item.placeholder"
						:imageLink="item.image"
						:innerID="item.innerID"
						:highlightColor="selectedRoomColor"
						@order="addOrder(i,j,$event)"
					>
						<template v-slot:title>
							{{item.title}}
						</template>
						<template v-slot:price>
							{{item.price}} KD / 1 unit
						</template>
					</Item>
				</div>
			</div>
			
		</div>
		<div class="item-select__order-list-window">
			<div class="" v-for="order in bookingStore.itemOrders" :key="order">
				{{order}}
			</div>
		</div>
	</div>
	<div class="loader" v-if="!itemsLoaded">
		<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
	</div>
</template>
<style scoped lang="scss">
	@import 'styles/utils/vars.scss';
	.item-select {
		&__item-window {}
		&__item-list-wrapper {}
		&__item-list-category {}
		&__item-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: stretch;
		}
		&__order-list-window {}
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
