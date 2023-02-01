import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/products/selected',
      name: 'ProductsSelected',
      component: () => import('../views/ProductsListView.vue')
    },
    {
      path: '/products/buyed',
      name: 'Voucher',
      component: () => import('../views/VoucherView.vue')
    }
  ]
})

export default router
