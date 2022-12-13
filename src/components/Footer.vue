<template>
  <div class="" id="footer">
    <div class="container">
    <h1>Footer Part</h1>
    <p>Name is : {{ userName }}</p>
    <p>Last name is : {{ lastName }}</p>
    <p></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterSection",
      props: ['userName','lastName','age'],
};
</script>
<style scoped>
#footer {
  background-color: blue;
  height: 200px;
  color: white;
  margin-top:50px
}
</style>
