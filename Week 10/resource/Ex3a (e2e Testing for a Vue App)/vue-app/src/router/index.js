import { createRouter, createWebHistory } from 'vue-router'

import Ex2 from '../components/Ex2.vue'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    component: Ex2,
  },
]

const router = createRouter({
  history,
  routes,
})

export default router
