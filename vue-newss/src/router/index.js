import { createWebHistory, createRouter } from "vue-router";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import NewsView from "../views/NewsView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";

const routes = [
    {
        path:'/',
        redirect:'/news',
    },
    {
        path: "/news",
        component: NewsView,
    },
    {
        path: "/jobs",
        component: JobsView,
    },
    {
        path: "/ask",
        component: AskView,
    },
    {
        path: "/item",
        component: ItemView,
    },
    {
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