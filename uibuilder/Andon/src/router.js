const Home = httpVueLoader('./components/home/home.vue');

export default {

    routes: [
        {
            path:'/home',
            name:'Home',
            component: Home
        }
    ],
};