import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/programas',
      name: 'programas',
      component: () => import('../views/programasView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/contactoView.vue')
    },
    {
      path: '/donaciones',
      name: 'donaciones',
      component: () => import('../views/donacionesView.vue')
    },
  ]
})

export default router
