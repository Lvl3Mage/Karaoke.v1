<template>
	<div class="field-wrapper" :class="{'invalid': invalid}">
		<input type="text" v-model="value" :placeholder="placeholder" @click="fieldClick()">
		<div class="invalid-message">
			{{invalidMessage}}
		</div>
	</div>
		
</template>

<script>
	export default{
		props: ['modelValue', 'placeholder', 'invalid', 'invalidMessage'],
		data() {
			return {
				value: this.modelValue,
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
			fieldClick: function(){
				this.$emit('fieldClick');
			}
		},
		computed: {
		}
	}

</script>

<style lang="scss" scoped>
input{
	// caret-color: #fff;
	width: 100%;
	border: none;
	cursor: text;
	background: linear-gradient(180deg, #7b7979 0.55%, #232020 100%);
	border-radius: 8px;
	border: 2px solid transparent;
	width: 100%;
	padding: 10px;
	color: #fff;
	margin-bottom: 20px;

}
.field-wrapper {
	&.invalid{
		input{
			margin-bottom: 0;
			border: 2px solid tomato;
			&::placeholder{
				color: tomato;
			}
		}
		.invalid-message {
			display: block;
		}
	}
}
.invalid-message {
	color: tomato;
	font-size: 10px;
	display: none;
	height: 15px;
	margin-top: 5px;
}

</style>
