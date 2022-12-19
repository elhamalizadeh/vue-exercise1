<template>
<div class="container">
    <div class="row">
      <div class="col-md-3">
        <sideBar />
      </div>
      <div class="col-md-9">
    <h2>Composable Function :</h2>
    <p>
        I have defined "useCounter.js" file and have added codes that are repetetive in that js file. <br/>
        then i used the data and ref and finally showed the results in Html
    </p>
    <h1>{{ count }}</h1>
    <button @click="increment">increment</button>
      </div>
    </div>
  </div>
</template>

<script>
import {useCounter} from "./composable/useCounter.js";
import {ref} from "vue";
import sideBar from "./sidebar.vue";

export default {
  name: "composableFunction",
   components: {
    sideBar,
  },
  setup() {
    const counter = ref(2);
    const {count,increment} = useCounter(counter);
    return {count,increment} ;
  },
};
</script>

<style>
</style>