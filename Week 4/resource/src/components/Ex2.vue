<script setup>
    import { ref } from 'vue'

    // Add code here
    const width = ref('200')
    const height = ref('200')
    const myImg = ref('/assets/me.png')

    // multiple attribute binding
    const obj = ref({
        width: '200',
        height: '200',
        src: '/assets/me.png'
    })

</script>

<template>

    <!-- Add code here -->
    <!-- : is a short-hand notion of v-bind -->
    <img v-bind:src="myImg" :width="width" :height="height" />

    <img v-bind="obj" />
   
</template>
