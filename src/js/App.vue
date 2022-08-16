
<script>
	import axios from 'axios';
	let api = {};
	api.baseURL = "http://192.168.1.214:8000";
	//const axios = require(["axios"]).default;
	export {axios, api};
	export default {
		data: () => ({
		}),
		methods: {
			exampleMethod() {
			}
		}
	}; 
</script>
<script setup>
	import { RouterLink, RouterView } from 'vue-router'
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