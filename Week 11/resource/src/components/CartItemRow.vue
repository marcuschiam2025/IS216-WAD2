<script setup>
import { useCartStore } from "@/stores/cart"
const cart = useCartStore()

defineProps({
  item: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div style="display:flex; align-items:center; gap:12px; padding:8px 0; border-bottom:1px solid #eee;">
    <div style="flex:1;">
      <div><strong>{{ item.title }}</strong></div>
      <div style="font-size: 14px;">${{ item.price.toFixed(2) }} each</div>
    </div>

    <button @click="cart.decreaseQty(item.productId)">-</button>
    <span>Qty: {{ item.qty }}</span>
    <button @click="cart.increaseQty(item.productId)">+</button>

    <button @click="cart.removeFromCart(item.productId)">Remove</button>

    <!-- Demo data binding of state property -->
    <!-- <input type="number" v-model="item.qty"> -->
  </div>
</template>