import { createRouter,createWebHistory } from "vue-router";
import Home from './components/Home.vue';
import aboutUs from './components/About.vue';
import contact from './components/Contact.vue';

const routes = [{path:"/" , name:"Home", component : Home},
{path:"/about" , name:"aboutUs", component : aboutUs},
{path:"/contact" , name:"contact", component : contact}];
const router = createRouter({
    history : createWebHistory(),
    routes
});
export default router;