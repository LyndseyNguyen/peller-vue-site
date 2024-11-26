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
            path: '/productDetails',
            name: 'productDetails',
            component: () => import('./components/product/ProductDetails.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./components/product/contactUs.vue'),
        },
        {
            path: '/productPhoto',
            name: 'productPhoto',
            component: () => import('./components/product/ProductPhotos.vue'),
        },
    ]
})

export default router