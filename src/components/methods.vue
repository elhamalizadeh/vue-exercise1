<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <sideBar />
      </div>
      <div class="col-md-9"><h1>List Of Methods</h1>
      
      
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from "./sidebar.vue";
export default {
  name: "methodsList",
  components: {
    sideBar,
  },
};
</script>

<style>

</style>