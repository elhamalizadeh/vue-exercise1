import { createRouter,createWebHistory } from "vue-router";
import Home from './components/Home.vue';
import aboutUs from './components/About.vue'
const routes = [{path:"/" , name:"Home", component : Home},
{path:"/about" , name:"aboutUs", component : aboutUs}];
const router = createRouter({
    history : createWebHistory(),
    routes
});
export default router;