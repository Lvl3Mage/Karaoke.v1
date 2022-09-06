<template>
	
	<div class="people-selector">
		<div class="people-selector__text">
			<div class="people-selector__title">
				People
			</div>
			<div class="people-selector__description">
				Min {{minCount}} - Max {{maxCount}} people
			</div>	
		</div>
		<div class="people-selector__selector">
			<div v-for="index in maxCount" :key="index" class="people-selector__icon" @click="changeCount(index)">
				<ph-user :size="28" :color="index <= count ? highlightColor : '#fff' " :weight="index <= count ? 'fill' : 'regular' "/>
			</div>
		</div>	
	</div>
</template>
<script setup>
</script>
<script>
	export default {
		props: ['highlightColor', 'minCount', 'maxCount', 'modelValue'],
		data() {
			return {
				count: this.modelValue,
			}
		},
		emits: ['update:modelValue'],
		watch: {
			modelValue:function(val){
				this.count = val;
			},
			minCount: function(val){
				this.changeCount(this.count); // min-max check
			},
			maxCount: function(val){
				this.changeCount(this.count); // min-max check
			},
		},
		created(){
			this.changeCount(this.count);
		},
		mounted(){
			
		},
		methods: {
			changeCount(newCount){
				this.count = Math.min(Math.max(newCount, this.minCount), this.maxCount);
				this.$emit("update:modelValue", this.count);
			},
		},
		computed: {
		}
	};

</script>
<style lang="scss" scoped>
@import 'styles/utils/vars.scss'; // for width vars

.people-selector {
	width: 160px;
	@media screen and (max-width: $phoneWidth) {
		width: 200px;
	}
	&__text{
		display: flex;
		flex-direction: column;
		@media screen and (max-width: $phoneWidth) {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
		}
	}
	&__title {
		margin-bottom: 15px;
		font-family: 'Chivo';
		font-style: normal;
		font-weight: 700;
		font-size: 14px;
		line-height: 17px;
	}
	&__description {
		font-family: 'Chivo';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 20px;
		margin-bottom: 15px;
	}
	&__selector {
		display: flex;
		flex-wrap: wrap;
	}
	&__icon {
		cursor: pointer;
		width: 20%;
		svg{
			width: 100%;
		}
	}
}

</style>
