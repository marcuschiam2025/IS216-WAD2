<script setup>
import { computed } from "vue"
import CartItemRow from "../components/CartItemRow.vue"
import { useCartStore } from "../stores/cart"
import { useAuthStore } from "../stores/auth"

const cart = useCartStore()
const auth = useAuthStore()

const totalFormatted = computed(() => `$${cart.totalPrice.toFixed(2)}`)


</script>

<template>
  <div style="padding:16px;">
    <h2>Your Cart</h2>

    <p v-if="cart.isEmpty">Cart is empty.</p>

    <div v-else>
      <CartItemRow v-for="i in cart.items" :key="i.productId" :item="i" />

      <p style="margin-top: 12px;">
        <strong>Total:</strong> {{ totalFormatted }}
      </p>

      <button @click="cart.checkout(auth.token)">Checkout</button>
      <button @click="cart.clearCart" style="margin-left: 8px;">Clear Cart</button>
    </div>
  </div>
</template>