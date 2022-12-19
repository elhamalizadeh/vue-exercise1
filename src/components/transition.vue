<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <sideBar />
      </div>
      <div class="col-md-9">
        <h1>Transition</h1>
        <button @click="show = !show">Toggle</button>
        <transition name="fade">
          <p v-if="show">Hello world</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from "./sidebar.vue";
export default {
  name: "tranSition",
   components: {
    sideBar,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade.leave-to {
  opacity: 0;
}
</style>