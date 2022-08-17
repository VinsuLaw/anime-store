import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'main',
            path: '/',
            alias: '/home',
            component: () => import('../pages/main.page.vue'),
        },

        {
            name: 'manga',
            path: '/manga',
            component: () => import('../pages/products/manga.page.vue'),
        },

        {
            name: '404',
            path: '/:notFound(.*)',
            component: () => import('../pages/404.page.vue'),
        },
    ],
})

export default router
