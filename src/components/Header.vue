<template>
<div class="" id="headerPart">
    <h1>Header Part</h1>
    <router-link :to="{name:'Home'}">Home</router-link>
    <router-link :to="{name:'aboutUs'}">aboutUs</router-link>
    <router-link :to="{name:'contact'}">Contact</router-link>
    <router-link :to="{name:'computedWatch'}">computed</router-link>
    <router-link :to="{name:'tranSition'}">transition</router-link>

    <h1>{{ siteTitle }}</h1>
    </div>
</template>
<script>
export default{
    name: 'HeaderSection',
    props: [
        'siteTitle'
    ]
}
</script>
<style>
#headerPart{
    height:200px;
    background-color: blue;
    color:white;
    margin-bottom: 50px;
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