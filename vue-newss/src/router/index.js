import { createWebHistory, createRouter } from "vue-router";
import ListView from "../views/ListView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";

const routes = [
    {
        path:'/',
        redirect:'/news',
    },
    {
        name : 'news',
        path: "/news",
        component: ListView,
    },
    {
        name : 'jobs',
        path: "/jobs",
        component: ListView,
    },
    {
        name : 'ask',
        path: "/ask",
        component: ListView,
    },
    {
        name : 'item',
        path: "/item/:id",
        component: ItemView,
    },
    {
        name : 'user',
        path: "/user/:id",
        component: UserView,
    },
];

const router = createRouter({
    mode : 'history',
    history: createWebHistory(),
    routes,
});

export default router;