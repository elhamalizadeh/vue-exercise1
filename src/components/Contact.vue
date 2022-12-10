<template>
  <div class="container">
    <div class="row">
    <h1>Contact Us</h1>
    <div class="col-3 bg-primary">
    <span>{{message}}</span>
    <button v-on:click="reverse">Reverse</button>
    <button @click="normal">normal</button>
    </div>
    <div class="col-9">
      <input type="text" v-model="name" ><!--- dont work -->
      <p>{{ name }}</p>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contactUs",
  data() {
    return {
      message: "hello",
      result: ' ',
      name:''
    };
  },
  methods: {
    reverse() {
      this.message = this.message.split('').reverse().join('');
    },
    normal(){
       this.message = this.message.split('').reverse().join('');
    }
  },
};
</script>
