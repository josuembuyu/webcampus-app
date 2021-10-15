import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Explore from "../views/Expore.vue"
import Course from "../views/Course.vue"
import CourseList from "../views/CourseList.vue"
import WorkList from "../views/WorkList.vue"
import BookList from "../views/BookList.vue"
import Videos from "../views/Videos.vue"

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
  },
  {
    path: '/course/:id',
    name: 'Course',
    component: Course
  },
  {
    path: '/courses',
    name: 'CourseList',
    component: CourseList
  },
  {
    path: '/works',
    name: 'WorkList',
    component: WorkList
  },
  {
    path: '/books',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
