import { createRouter, createWebHistory } from 'vue-router'

import MainMenuView from '../views/MainMenuView.vue'
import Ex1View from '../views/Ex1View.vue'
import Ex2View from '../views/Ex2View.vue'
import Ex3View from '../views/Ex3View.vue'
import Ex4View from '../views/Ex4View.vue'
import Ex5View from '../views/Ex5View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainMenuView,
    },
    {
      path: '/Ex1/',
      component: Ex1View,
    },
    {
      path: '/Ex2/',
      component: Ex2View,
    },
    {
      path: '/Ex3/',
      component: Ex3View,
    },
    {
      path: '/Ex4/',
      component: Ex4View,
    },
    {
      path: '/Ex5/',
      component: Ex5View,
    },
  ],
})

export default router
