<template>
  <div>
    <p><b>Composable Function :</b><br/>
        I have defined "useCounter.js" file and have added codes that are repetetive in that js file. <br/>
        then i used the data and ref and finally showed the results in Html
    </p>
    <h1>{{ count }}</h1>
    <button @click="increment">increment</button>
  </div>
</template>

<script>
import {useCounter} from "./composable/useCounter.js";
import {ref} from "vue";

export default {
  name: "composableFunction",

  setup() {
    const counter = ref(2);
    const {count,increment} = useCounter(counter);
    return {count,increment} ;
  },
};
</script>

<style>
</style>