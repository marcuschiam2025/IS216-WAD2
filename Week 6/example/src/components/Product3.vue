<script setup>
const props = defineProps({ 
                prod: Object
            })

// Quote https://v3.vuejs.org/guide/component-custom-events.html#defining-custom-events
// It is recommended to define all emitted events in order to 
// better document how a component should work.
const emit = defineEmits(['enlarge', 'shrink'])

// emit event from a function
function doShrink() {
    emit('shrink')
}
</script>

<template>
    <div class='product'>
        <h3>{{ prod.name }}</h3>
        <!-- emit event inline-->
        <button v-on:click="$emit('enlarge')">
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
