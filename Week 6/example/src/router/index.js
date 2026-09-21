import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MainMenuView from '../views/MainMenuView.vue';
import Example1View from '../views/Example1View.vue';
import Example2View from '../views/Example2View.vue';
import Example3View from '../views/Example3View.vue';
import Example4View from '../views/Example4View.vue';
import Example5View from '../views/Example5View.vue';
import Example6View from '../views/Example6View.vue';
import Example7View from '../views/Example7View.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    component: MainMenuView
  },
  {
    path: '/Home',
    component: HomeView
  },
  {
    path: '/Example1/',
    component: Example1View
  },
  {
    path: '/Example2/',
    component: Example2View
  },
  {
    path: '/Example3/',
    component: Example3View
  },
  {
    path: '/Example4/',
    component: Example4View
  },
  {
    path: '/Example5/',
    component: Example5View
  },
  {
    path: '/Example6/',
    component: Example6View
  },
  {
    path: '/Example7/',
    component: Example7View
  }
],
})

export default router
