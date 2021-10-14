import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Explore from "../views/Expore.vue"

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
