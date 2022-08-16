import { defineStore } from 'pinia'
import {axios} from '../App.vue';

const useBookingStore = defineStore({
	id: 'BookingStore',
	state: () => ({
		bookingStep: 0,
		selectedRoomID: '',
		roomData:
		{
			'room1': {
				primaryColor: '#FAA',
				name: 'Room 1',
				previewImage: '' // link
			},
			'room2': {
				primaryColor: '#FA0',
				name: 'Room 2',
				previewImage: ''
			},
			'room3': {
				primaryColor: '#AAF',
				name: 'Room 3',
				previewImage: ''
			},
			'room4': {
				primaryColor: '#AFA',
				name: 'Room 4',
				previewImage: ''
			}
		},
		scheduleData:{
			"date1": {
				"room1": {
					"occupancyData": [true,false,true,true,true,true,true,true,true,true]
				},
				"room2": {
					"occupancyData": [true,false,true,true,true,true,true,true,true,true]
				},
				"room3": {
					"occupancyData": [true,false,true,true,true,true,true,true,true,true]
				}
			},
			"date2": {
				"room1": {
					"occupancyData": [true,false,true,true,true,true,true,true,true,true]
				},
				"room2": {
					"occupancyData": [true,false,true,true,true,true,true,true,true,true]
				},
				"room3": {
					"occupancyData": [true,false,true,true,true,true,true,true,true,true]
				}
			}
		}


	}),
	getters: {
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