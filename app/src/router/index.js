import { createRouter, createWebHistory } from 'vue-router'
import $store from '../store/index'

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
            name: 'cart',
            path: '/cart',
            component: () => import('../pages/products/cart.page.vue'),
        },

        {
            name: 'auth1',
            path: '/registration',
            component: () =>
                import('../pages/authorization/registration.page.vue'),
        },

        {
            name: 'auth2',
            path: '/login',
            component: () => import('../pages/authorization/login.page.vue'),
        },

        {
            name: 'product-item',
            path: '/product/:id',
            component: () => import('../pages/products/product.page.vue'),
        },

        {
            name: 'news-item',
            path: '/news/:id',
            component: () => import('../pages/informations/news-item.page.vue'),
        },

        {
            name: '404',
            path: '/:notFound(.*)',
            component: () => import('../pages/404.page.vue'),
        },
    ],
})

router.beforeEach((to, from, next) => {
    if (to.name === 'auth1' || to.name === 'auth2') {
        $store.commit('setCurrentPage', 'auth')
        console.log($store.state.currentPage)
    } else {
        $store.commit('setCurrentPage', to.name)
    }

    next()
})

export default router
