import { createRouter,createWebHistory } from "vue-router";
import Home from './components/Home.vue';
import aboutUs from './components/About.vue';
import contact from './components/Contact.vue';
import computedWatch from './components/computed.vue';
import tranSition from './components/transition.vue';
import composableFunction from './components/composable.vue';

const routes = [{path:"/" , name:"Home", component : Home},
{path:"/about" , name:"aboutUs", component : aboutUs},
{path:"/contact" , name:"contact", component : contact},
{path:"/computed" , name:"computedWatch", component : computedWatch},
{path:"/transition" , name:"tranSition", component : tranSition},
{path:"/composable" , name:"composableFunction", component : composableFunction}];
const router = createRouter({
    history : createWebHistory(),
    routes
});
export default router;