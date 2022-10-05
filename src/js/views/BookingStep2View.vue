<script setup>
	const bookingStore = useBookingStore();
	import Item from '../components/Item.vue'
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
				nextRoute: {name:"booking-step-3"},
				prevRoute: {name:'booking-step-1'},
				openPackID: -1,
			}
		},
		watch: {

		},
		created(){
			this.bookingStore.openStep = 2;

			//ajax request for data
			let reservationData = new FormData();
			reservationData.append('action', 'createTemporaryReserve');
			reservationData.append('roomID', this.bookingStore.selectedRoomID);
			reservationData.append('selectedDate', this.bookingStore.dictFormatedSelectedDate);
			reservationData.append('startTimeMin', this.bookingStore.selectedRange.startTimeMin);
			reservationData.append('endTimeMin', this.bookingStore.selectedRange.endTimeMin);
			reservationData.append('peopleCount', this.bookingStore.selectedPeopleCount);
			let token = ''
			if(this.bookingStore.reservationToken != null){
				token = this.bookingStore.reservationToken;
			}
			reservationData.append('token', token);
			axios
				.post(api.baseURL,reservationData)
				.then(response => {

					console.log(response.data);
					if(response.data.status == 200){
						this.bookingStore.reservationToken = response.data.token;
						this.bookingStore.reservationTTL = response.data.ttl;
					}
					else{
						this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
						this.$router.push(this.prevRoute);
						//display error that redirects to step 1
					}
					

			});
			
			if(this.bookingStore.itemData == null && this.bookingStore.itemOrders == null){
				let itemData = new FormData();
				itemData.append('action', 'getItemsList');
				axios
					.post(api.baseURL,itemData)
					.then(response => {

						console.log(response.data);
						this.bookingStore.itemData = response.data.itemData;
						this.bookingStore.itemOrders = [];
						for (var i = 0; i < this.bookingStore.itemData.length; i++) {
							for (var j = 0; j < this.bookingStore.itemData[i].items.length; j++) {
								let item = this.bookingStore.itemData[i].items[j];
								let itemObject = {
									title: item.title,
									innerID: item.innerID,
									price: item.price,
									maxCount: item.maxCount,
									count: 1,
									active: false,
								};
								if(item.description){
									itemObject.description = '';
								}
								this.bookingStore.itemOrders.push(itemObject);
							}
						}
						this.bookingStore.packData = response.data.packageData;
					})			
					.catch((err) => {
						this.errorModalStore.OpenModal("Something went wrong.", "Please try again.");
						this.$router.push(this.prevRoute);
					});
				
			}
				
		},
		mounted(){

		},
		methods: {
			togglePack: function(id){
				if(this.openPackID == id){
					this.openPackID = -1;
				}
				else{
					this.openPackID = id;
				}
			},
			addPack: function(pack){
				this.bookingStore.packOrders.push({
					title: pack.title,
					list: pack.list,
					price: pack.price,
					description: '',
					innerID: pack.innerID,
				});
			},
			changeOrder: function(categoryID, itemID, itemOrder){
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
			},
			nextView: function(){
				if(this.isStepComplete){
					this.$router.push(this.nextRoute);	
				}
				
			},
			prevView: function(){
				this.$router.push(this.prevRoute);
			},
			itemOrderID: function(categoryID, itemID){
				let id = itemID;
				for (var i = 0; i < categoryID; i++) {
					id += this.bookingStore.itemData[i].items.length;
				}
				return id;
			},
		},
		computed: {
			isStepComplete: function(){
				return this.bookingStore.stepCompletion >= this.$router.resolve(this.nextRoute).meta.minCompletion;
			},
			stepLoaded: function(){
				return this.bookingStore.itemData != null && this.bookingStore.itemOrders != null  && this.bookingStore.reservationToken != null;
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
		<div class="section-description" v-if="stepLoaded">
			We have three Celebration Packs for you. You can choose any one you like.
		</div>
		<div class="packages" v-if="stepLoaded">
			<div class="package" v-for="(pack, i) in bookingStore.packData" :key="i" @click="togglePack(i)" :class="{'mobile-open': openPackID == i}">
				<div class="package__inner">
					<div class="package__front">
						<img :src="pack.image" alt="preview">
						<div class="package__touch-icon">
							<img :src="require('assetDir/images/svg/cursor-click.svg')" alt="">
						</div>
					</div>
					<div class="package__back">
						<div class="package__title">
							{{pack.title}}
						</div>
						<div class="package__text">
							<h3>This package includes:</h3>
							<ul>
								<li v-for="item in pack.list" :key="item">{{item.item}}</li>
							</ul>			
						</div>
						<div class="package__price">
							{{pack.price}} KD
						</div>
						<div class="package__button" @click="addPack(pack)">
							Add
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section-description" v-if="stepLoaded">
			Please select additional services if you need
		</div>
		<div class="item-select" v-if="stepLoaded">
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
							:orderRef="bookingStore.itemOrders[itemOrderID(i,j)]"
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
				<div class="shopping-cart-window-wrapper">
					<div class="shopping-cart-window">
						<ShoppingCart
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
						</ShoppingCart>	
					</div>	
				</div>
				

			</div>
		</div>	
	</div>
	
	<div class="loader" v-if="!stepLoaded">
		<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
	</div>
</template>
<style scoped lang="scss">
	@import 'styles/utils/vars.scss';
	.section-description{
		font-family: 'Chivo';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		margin-bottom: 25px;
	}
	.packages {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-bottom: 45px;
	}
	.package {
		margin: 15px;
		min-width: 350px;
		min-height: 350px;
		width: calc(100% * 1/3 - 30px);
		@media screen and (max-width: $phoneWidth) {
			width: 100%;
			min-width: 0;
		}
		&:hover{
			@media not all and (hover:none) {
				.package__inner{
					transform: rotateY(180deg);
				}
			}
		}
		&.mobile-open{
			@media (hover:none) {
				.package__inner{
					transform: rotateY(180deg);
				}
			}	
		}

		&__inner {
			
			width: 100%;
			height: 100%;
			position: relative;
			transform-style: preserve-3d;
			transition: all 0.6s;
		}
		&__front {
			box-shadow: 10px 10px 6px #000000;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			img{
				object-fit: cover;
				width: 100%;
				height: 100%;
				border-radius: 0 0 5px 5px;
			}
			-webkit-backface-visibility: hidden; /* Safari */
			backface-visibility: hidden;
		}
		&__touch-icon{
			position: absolute;
			width: 80px;
			height: 80px;
			right: 15px;
			bottom: 15px;
			background: rgba(255, 255, 255, 0.9);
			box-shadow: 4px 4px 10px #FE3F46;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 5%;
			border-radius: 50%;
			img{
				width: 100%;
				height: auto;
			}

			display: none;
			@media (hover:none) {
				display: block;	
			}
		}
		&__back {
			box-shadow: 10px 10px 6px #000000;
			padding: 30px;
			width: 100%;
			height: 100%;
			-webkit-backface-visibility: hidden; /* Safari */
			backface-visibility: hidden;
			transform: rotateY(180deg);
			background: #FE3F46;
			border-radius: 0 0 5px 5px;
			display: flex;
			flex-direction: column;
		}
		&__title {
			font-family: 'Playfair Display';
			font-style: normal;
			font-weight: 800;
			font-size: 24px;
			line-height: 40px;
			text-align: center;
		}
		&__text {
			font-family: 'Chivo';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			h1,h2,h3,h4,h5,h6{
				margin-bottom: 15px;
			}
			li{
				position: relative;
				padding-left: 20px;

				&:before{
					top: 0;
					left: 0;
					position: absolute;
					height: 7px;
					width: 7px;
					margin: 7px;
					content: '';
					margin-right: 10px;
					background: #fff;
					border-radius: 50%;
					display: inline-block;
				}
			}
			margin-bottom: 15px;
		}
		&__price {
			font-family: 'Playfair Display';
			font-style: normal;
			font-weight: 600;
			font-size: 32px;
			line-height: 40px;
			text-align: right;
			margin-right: 15px;
			margin-bottom: 15px;
		}
		&__button {
			background: #FFFFFF;
			border-radius: 8px;
			padding: 15px;
			width: 100%;
			color: #232020;
			margin-top: auto;
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-size: 32px;
			line-height: 38px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			transition: all 0.1s;
			&:active{
				background: #aaa;
			}
		}
	}

	.shopping-cart-window{
		&-wrapper{
			top: 25px;
			position: sticky;
			height: calc(100vh - 100px);
			@media screen and (max-width: 1200px) {
				height: auto;
			}
			&:before, &:after {
				position: absolute;
				content: '';
				height: 30px;
				width: 100%;
				@media screen and (max-width: 1200px){
					display: none;
				}
			}
			&:before{
				top: 0;
				background: linear-gradient(180deg, rgba(35,32,32,1) 0%, rgba(35,32,32,0) 100%);
			}
			&:after{
				bottom: 0;
				background: linear-gradient(0deg, rgba(35,32,32,1) 0%, rgba(35,32,32,0) 100%);
			}
		}
		
		height: 100%;
		overflow-y: auto;
		padding: 15px;
		padding-top: 45px;
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
	.item-select {
		display: flex;
		@media screen and (max-width: 1200px) {
			flex-direction: column;
		}
		&__item-window {
			width: 50%;
			@media screen and (max-width: 1200px) {
				width: 100%;
			}
			@media screen and (max-width: 1200px) {
				order: 1;	
			}
		}
		&__item-list-wrapper {}
		&__item-list-category {
			// margin-left: 15px;
			font-family: 'Playfair Display';
			font-style: normal;
			font-weight: 700;
			font-size: 20px;
			line-height: 40px;
			margin-bottom: 30px;
		}
		&__item-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: stretch;
			
		}
		&__order-list-window {
			width: 50%;
			margin-top: 35px;
			@media screen and (max-width: 1200px) {
				order: 0;
				width: 100%;
				margin-top: 0;		
			}
		}
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
