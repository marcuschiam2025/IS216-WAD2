import { createRouter, createWebHistory } from 'vue-router'

import MainMenu from '../components/MainMenu.vue'
import Example1 from '../components/Example1.vue'
import Example2 from '../components/Example2.vue'
import Example3 from '../components/Example3.vue'
import Example4 from '../components/Example4.vue'
import Example5 from '../components/Example5.vue'
import Example6 from '../components/Example6.vue'
import Example7 from '../components/Example7.vue'
import Example8 from '../components/Example8.vue'
import Example9 from '../components/Example9.vue'
import Example10 from '../components/Example10.vue'
import Example11 from '../components/Example11.vue'
import Example12 from '../components/Example12.vue'
import Example13 from '../components/Example13.vue'
import Example14 from '../components/Example14.vue'
import Example15 from '../components/Example15.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainMenu,
    },

    {
      path: '/Example1/',
      component: Example1,
    },

    {
      path: '/Example2/',
      component: Example2,
    },
    {
      path: '/Example3/',
      component: Example3,
    },
    {
      path: '/Example4/',
      component: Example4,
    },
    {
      path: '/Example5/',
      component: Example5,
    },
    {
      path: '/Example6/',
      component: Example6,
    },
    {
      path: '/Example7/',
      component: Example7,
    },
    {
      path: '/Example8/',
      component: Example8,
    },
    {
      path: '/Example9/',
      component: Example9,
    },
    {
      path: '/Example10/',
      component: Example10,
    },
    {
      path: '/Example11/',
      component: Example11,
    },
    {
      path: '/Example12/',
      component: Example12,
    },
    {
      path: '/Example13/',
      component: Example13,
    },
    {
      path: '/Example14/',
      component: Example14,
    },
    {
      path: '/Example15/',
      component: Example15,
    },
  ],
})

export default router
