import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';
import Orders from './components/Orders.vue';
import Products from './components/Products.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: "/profile/:id",
        component: Profile,
        meta: {
            requieresAuth: true,
        },
    },
    {
        path: '/orders',
        component: Orders
    },
    {
        path: '/products',
        component: Products
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
});

router.beforeEach((to, from) => {
    console.log(to);
    return true;
});

createApp(App).use(router).mount('#app')
