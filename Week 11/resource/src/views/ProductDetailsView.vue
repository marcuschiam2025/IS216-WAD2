<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from "vue-router"
import { useProductsStore } from "../stores/products"
const route = useRoute() // give me access to the URL
const router = useRouter()
const productsStore = useProductsStore() // { products, loading, error, fetchProducts }
onMounted( async() => {
    // when this component is mounted, I want to fetch all the products from the product data store
    await productsStore.fetchProducts(); // [ { id, title, price }, {}, {} ]
   // await 
    // await productsStore.products.find( (product) => {
    //     return product.id == Number(route.params.id)
    // } )
} )
// get the product from the products data store that matches the product id given in the query param
const product = computed( () => {
   return productsStore.products.find( (product) => product.id == Number(route.params.id) )
} )
import { useCartStore } from "@/stores/cart"

function goBack(){
    router.push("/products")
}
const cart = useCartStore()
</script>
<template>
    <p v-if="productsStore.loading">Loading products...</p>
    <p v-else-if="productsStore.error" style="color:#b00020;">
      {{ productsStore.error }}
    </p>
    <div v-else>
        <button v-on:click="goBack()"> ← Back</button>
            <h2>{{ product.title }}</h2>
            <p>Price: ${{ product.price.toFixed(2) }}</p>
            <p>Description: ${{ product.description }}</p>
            <button @click="cart.addToCart(product)">Add to cart</button>
    </div>


</template>