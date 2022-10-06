<template>

	<svg v-show="weight=='regular'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" :width="size" :height="size" :fill="color"><g><circle cx="128" cy="96" r="64" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="16"></circle><path d="M31,216a112,112,0,0,1,194,0" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></g></svg>
	<svg v-show="weight=='fill'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" :width="size" :height="size" :fill="color"><g><path d="M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"></path></g></svg>


</template>
<script>
	export default {
		props: ['size', 'color', 'weight'],
		data() {
			return {
			}
		},
		created(){
		},
		mounted(){
			
		},
		methods: {
		},
		computed: {

		}
	};

</script>
<style lang="scss" scoped>
</style>
