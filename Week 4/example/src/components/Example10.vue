<script setup>
import { useRoute } from 'vue-router'

// 1. Initialize the route hook 
const route = useRoute() 

// 2. Read the parameter (Note: route params are always strings) 
const username = route.params.name


</script>

<template>
  <h1 class=greeting>Hello {{ username }}</h1>
</template>

<style scoped>
    .greeting {
        color: blue;
    }
</style>
