import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Home.vue'

import { useUserStore } from '../store/user'

const requireAuth = async(to, from, next) => {

  const userStore = useUserStore()

  userStore.loadingSession = true

  const user = await userStore.currentUser()

  if(user){
    next()
  }else{
    next('/login')
  }

  userStore.loadingSession = false

}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/', name: 'home', component: Home, beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ]
})

export default router