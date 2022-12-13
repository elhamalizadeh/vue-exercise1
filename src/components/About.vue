<template>
  <div class="container" :class="{ pink: pinkcolor }" @click="changecolor">
    <div class="row">
    <h1>About Us Page</h1>
    <div class="col-md-3 bg-primary">
    <h2>Sidebar</h2>
    </div>
    <div class="col-md-9" id="content">
      <span>Click to change background color</span>
      </div>
      </div>
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
  color: blue;
}
#content{
height: 400px;
}
</style>
