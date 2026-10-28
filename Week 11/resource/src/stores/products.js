import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from "pinia";

export const useProductsStore = defineStore('products', () => {
  // state properties
  const products = ref([]) // array of product
  const loading = ref(false) 
  const error = ref(null)

  // action
  async function fetchProducts() {
    loading.value = true
    error.value = null

    try {
        const response = await axios.get("http://localhost:8000/products");
        products.value = response.data;
    } catch (e) {
      error.value = "Failed to load products";
      console.error(e.message)
    } finally {
      loading.value = false;
    }
  }
  
  return { products, loading, error, fetchProducts }
})