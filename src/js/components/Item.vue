<template>
	<div class="item" :style="'--highlightColor:'+ highlightColor" @click="toggleActive()" :class="{'active':orderRef.active}">
		<div class="item__image">
			<img :src="imageLink" alt="">
		</div>
		<div class="item__content">
			<div class="item__title">
				<slot name="title">title</slot>
			</div>
			<div class="item__price">
				<slot name="price">price/unit</slot>
			</div>
			<div class="item__count-order-wrapper" v-if="!description">
				<div class="item__count-selector" @click.stop>
					<select v-model="orderRef.count">
						<option :value="i" v-for="i in maxCount" :key="i">{{i}}</option>
					</select>
					<div class="item__count-selector-arrow">
						<img src="/assets/images/svg/arrow-gray.svg" alt="">
					</div>
					
				</div>
				<!-- <div class="item__order-button" @click="sendOrder()">
					<ph-shopping-cart-simple :size="18" :color="highlightColor" />
					<div class="item__popup-wrapper" :class="{'open': popup, 'error': popupError}">
						<div class="item__popup">{{popupText}}</div>
					</div>
					
				</div> -->
			</div>
			<div class="item__description" v-if="description" :class="{'invalid': descriptionInvalid}">
				<input class="" type="text" :placeholder="placeholder" v-model="orderRef.description" @click.stop="descriptionInvalid = false">
			</div>
		</div>
	</div>
</template>

<script setup>
	import { PhShoppingCartSimple} from "phosphor-vue";
</script>
<script>
	export default{
		props: ['maxCount', 'description', 'placeholder', 'imageLink', 'innerID', 'highlightColor', 'orderRef'],
		data() {
			return {
				selectedCount: 1,
				descriptionInvalid: false,

				// popup: false,
				// popupText: '',
				// popupError: false,
			}
		},
		created(){
		},
		mounted(){
		},
		watch:{
			OrderDescription: function(val){
				this.orderRef.count = val.length;
			},
			// OrderCount: function(val){
			// 	if(this.description){
			// 		this.orderRef.count = this.
			// 	}
			// }
			// modelValue:function(val){
			// 	this.selectedDate = val;
			// },
		},
		// emits: ['update:modelValue'],
		methods: {
			toggleActive: function(){
				if(!this.orderRef.active){
					if(this.description){
						if(this.orderRef.description.length > 0 ){
							this.orderRef.active = true
						}
						else{
							this.descriptionInvalid = true
						}
					}
					else{
						this.orderRef.active = true;
					}
					
				}
				else{
					this.orderRef.active = false;
				}
			},
			// sendOrder: function(){
			// 	// let order = {
			// 	// 	count: this.selectedCount,
			// 	// };
			// 	// if(this.description){
			// 	// 	if(this.descriptionText.length == 0){
			// 	// 		this.descriptionInvalid = true;

			// 	// 		this.popupError = true;
			// 	// 		this.popupText = "Description is empty";
			// 	// 		this.popup = true;
			// 	// 		this.removePopupAsync();
			// 	// 		return;
			// 	// 	}
			// 	// 	order.description = this.descriptionText;
			// 	// 	this.descriptionText = '';
			// 	// }
			// 	// // this.$emit('order', order);
			// 	// this.selectedCount = 1;
			// 	// this.popupError = false;
			// 	// this.popupText = "Order added to cart";
			// 	// this.popup = true;
			// 	// this.removePopupAsync();
			// },
			// removePopupAsync: function(){
			// 	setTimeout(function(){
			// 		this.popup = false;
			// 	}.bind(this), 1500);
			// },
		},
		computed: {
			OrderDescription: function(){
				return this.orderRef.description;
			},
			OrderCount: function(){
				return this.orderRef.count;
			}
		}
	}
</script>

<style lang="scss" scoped>
.item {
	cursor: pointer;
	width: 180px;
	margin: 10px;
	display: flex;
	flex-direction: column;
	transition: all 0.4s;
	&.active{
		transform: scale(1.05);
		.item__content{
			background: var(--highlightColor);

		}
		.item__title{
			color: var(--textColorBG);
		}
		.item__price{
			color: var(--textColorBG);
		}
	}
	&__image {
		height: 180px;
		img{
			height: 100%;
			width: 100%;
			object-fit:cover;
		}
	}
	&__content {
		transition: all 0.5s;
		flex-grow: 1;
		background: #3A3838;
		border-radius: 0px 0px 6px 6px;
		padding: 10px;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;

	}
	&__title {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 20px;
		margin-bottom: 10px;
	}
	&__price {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 12px;
		line-height: 20px;
		margin-bottom: 10px;
	}
	&__count-selector {
		position: relative;
		select{
			background: #FFFFFF;
			border-radius: 10px;		
			-webkit-appearance: none;
			-moz-appearance: none;
			border: none;
			color: #232020;
			padding: 7px 15px;
			padding-right: 25px;
			// margin-right: 15px;
		}
	}
	&__count-order-wrapper{
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-bottom: 10px;

	}
	&__count-selector-arrow {
		position: absolute;
		top: 7px;
		bottom: 7px;
		right: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		pointer-events: none;
		img{

			width: 12px;
		}
	}
	&__description {
		width: 100%;
		input{
			
			border-radius: 10px;
			text-align: center;
			width: 100%;
			padding: 6px 0;
			border: 2px solid transparent;
			
			// border: none;
			background: #fff;
			&::placeholder{
				opacity: 0.6;
			}
		}
		&.invalid{
			input{
				border: 2px solid tomato;
				&::placeholder{
					color: tomato;
				}
			}
		}
		margin-bottom: 10px;

	}
	&__order-button{
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff;
		border-radius: 10px;
		padding: 6px 15px;
		// overflow: hidden;
		position: relative;
		z-index: 0;
		cursor: pointer;
		// &:before{
		// 	z-index: -1;
		// 	content: '';
		// 	position: absolute;
		// 	width: 10px;
		// 	height: 10px;
		// 	top: 0;
		// 	bottom: 0;
		// 	right: 0;
		// 	left: 0;
		// 	margin: auto;
		// 	background: var(--highlightColor);
		// 	opacity: 0.4;
		// 	transform: scale(0);
		// 	transition: all 0.8s;
		// 	border-radius: 10px;
		// }
		transition: all 0.2s;
		&:hover{
				background: #aaa;
		}
	}
	&__popup-wrapper{
		position: absolute;
		bottom: 65%;
		left: -50px;
		right: -50px;
		display: flex;
		justify-content: center;
		transition: all 0.3s;
		opacity: 0;
		transform: scale(0);
		&.open{
			transform: scale(1);
			opacity: 1;
		}
		&.error{
			.item__popup{
				background: #ed503e;
				&:before{
					background: #ed503e;
				}
			}
		}
	}
	&__popup{
		padding: 5px;
		font-size: 14px;
		background: #3eed4f;
		border-radius: 5px;
		position: relative;

		&:before{
			z-index: -1;
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			margin-left: auto;
			margin-right: auto;
			bottom: -4px;
			width: 10px;
			height: 10px;
			background: #3eed4f;
			transform: rotate(45deg);
		}

	}
}

</style>
