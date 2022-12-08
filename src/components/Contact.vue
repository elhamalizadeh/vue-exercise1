<template>
  <div class="container">
    <div class="row">
    <h1>Contact Us</h1>
    <div class="col-3 bg-primary">
    {{ message }}
    <button v-on:click="reverse">Reverse</button>
    <button @click="normal">normal</button>
    </div>
    <div class="col-9"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contactUs",
  data() {
    return {
      message: "hello",
    };
  },
  methods: {
    reverse() {
      let message = this.message.split('').reverse().join('');
      console.log("reverse is here");
      console.log(message)
      return message;
    },
    normal(){
        console.log("normal is here");
    }
  },
};
</script>
