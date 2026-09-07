import { createRouter, createWebHistory } from 'vue-router'

import MainMenu from '../components/MainMenu.vue';
import Example1 from '../components/Example1.vue';
import Example2 from '../components/Example2.vue';
import Example3 from '../components/Example3.vue';
import Example4 from '../components/Example4.vue';
import Example5 from '../components/Example5.vue';
import Example6 from '../components/Example6.vue';
import Example7 from '../components/Example7.vue';
import Example8 from '../components/Example8.vue';
import Example9 from '../components/Example9.vue';
import Example10 from '../components/Example10.vue';
import Example11 from '../components/Example11.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    component: MainMenu
  },
  {
    path: '/invalid',
    redirect: "/Example1"
  },

  {
    path: '/Example1/',
    component: Example1
  },

  {
    path: '/Example2/',
    component: Example2
  },
  {
    path: '/Example3/',
    component: Example3
  },
  {
    path: '/Example4/',
    component: Example4
  },
  {
    path: '/Example5/',
    component: Example5
  },
  {
    path: '/Example6/',
    component: Example6
  },
  {
    path: '/Example7/',
    component: Example7
  },
  {
    path: '/Example8/',
    component: Example8
  },
  {
    path: '/Example9/',
    component: Example9
  },
  {
    path: '/Example10/:name',
    component: Example10
  },
   {
    path: '/Example11/',
    component: Example11
  }
],
})

export default router
