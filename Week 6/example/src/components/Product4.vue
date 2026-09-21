<script setup>
const props = defineProps({ 
                prod: Object
            })
const emit = defineEmits(['enlarge', 'shrink'])

// emit event from a function
function doShrink() {
    // notice the use of object as emitted data
    emit('shrink', { amount: 0.1 })
}
</script>

<template>
   <div class='product'>
        <h3>{{ prod.name }}</h3> 
        <button v-on:click="$emit('enlarge', 0.1)">
            Enlarge text </button>

        <button v-on:click="doShrink">
            Shrink text </button>    

        <div v-html='prod.desc'></div>
    </div>
</template>

<style scoped>
    .product {
        color: green;
    }
</style>
