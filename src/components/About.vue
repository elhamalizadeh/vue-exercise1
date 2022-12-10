<template>
  <div class="div" :class="{ pink: pinkcolor }" @click="changecolor">
    <h1>About Us Page hooora</h1>
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
  background-color: pink;
  color: purple;
}
</style>
