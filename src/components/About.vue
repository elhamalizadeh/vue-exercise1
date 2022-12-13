<template>
  <div class="div" :class="{ pink: pinkcolor }" @click="changecolor">
    <h1>About Us Page</h1>
    <span>Click to change background color</span>
  </div>
</template>
<script>
export default {
  name: "aboutUs",
  data() {
    return {
      pinkcolor: "true",
    };
  },
  methods:{
    changecolor(){
        this.pinkcolor = !this.pinkcolor
    }
  }
};
</script>
<style scoped>
.div {
  color: purple;
  padding: 20px;
}
.pink {
  background-color: rgb(209, 105, 209);
  color: white;
}
</style>
