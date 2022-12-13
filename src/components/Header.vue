<template>
<div class="container" id="headerPart">
    <h1>Header Part</h1>
    <router-link :to="{name:'Home'}">Home</router-link>
    <router-link :to="{name:'aboutUs'}">aboutUs</router-link>
    <router-link :to="{name:'contact'}">Contact</router-link>
    <router-link :to="{name:'computedWatch'}">computed</router-link>
    <router-link :to="{name:'tranSition'}">transition</router-link>
    </div>
</template>
<script>
export default{
    name: 'HeaderSection'
}
</script>
<style>
#headerPart{
    height:100px;
    background-color: blue;
    color:white;
}
a {
color:white;
text-decoration: none;
margin-left:20px;
}
a.hover{
    color:blueviolet;
}
</style>