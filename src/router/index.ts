import { createWebHistory, createRouter } from 'vue-router';
import { useAuthStore } from "../store/auth";

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Login.vue'),
        meta: {
            title: 'BackOffice - Login',
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import("../pages/Home.vue"),
        meta: {
            title: 'BackOffice - Home',
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import("../pages/About.vue"),
        meta: {
            title: 'BackOffice - About',
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import("../pages/Contact.vue"),
        meta: {
            title: 'BackOffice - Contact',
        }
    },
    {
        path: '/services',
        name: 'services',
        component: () => import("../pages/Services.vue"),
        meta: {
            title: 'BackOffice - Services',
        }
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;