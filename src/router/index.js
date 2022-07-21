import HomeViewVue from '@/views/HomeView.vue'
import LoginVue from '@/views/LoginPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeViewVue
  },
  {
    path: '/login',
    name: 'login',
    component: LoginVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
