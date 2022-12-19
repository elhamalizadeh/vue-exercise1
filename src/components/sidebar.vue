<template>
   <div class="bg-info text-white" id="sidebar">
    <h3>SideBar</h3>
          <router-link to="./computed" id="sidebar-link">computed</router-link> 
          <router-link to="./composable" id="sidebar-link">composable</router-link>
          <router-link to="./transition" id="sidebar-link">transition</router-link>
        </div>
</template>

<script>
export default {
name: 'sideBar'
}
</script>

<style>
#sidebar{
    padding: 20px;
    height:700px;
    font-weight: 500;
}
#sidebar-link {
  color: white;
  text-decoration: none;
  display: block;
}
#sidebar-link:hover {
  color: blue;
}
</style>