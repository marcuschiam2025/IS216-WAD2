import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/q1' },
  { path: '/q1', component: () => import('./components/q1/Q1.vue') },
  { path: '/q2', component: () => import('./components/q2/Q2.vue') },
  { path: '/q3', component: () => import('./components/q3/Q3.vue') },
  { path: '/q4', component: () => import('./components/q4/Q4.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
