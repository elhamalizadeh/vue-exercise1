<template>
  <div class="" id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">{{ userInfo.description }}</div>
        <div class="col-md-4">
          <h4>Our Services</h4>
          <ul>
            <li>SEO Services</li>
            <li>Web Design</li>
            <li>Google ads</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Contact Us</h4>
          <p>
            Name is : {{ userInfo.name }} | Last name is : {{ lastName }} | age
            is :
            {{ age }}
          </p>
        </div>
      </div>
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
    age: Number,
    description: String,
    userInfo: Object,
  },
};
</script>
<style scoped>
#footer {
  background-color: blue;
  height: 270px;
  color: white;
  margin-top: 50px;
  padding-top: 50px;
}
</style>
