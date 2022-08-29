<template>
	<div class="people-selector" :style="'--roomColor:' + highlightColor">
		<div v-for="index in maxCount" :key="index" class="people-selector__icon">
			<ph-user :size="24" color="#ffffff" :weight="index <= count ? 'fill' : 'regular' "/>
		</div>
	</div>
</template>
<script setup>
</script>
<script>
	export default {
		props: ['highlightColor', 'minCount', 'maxCount'],
		data() {
			return {
				count: this.minCount,
			}
		},
		watch: {
		},
		created(){
		},
		mounted(){
			
		},
		methods: {
			changeCount(newCount){

			}
		},
		computed: {
		}
	};

</script>
<style lang="scss" scoped>
@import 'styles/utils/vars.scss'; // for width vars
.people-selector {
	display: flex;
	flex-wrap: wrap;
	&__icon {
	}
}

</style>
