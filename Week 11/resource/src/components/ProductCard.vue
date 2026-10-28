<script setup>
import { useCartStore } from "@/stores/cart"

const cart = useCartStore()

defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="box">
    <h3><RouterLink v-bind:to="`/products/${product.id}`"> 
      {{ product.title }}
    </RouterLink></h3>
    <p>Price: ${{ product.price.toFixed(2) }}</p>

    <button @click="cart.addToCart(product)">Add to cart</button>
  </div>
</template>

<style scoped>
.box {
  border:1px solid #ddd; 
  padding:12px; 
  border-radius:8px;
}
</style>