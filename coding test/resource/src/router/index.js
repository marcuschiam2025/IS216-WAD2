import { createRouter, createWebHistory } from 'vue-router'

import MainMenuView from '../views/MainMenuView.vue';
import Q1 from '../components/Q1.vue'
import Q2 from '../components/Q2.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    component: MainMenuView
  },
  {
    path: '/Q1/',
    component: Q1
  },
  {
    path: '/Q2/',
    component: Q2
  },
  
  ]
})

export default router
