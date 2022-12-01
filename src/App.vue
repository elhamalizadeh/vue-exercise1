<template>
   <!--<img alt="Vue logo" src="./assets/logo.png">
 <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <header-section/>
  <router-view></router-view>

</template>

<script>
import HeaderSection from './components/Header.vue'

export default {
  name: 'App',
  components: {
   HeaderSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
