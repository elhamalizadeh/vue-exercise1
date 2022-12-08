<template>
   <!--<img alt="Vue logo" src="./assets/logo.png">
 <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <header-section/>
  <router-view></router-view>
  <FooterSection/>

</template>

<script>
import FooterSection from './components/Footer.vue'
import HeaderSection from './components/Header.vue'

export default {
  name: 'App',
  components: {
   HeaderSection,
    FooterSection
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
