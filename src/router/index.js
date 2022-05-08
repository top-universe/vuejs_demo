import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
