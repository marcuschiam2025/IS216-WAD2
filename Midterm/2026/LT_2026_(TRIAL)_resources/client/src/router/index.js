import { createRouter, createWebHistory } from 'vue-router'
import menu from "../components/menu.vue"
import q1 from "../components/q1/q1.vue"
import q2 from "../components/q2/q2.vue"
import q3 from "../components/q3/q3.vue"
import q4 from "../components/q4/q4.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: menu
    },
    {
      path: "/q1",
      component: q1
    },
    {
      path: "/q2",
      component: q2
    },
    {
      path: "/q3",
      component: q3
    },
    {
      path: "/q4",
      component: q4
    }
  ],
})

export default router
