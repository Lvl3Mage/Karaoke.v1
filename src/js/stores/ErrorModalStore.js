import { defineStore } from 'pinia'
import {axios} from '../App.vue';

const useErrorModalStore = defineStore({
	id: 'ErrorModalStore',
	state: () => ({
		modalOpen: false,
		modalTitle: '',
		modalText: '',
	}),
	getters: {
	},
	actions: {
		OpenModal: function(title, text){
			this.modalOpen = true;
			this.modalTitle = title;
			this.modalText = text;
		}
	}
});
export {useErrorModalStore};