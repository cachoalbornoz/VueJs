import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import FirebaseView from '../views/FirebaseView.vue'
import SocialAuthView from '../views/SocialAuthView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/firebase',
    name: 'firebase',
    component: FirebaseView
  },
  {
    path: '/social',
    name: 'social',
    component: SocialAuthView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
