import { createRouter, createWebHistory } from 'vue-router'

import MainMenu from '../components/MainMenu.vue'
import Ex2 from '../components/Ex2.vue'
import StudentName from '../components/StudentName.vue'
import StudentGrade from '../components/StudentGrade.vue'
import StudentProfile from '../components/StudentProfile.vue'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    component: MainMenu,
  },
  {
    path: '/Ex2',
    component: Ex2,
  },
  {
    path: '/StudentName/',
    component: StudentName,
  },
  {
    path: '/StudentGrade/',
    component: StudentGrade,
  },
  {
    path: '/StudentProfile/',
    component: StudentProfile,
  },
]

const router = createRouter({
  history,
  routes,
})

export default router
