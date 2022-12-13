<template>
  <div class="fixed-bottom" id="footer">
    <div class="container">
    <h1>Footer Part</h1>
    <p>Name is : {{ userInfo.name }}</p>
    <p>Last name is : {{ lastName }}</p>
    <p>age is : {{ age }}</p> 
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterSection",
      //props: ['userName','lastName','age'],  // ---------- method 1: here we recieve data with array

      // --------Method 2: we can also use onject for props
      props: {
         userName: String,
        lastName: String,
         age : Number,
        userInfo : Object
      }
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
