<script>
export default {
  data: () => ({
    modalOpen: true  
  }),
  methods: {
    toggleModalState() {
      this.modalOpen = !this.modalOpen;
    }
  }
};
</script>
<script setup>
	import ExampleComponent from './components/Example.vue'
</script>
<template>
	<div class="a"></div>
	<ExampleComponent></ExampleComponent>
</template>