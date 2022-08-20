import { defineStore } from 'pinia'
import {axios} from '../App.vue';

const useBookingStore = defineStore({
	id: 'BookingStore',
	state: () => ({
		//client side data
		bookingStep: 0,
		selectedDate: new Date(),

		//loaded data
		selectedRoomID: '',
		roomData: {},
		scheduleData: {},


	}),
	getters: {
		formatedSelectedDate: function(){
			return this.selectedDate.toLocaleDateString('en-GB');
		}
	},
	actions: {
	}
});
export {useBookingStore};

//https://jsben.ch/AhMN6
function GetCookieValueByRegEx(a, b) {
	b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : '';
}