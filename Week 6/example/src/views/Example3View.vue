<script setup>
    import Product from '../components/Product2.vue'

    import { ref } from 'vue'

    const products = ref([
        { id: 1, name: 'iPhone', desc: '<p>This is the best phone in the world!</p>' }, 
        { id: 2, name: 'Samsung', desc: '<p>No, mine is the best!</p>' }, 
        { id: 3, name: 'Oppo', desc: '<p>Mine is cheaper and yet as good!</p>' } 
    ])  

</script>

<template>
     <!-- for each item in products, instantiate a product component, 
                also passing product parameters-->
        <!-- One way to understand this is that the product-element below is replaced its template -->
    <Product
        v-for="product in products"
        v-bind:key="product.id"
        v-bind:prod="product"
    />
</template>


<style scoped>

</style>
