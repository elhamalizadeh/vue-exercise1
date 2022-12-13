<template>
  <div class="container">
        <h1>Contact Us</h1>
    <div class="row">
    <div class="col-md-3 bg-primary">
      <h2>Sidebar</h2>
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
    <!---------------- form  --------------->
      <form>
        <label>Name</label>
        <input type="text" v-model="formData.name"><br/>
         <label>Tel</label>
        <input type="text" v-model="formData.tel" ><br/>
         <label>Email</label>
        <input type="text" v-model="formData.email" ><br/>
        <label>Message</label>
        <textarea v-model="formData.message"></textarea>
<br/>
<!---------------- Select option  --------------->
<label>your education: </label>
<select v-model="formData.education">
<option v-for="education in edus" :key="education">{{ education }}</option>
  </select>
  <br/>
  <!---------------- checkbox  ------------------>

        <label><b>Select your service :</b></label>
        <br/>
        <label>SEO</label><input type="checkbox" v-model="formData.checkbox" value="SEO" />
        <label>web design</label><input type="checkbox" v-model="formData.checkbox" value="webdesign" />
        <label>Google Ads</label><input type="checkbox" v-model="formData.checkbox" value="Google Ads" />
<br/>
<br/>
  <!---------------- radio button  ------------------>

<label>Do you want to recieve our latest news?  </label>
<label>yes</label><input type="radio" v-model="formData.radio" value="yes"/>
<label>No</label><input type="radio" v-model="formData.radio" value="no"/>
<br/>
        <button @click.prevent="submitForm()">Submit</button>
      </form>
<hr/>
  <!---------------- result ------------------>
      <span>
        result : {{ formData.name }},{{ formData.tel }},{{ formData.message }},{{ formData.checkbox }},{{ formData.radio  }},{{ formData.education}}
      </span>
    </div>
    </div><br/><br/><br/><br/>
  </div>
</template>
<script>
export default {
  name: "contactUs",
  data() {
    return {
      result: ' ',
      text:'',
      edus:['دکترا','لیسانس','فوق دیپلم','سیکل'],
      formData:{
        name:'',
        message:'',
        checkbox:[],
        radio:'',
        education:[] /// if we want to choose more then one in select option//-- but not work

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
      console.log(this.formData)
      console.log("formData is:" + this.formData.name,this.formData.checkbox)
    }
  },
};
</script>
