<template>
  <div class="container" :class="{ pink: pinkcolor }" @click="changecolor">
    <div class="row">
    <div class="col-md-3">
    <sideBar />
    </div>
    <div class="col-md-9" id="content">
          <h1>About Us Page</h1>
      <span>Click to change background color</span>
      </div>
      </div>
  </div>
</template>
<script>
import sideBar from "./sidebar.vue";
export default {
  name: "aboutUs",
  data() {
    return {
      pinkcolor: "true",
    };
  },
     components: {
    sideBar,
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
