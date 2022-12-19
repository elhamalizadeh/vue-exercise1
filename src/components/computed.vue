<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <sideBar />
      </div>
      <div class="col-md-9">
        <!-------  write 'vue' to have a readey template --->
    <h1>Computed watch</h1>
    Name:<input type="text" v-model="nam" />
    <p>Name: {{ changeInput() }}</p>
    <button @click="toggleActive()">Change statues</button>
    <p>show Active: {{ showActive }}</p>
        <p>Has published books:</p>
<span>{{ publishedBooksMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from "./sidebar.vue";
export default {
  name: "computedWatch",
   components: {
    sideBar,
  },
  data() {
    return {
      nam: " ",
      active: 'false',
        author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mysteryxzxzxzx'
        ]
      }
    }
  },
  watch:{
    active(value){
      console.log('is watching value: ' + value)
    }
  },
  computed:{
  showActive(){
            console.log ('showActice');
            return this.active?'active':'not active';

    },
      // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      let size = this.author.books.length;
      return size > 0 ? size : 'Nothing'
    }
  },
  methods: {
    changeInput(){
      console.log ('ChangeInput');
      return this.nam.toUpperCase();
    },
  
    toggleActive(){
      console.log ('toggleActice')
      this.active = !this.active;
    }

  }
};
</script>