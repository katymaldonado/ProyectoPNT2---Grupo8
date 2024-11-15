import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';
import Orders from './components/Orders.vue';
import Products from './components/Products.vue';
import { provide } from 'vue';

export const productos = [
    { id: 1, nombre: "Tarta de Fresa", precio: 18.99, imagen_url: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/2F1590A2-B145-4323-A044-6F3ABCD1F6BA/Derivates/EB6AF91E-CA26-4441-ACE6-A314A127E053.jpg" },
    { id: 2, nombre: "Pastel de Chocolate", precio: 25.50, imagen_url: "https://www.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2020/03/como-hacer-pastel-de-chocolate-con-cerveza-y-betun.jpg" },
    { id: 3, nombre: "Tiramisu", precio: 22.75, imagen_url: "https://s1.elespanol.com/2023/12/15/cocinillas/recetas/817428853_238446854_1024x576.jpg" },
    { id: 4, nombre: "Cheesecake", precio: 20.00, imagen_url: "https://www.recetasnestle.com.ec/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/7f9ebeaceea909a80306da27f0495c59.jpg?itok=jvnFYyGL" },
    { id: 5, nombre: "Pastel Red Velvet", precio: 30.30, imagen_url: "https://assets.elgourmet.com/wp-content/uploads/2023/03/red-v_TdjgZYvL1S9D3Rt6w7XhHVx8O2JNno-1024x683.png.webp" },
    { id: 6, nombre: "Donuts", precio: 10.99, imagen_url: "https://img.freepik.com/fotos-premium/deliciosas-rosquillas-arreglo-tapa_974629-199749.jpg?w=740" },
    { id: 7, nombre: "Macarons", precio: 15.99, imagen_url: "https://www.pequeocio.com/wp-content/uploads/elementor/thumbs/como-hacer-macarons-franceses-receta-qfujuf7dr200tjxh92pf6syrtqj66iwqkb7inah6xk.jpg" },
    { id: 8, nombre: "Brownies", precio: 12.50, imagen_url: "https://www.inspiredtaste.net/wp-content/uploads/2024/01/Brownies-Recipe-Video.jpg" },
    { id: 9, nombre: "Mousse de Mango", precio: 14.75, imagen_url: "https://www.cocinavital.mx/wp-content/uploads/2017/08/mousse-de-mango-e1563561498875.jpg" },
    { id: 10, nombre: "Pastel de Limón", precio: 16.00, imagen_url: "https://okdiario.com/img/2018/12/14/tarta-de-limon-655x368.jpg" },
    { id: 11, nombre: "Cupcakes", precio: 9.99, imagen_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8s9mwCy4Pndd-2I7ZXiPVSniN9EX9DyZug&s" },
    { id: 12, nombre: "Panna Cotta", precio: 18.50, imagen_url: "https://i.blogs.es/bb86a3/panna_cotta/1366_2000.jpg" }
];


const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/',
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
    },
    ,
    {
        path: '/products/:id',
        component: Products
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes,
    
});

router.beforeEach((to, from) => {
    console.log(to);
    return true;
});


createApp(App).use(router).mount('#app')
