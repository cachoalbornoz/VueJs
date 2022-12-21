import { createRouter, createWebHistory } from 'vue-router'
import PostView from '../views/PostsView.vue'
import PostDetailView from '../views/PostDetailView.vue'

const routes = [
  {
    path: '/',
    redirect: 'post'
  },
  {
    path: '/post',
    name: 'post',
    component: PostView
  },
  {
    path: '/post/:id',
    name: 'detail',
    component: PostDetailView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router