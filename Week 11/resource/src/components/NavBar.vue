<script setup>
import { useCartStore } from "@/stores/cart"
import { useAuthStore } from "@/stores/auth"
import { useRouter } from "vue-router"

const cart = useCartStore()
const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout();
  // When router.push executes, Vue Router changes the browser's current address path to /products and loads the component mapped to that route
  router.push("/products")
}
</script>

<template>
  <nav>
    <strong style="margin-right:auto;">MiniShop</strong>

    <RouterLink to="/products">Products</RouterLink>
    <RouterLink to="/cart">Cart ({{ cart.itemCount }})</RouterLink>

    <span v-if="auth.isLoggedIn">Hello, {{ auth.user.username }}</span>
    <RouterLink v-if="!auth.isLoggedIn" to="/login">Login</RouterLink>
    <button v-else @click="logout">Logout</button>
  </nav>
</template>

<style scoped>
nav {
  display:flex; 
  gap:16px; 
  align-items:center; 
  padding:12px; 
  border-bottom:1px solid #ddd;
}
</style>