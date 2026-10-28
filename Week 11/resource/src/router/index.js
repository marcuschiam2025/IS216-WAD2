import { createRouter, createWebHistory } from 'vue-router'

import ProductsView from "../views/ProductsView.vue"
import CartView from "../views/CartView.vue"
import LoginView from "../views/LoginView.vue"

import { useAuthStore } from "../stores/auth"

import ProductDetailsView from "../views/ProductDetailsView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductsView },
    { path: "/cart", component: CartView, meta: { requiresAuth: true } },
    { path: "/login", component: LoginView },
    { path: "/products/:id", component: ProductDetailsView }
  ]
})

// Navigation guard (auth)
router.beforeEach((to) => {
  if (!to.meta.requiresAuth) return true

  const auth = useAuthStore();
  if (auth.isLoggedIn) return true

  return { path: "/login", query: { redirect: to.fullPath } }
})


export default router
