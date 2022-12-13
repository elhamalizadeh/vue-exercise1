<template>
  <div>
    <h1>Transition </h1>
    <button @click="show=!show">Toggle</button>
    <transition name="fade">
    <p v-if="show">Hello world</p>
    </transition>
    </div>
</template>

<script>
export default {
    name: 'tranSition',
    data() {
      return {
      show : true
      }
    }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade.leave-to{
  opacity: 0;
}
</style>