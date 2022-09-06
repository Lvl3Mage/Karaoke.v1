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
		scheduleData: {},
		selectedRange: null,
		selectedPeopleCount:0,
	}),
	getters: {
		formatedSelectedDate: function(){
			return this.selectedDate.toLocaleDateString('en-GB');
		},
		stepCompletion: function(){
			if(this.selectedRange != null){
				if(false){
					if(false){
						return 3;
					}
					return 2;
				}
				return 1;
			}
			return 0;
		}
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