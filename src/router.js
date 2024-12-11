import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('./components/Home.vue'),
        },
        {
            path: '/category',
            name: 'category',
            component: () => import('./components/product/ProductCategory.vue'),
        },
        {
            path: '/product-details/:id',
            name: 'productDetails',
            component: () => import('./components/product/ProductDetails.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./components/product/contactUs.vue'),
        },
        {
            path: '/zoom',
            name: 'zoom',
            component: () => import('./components/product/zoomPhoto.vue'),
        },
    ]
})

export default router