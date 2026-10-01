import { createRouter, createWebHistory } from 'vue-router'
import MainMenu from '@/components/MainMenu.vue'
import Q1 from '@/components/q1/Q1.vue'
import Q2 from '@/components/q2/Q2.vue'
import Q3 from '@/components/q3/Q3.vue'
import Q4 from '@/components/q4/Q4.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainMenu
    },
    {
      path: "/q1",
      component: Q1
    },
    {
      path: "/q2",
      component: Q2
    },
    {
      path: '/q3',
      component: Q3
    },
    {
      path: '/q4',
      component: Q4
    }
  ],
})

export default router
