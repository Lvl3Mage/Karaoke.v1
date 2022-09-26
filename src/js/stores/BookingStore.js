import { defineStore } from 'pinia'
import {useErrorModalStore} from '../stores/ErrorModalStore.js'

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
			// {
			// 	preview: '/assets/images/package-preview.jpg',
			// 	title: 'Birthday Package',
			// 	list: ['Dessert / Cake','Letter balloons (5 total)','Lei Flowers'],
			// 	price: 20
			// },
			// {
			// 	preview: '/assets/images/package-preview.jpg',
			// 	title: 'Birthday Package',
			// 	list: ['Dessert / Cake','Letter balloons (5 total)','Lei Flowers'],
			// 	price: 20
			// },
			// {
			// 	preview: '/assets/images/package-preview.jpg',
			// 	title: 'Birthday Package',
			// 	list: ['Dessert / Cake','Letter balloons (5 total)','Lei Flowers'],
			// 	price: 20
			// },
		],
		paymentMethods: [
			{
				preview: require('assetDir/images/knet.png'),
				shadowColor: '#AAA'
			},
			{
				preview: require('assetDir/images/mastercard.png'),
				shadowColor: '#AAA'
			},
		],
		selectedPaymentMethod: 0,
		packOrders: [],
		halfPayment: false,

		reservationToken: null,
		reservationTTL: null,
	}),
	getters: {
		roomPrice: function(){
			if(this.selectedRange == null){
				return 0;
			}
			if(!this.roomData[this.selectedRoomID].scheduleData[this.dictFormatedSelectedDate]){
				return 0;
			}
			let startIndex = this.selectedRange.startIndex;
			let endIndex = this.selectedRange.endIndex;
			let price = 0;
			for (var i = startIndex; i <= endIndex; i++) {
				price += this.roomData[this.selectedRoomID].scheduleData[this.dictFormatedSelectedDate].occupancyData[i].cost * this.selectedPeopleCount;
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
			
			return price;
		},
		dictFormatedSelectedDate: function(){
			return this.formatDictDate(this.selectedDate);
		},
		stepCompletion: function(){
			if(this.selectedRange != null){
				if(this.reservationToken){
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
		formatDictDate: function(date){
			return date.toLocaleDateString('fr-CA')
		},
		formatDisplayDate: function(date){
			return date.toLocaleDateString('en-GB');
		},
		startTimerCycle: async function(){
			while(true){
				await delay(1000);
				if(this.reservationTTL != null){
					this.reservationTTL -= 1;
					if(this.reservationTTL <= 0){
						this.reservationTTL = null;
						this.endReservation();
					}
				}
			}
		},
		endReservation: function(){
			this.reservationToken = null;
			this.reservationTTL = null;
		},
	}
});
const delay = ms => new Promise(res => setTimeout(res, ms));
export {useBookingStore};

//https://jsben.ch/AhMN6
function GetCookieValueByRegEx(a, b) {
	b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : '';
}