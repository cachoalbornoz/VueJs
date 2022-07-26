import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About')
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: () => import('../views/Editar')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
