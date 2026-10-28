<script setup>
import { ref, onMounted } from "vue"


import { useProductsStore } from "../stores/products" 
// import { useProductsStore } from "@/stores/products" // this also works
import ProductCard from "../components/ProductCard.vue"


const productsStore = useProductsStore();
console.log(productsStore.products)

onMounted(() => {
  if (productsStore.products.length === 0) {
    productsStore.fetchProducts();
  }
});
</script>

<template>

  <div style="padding:16px;">
    <h2>Products</h2>

    <p v-if="productsStore.loading">Loading products...</p>
    <p v-else-if="productsStore.error" style="color:#b00020;">
      {{ productsStore.error }}
    </p>
    <div v-else class="grid-card">
      <ProductCard
        v-for="p in productsStore.products"
        :key="p.id"
        :product="p"
      />
    </div>

  </div>
</template>

<style scoped>
.grid-card {
  display:grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap:12px;
}
</style>