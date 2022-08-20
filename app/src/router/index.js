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
            name: 'ranobe',
            path: '/ranobe',
            component: () => import('../pages/products/ranobe.page.vue'),
        },

        {
            name: 'figures',
            path: '/figures',
            component: () => import('../pages/products/figures.page.vue'),
        },

        {
            name: 'news',
            path: '/info/news',
            component: () => import('../pages/informations/news.page.vue'),
        },

        {
            name: 'payment',
            path: '/info/payment',
            component: () => import('../pages/informations/payment.page.vue'),
        },

        {
            name: 'refund',
            path: '/info/refund',
            component: () => import('../pages/informations/refund.page.vue'),
        },

        {
            name: 'faq',
            path: '/info/faq',
            component: () => import('../pages/informations/faq.page.vue'),
        },

        {
            name: 'contacts',
            path: '/info/contacts',
            component: () => import('../pages/informations/contacts.page.vue'),
        },

        {
            name: 'about',
            path: '/info/about',
            component: () => import('../pages/informations/about.page.vue'),
        },

        {
            name: '404',
            path: '/:notFound(.*)',
            component: () => import('../pages/404.page.vue'),
        },
    ],
})

export default router
