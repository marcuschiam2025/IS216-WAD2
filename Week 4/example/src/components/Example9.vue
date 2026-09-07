<script setup>
    import { ref } from 'vue'

    const message = ref('This is inline styling')
    const activeColor = ref('blue')
    const size = ref('50px')

</script>

<template>
    <!-- inline styling -->
    <p v-bind:style="{ 'color': activeColor, 'fontSize': size}"> {{ message }} </p>
   
</template>

<style scoped>
</style>
