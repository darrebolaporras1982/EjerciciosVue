<script>
import {RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import axios from 'axios';

export default{
  components:{
    NavBar
  }
}
</script>

<template>
  
  <NavBar></NavBar>

  <router-view></router-view>
</template>
