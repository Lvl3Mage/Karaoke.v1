
<script>
	import {useBookingStore} from './stores/BookingStore.js'
	import axios from 'axios';
	let api = {};
	// api.baseURL = "https://karaoke.marmadot.com/wp-admin/admin-ajax.php";
	
	api.baseURL = "/wp-admin/admin-ajax.php";
	export {axios, api};
	export default {
		data: () => ({
		}),
		created(){
			this.bookingStore.startTimerCycle();
		},
		methods: {
			exampleMethod() {
			}
		}
	}; 
</script>
<script setup>
	import { RouterLink, RouterView } from 'vue-router'
	const bookingStore = useBookingStore();
</script>
<template>
	<div class="app-content">
		<router-view></router-view>  
	</div>
</template>
<style scoped>
	.app-content{
		width: 100%;
	}
</style>