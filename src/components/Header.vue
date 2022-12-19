<template>
<div class="" id="headerPart">
    <div class="container" >
    <h1>Header Part</h1>
    <router-link :to="{name:'Home'}" id="alink">Home</router-link>
    <router-link :to="{name:'aboutUs'}" id="alink">aboutUs</router-link>
    <router-link :to="{name:'contact'}" id="alink">Contact</router-link>
    <router-link :to="{name:'computedWatch'}" id="alink">computed</router-link>
    <router-link :to="{name:'tranSition'}" id="alink">transition</router-link>
    <router-link :to="{name:'composableFunction'}" id="alink">composable </router-link>

    <h1 class="text-center">{{ siteTitle }}</h1>
    </div>
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
#alink {
color:white;
text-decoration: none;
margin-left:20px;
}
#alink.hover{
    color:blueviolet;
}
</style>