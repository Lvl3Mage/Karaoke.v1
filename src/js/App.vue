
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
  <RouterLink class="" to="/booking">booking</RouterLink>
	<router-view></router-view>
</template>