<template>
		<input type="text" v-model="value" :placeholder="placeholder">
</template>

<script>
	export default{
		props: ['modelValue', 'regex', 'placeholder'],
		data() {
			return {
				value: this.modelValue,
				submitAttempt: false,
			}
		},
		created(){
		},
		mounted(){
		},
		watch:{
			modelValue:function(val){
				this.value = val;
			},
			value: function(val){
				this.$emit("update:modelValue", this.value);
			}
		},
		emits: ['update:modelValue'],
		methods: {
			submitAttempt: function(){

			},
		},
		computed: {
		}
	}

</script>

<style lang="scss" scoped>
input{
	caret-color: #fff;
	width: 100%;
	border: none;
	cursor: text;
	background: linear-gradient(180deg, #7b7979 0.55%, #232020 100%);
	border-radius: 8px;
	width: 100%;
	padding: 10px;

}
</style>
