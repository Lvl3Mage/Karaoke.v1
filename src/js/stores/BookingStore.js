import { defineStore } from 'pinia'
import {axios} from '../App.vue';

const useBookingStore = defineStore({
	id: 'BookingStore',
	state: () => ({
		openStep: 0,
		//client side data
		selectedDate: new Date(),

		//loaded data
		selectedRoomID: '',
		roomData: {},
		selectedRange: null,
		selectedPeopleCount:0,

		itemData: null,
		itemOrders: null,

		name: '',
		email: '',
		phone: '',

		contactFields: [
			{
				title: 'Name',
				obligatory: true,
				placeholder: 'David',
				regex: /(.|\s)*\S(.|\s)*/,
				value: '',
				invalid: false,
				invalidMessage: 'Enter a name',
			},
			{
				title: 'Email',
				obligatory: true,
				placeholder: 'example@example.com',
				regex: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
				value: '',
				invalid: false,
				invalidMessage: 'Enter a valid email',
			},
			{
				title: 'Phone',
				obligatory: true,
				placeholder: '+919367788755',
				regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
				value: '',
				invalid: false,
				invalidMessage: 'Enter a valid phone number',
			},

		],

		contactDetailsValid: false,

		orderDescription: '',

		packData: [
			{
				preview: '/assets/images/package-preview.jpg',
				title: 'Birthday Package',
				list: ['Dessert / Cake','Letter balloons (5 total)','Lei Flowers'],
				price: 20
			},
			{
				preview: '/assets/images/package-preview.jpg',
				title: 'Birthday Package',
				list: ['Dessert / Cake','Letter balloons (5 total)','Lei Flowers'],
				price: 20
			},
			{
				preview: '/assets/images/package-preview.jpg',
				title: 'Birthday Package',
				list: ['Dessert / Cake','Letter balloons (5 total)','Lei Flowers'],
				price: 20
			},
		],
		paymentMethods: [
			{
				preview: '/assets/images/knet.png',
				shadowColor: '#AAA'

			},
			{
				preview: '/assets/images/mastercard.png',
				shadowColor: '#AAA'

			},
		],
		selectedPaymentMethod: 0,
		packOrders: [],
		halfPayment: false,
	}),
	getters: {
		roomPrice: function(){
			if(this.selectedRange == null){
				return 0;
			}
			let startIndex = this.selectedRange.startIndex;
			let endIndex = this.selectedRange.endIndex;
			let price = 0;
			for (var i = startIndex; i <= endIndex ; i++) {
				price += this.roomData[this.selectedRoomID].scheduleData[this.formatedSelectedDate].occupancyData[i].cost * this.selectedPeopleCount;
			}
			return price;
		},
		totalPrice: function(){
			let price = this.roomPrice;
			for (var i = 0; i < this.activeOrders.length; i++) {
				price += this.activeOrders[i].count * this.activeOrders[i].price;
			}
			for (var i = 0; i < this.packOrders.length; i++) {
				price += this.packOrders[i].price;
			}
			if(this.halfPayment){
				price *= 0.5;
			}
			return price;
		},
		formatedSelectedDate: function(){
			return this.selectedDate.toLocaleDateString('en-GB');
		},
		stepCompletion: function(){
			if(this.selectedRange != null){
				if(true){
					if(this.contactDetailsValid){
						return 3;
					}
					return 2;
				}
				return 1;
			}
			return 0;
		},
		activeOrders: function(){
			let activeOrders = []
			if(this.itemOrders == null){
				return activeOrders;
			}
			for (var i = 0; i < this.itemOrders.length; i++) {
				if(this.itemOrders[i].active){
					activeOrders.push(this.itemOrders[i]);
				}
			}
			return activeOrders;
		},
	},
	actions: {
		formatDate: function(date){
			return date.toLocaleDateString('en-GB');
		},


	}
});
export {useBookingStore};

//https://jsben.ch/AhMN6
function GetCookieValueByRegEx(a, b) {
	b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : '';
}