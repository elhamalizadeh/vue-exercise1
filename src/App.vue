<template>
   <!--<img alt="Vue logo" src="./assets/logo.png">
 <HelloWorld msg="Welcome to Your Vue.js App"/>-->
   <header-section :site-title="title"/>
 <div class="container" id="content">

  <router-view></router-view>
 
  </div>
  <FooterSection  :user-name="name" :last-name="family" :age="age" :user-info="userInfo"/>
   

</template>

<script>
import FooterSection from './components/Footer.vue'
import HeaderSection from './components/Header.vue'
//import Home from './components/Home.vue'

export default {
  name: 'App',
  data(){
    return {
         name: "elham",
         family: "alizadeh",
         age: 35,
         title : "bonitadm.com",

        userInfo:{
           name: "elham",
           family: "alizadeh",
           age: 35,
           title : "bonitadm.com",
           description : "BonitaDm is a digital marketing advertising agency that deliver SEO services, web designing, content creation, Pay per click advertising and google ads"
        }
    }
  },
  components: {
   HeaderSection,
    FooterSection
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
#content{
  height: 1000px;
  background-color:linen;
}
</style>
