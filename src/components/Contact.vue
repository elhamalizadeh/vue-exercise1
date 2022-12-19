<template>
  <div class="container">
    <div class="row">
     <div class="col-md-3">
    <sideBar />
    <div id="reverse-game">
<h4> A Simple Game</h4>
            Enter a text and try to reverse it.
      it is a funny game
      <br/>
      <input type="text" v-model="text" >
      <p>{{ text }}</p>
    <button v-on:click="reverse">Reverse</button>
    <button @click="normal">normal</button>
    </div></div>
    <div class="col-md-8">
                    <h1>Contact Us</h1>
                    <br/>
    <h4> Contact Form</h4>
    <!---------------- form  --------------->
  <form class="row g-3">
     <div class="col-md-6">
    <label for="inputName" class="form-label">Name</label>
    <input type="email" class="form-control" id="inputName" v-model="formData.name">
  </div>

   <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" v-model="formData.email">
  </div>

   <div class="col-md-6">
    <label for="inputTel" class="form-label">Tel</label>
    <input type="number" class="form-control" id="inputTel" v-model="formData.tel">
  </div>
<!---------------------- select option ------------------>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Education</label>
    <select id="inputState" class="form-select" v-model="formData.education">
     <option v-for="education in edus" :key="education">{{ education }}</option>
    </select>
  </div>

  <label for="exampleFormControlTextarea1">Your Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="formData.message"></textarea>

<!------------- checkBox ----------------->
<label><b>Select your service :</b></label>
<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="gridCheck1" v-model="formData.checkbox" value="SEO">
        <label class="form-check-label" for="gridCheck1">
          SEO
        </label>
        </div>
<div class="form-check form-check-inline">
         <input class="form-check-input" type="checkbox" id="gridCheck2" v-model="formData.checkbox" value="webdesign">
        <label class="form-check-label" for="gridCheck2">
          webdesign
        </label>
</div>

<div class="form-check form-check-inline">
         <input class="form-check-input" type="checkbox" id="gridCheck3" v-model="formData.checkbox" value="Google Ads">
        <label class="form-check-label" for="gridCheck3">
          Google Ads
        </label>
</div>

<!----------------------- radio button ------------------->
    <label>Do you want to recieve our latest news?  </label>
 <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" v-model="formData.radio" value="yes" checked>
        <label class="form-check-label" for="gridRadios1">
          Yes
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" v-model="formData.radio" value="no" >
        <label class="form-check-label" for="gridRadios2">
          No
        </label>
      </div>


  <div class="col-12">
    <button type="submit" class="btn btn-primary" @click.prevent="submitForm()">Submit</button>
  </div>
</form>

<!--
      <form>
        <label>Name</label>
        <input type="text" v-model="formData.name"><br/>
         <label>Tel</label>
        <input type="text" v-model="formData.tel" ><br/>
         <label>Email</label>
        <input type="text" v-model="formData.email" ><br/>
        <label>Message</label>
        <textarea v-model="formData.message"></textarea>
<br/>-->
<!---------------- Select option  ------------
<label>your education: </label>
<select v-model="formData.education">
<option v-for="education in edus" :key="education">{{ education }}</option>
  </select>
  <br/>--->
  <!---------------- checkbox  ---------------

        <label><b>Select your service :</b></label>
        <br/>
        <label>SEO</label><input type="checkbox" v-model="formData.checkbox" value="SEO" />
        <label>web design</label><input type="checkbox" v-model="formData.checkbox" value="webdesign" />
        <label>Google Ads</label><input type="checkbox" v-model="formData.checkbox" value="Google Ads" />
<br/>
<br/>--->
  <!---------------- radio button  -------------




<label>yes</label><input type="radio" v-model="formData.radio" value="yes"/>
<label>No</label><input type="radio" v-model="formData.radio" value="no"/>
<br/>
        <button @click.prevent="submitForm()">Submit</button>
      </form>----->
<hr/>
  <!---------------- result ------------------>
      <span>
        result : {{ formData.name }},{{ formData.email }},{{ formData.tel }},{{ formData.message }},{{ formData.checkbox }},{{ formData.radio  }},{{ formData.education}}
      </span>
    </div>
    </div><br/><br/><br/><br/>
  </div>
</template>
<script>
import sideBar from "./sidebar.vue";
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
        email:'',
        checkbox:[],
        radio:'',
        education:[] /// if we want to choose more then one in select option//-- but not work

      }
    };
  },
     components: {
    sideBar,
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
<style scoped>
#reverse-game{
  padding:15px;
  color : blue;
  border : solid 1px rgb(214, 178, 178);
  background-color: whitesmoke;
}
</style>
