<template>
  <div class="container">
        <h1>Contact Us</h1>
    <div class="row">
    <div class="col-md-3 bg-primary">
      Enter a text and try to reverse it.
      it is a funny game
    </div>
    <div class="col-md-9">
      <input type="text" v-model="text" >
      <p>{{ text }}</p>
    <button v-on:click="reverse">Reverse</button>
    <button @click="normal">normal</button>
    <hr/>
    <h1> Contact Form</h1>
      <form>
        <label>Name</label>
        <input type="text" v-model="formData.name" ><br/>
         <label>Tel</label>
        <input type="text" v-model="formData.tel" ><br/>
         <label>Email</label>
        <input type="text" v-model="formData.email" ><br/>
        <label>Message</label>
        <textarea v-model="formData.message"></textarea>
<br/>
        <label><b>Select your service :</b></label>
        <br/>
        <label>SEO</label><input type="checkbox" v-model="formData.checkbox" value="SEO" />
        <label>web design</label><input type="checkbox" v-model="formData.checkbox" value="webdesign" />
        <label>Google Ads</label><input type="checkbox" v-model="formData.checkbox" value="Google Ads" />
<br/>
<br/>
<label>Do you want to recieve our latest news?</label>
<label>yes</label><input type="radio" v-model="formData.radio" value="yes"/>
<label>No</label><input type="radio" v-model="formData.radio" value="no"/>
<br/>
        <button @click.prevent="submitForm()">Submit</button>
      </form>
<hr/>
      <span>
        result : {{ formData.name }},{{ formData.tel }},{{ formData.message }},{{ formData.checkbox }},{{ formData.radio  }}
      </span>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contactUs",
  data() {
    return {
      result: ' ',
      text:'',
      formData:{
        name:'',
        message:'',
        checkbox:[],
        radio:''

      }
    };
  },
  methods: {
    reverse() {
      this.text = this.text.split('').reverse().join('');
    },
    normal(){
       this.text = this.text.split('').reverse().join('');
    },
    submitForm(){
      //console.log(this.name,this.tel,this.email,this.checkbox);
      console.log(this.formData)
      console.log("formData is:" + this.formData.name,this.formData.checkbox)
    }
  },
};
</script>
