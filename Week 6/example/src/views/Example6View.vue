<script setup>
import Product from '../components/Product4.vue'

import {ref} from 'vue'

const productData = ref([
                    { id: 1, name: 'iPhone', desc: '<p>This is the best phone in the world!</p>' },
                    { id: 2, name: 'Samsung', desc: '<p>No, mine is the best!</p>' },
                    { id: 3, name: 'Oppo', desc: '<p>Mine is cheaper and yet as good!</p>' }
                ])
const fontSize = ref(1)

// methods to handle events emitted from the child component
function onEnlarge(enlargeAmount) {
    fontSize.value += enlargeAmount
}

function onShrink(shrink) {
    fontSize.value -= shrink.amount
}
</script>

<template>
    <div :style="{ 'font-size': fontSize + 'em' }">
        <Product v-for="product in productData" v-bind:key="product.id" v-bind:prod="product"
                v-on:enlarge="onEnlarge" @shrink="onShrink"
        />
    </div>
</template>