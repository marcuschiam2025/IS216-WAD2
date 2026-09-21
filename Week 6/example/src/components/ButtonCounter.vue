<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
    <p>If you like my page, click </p>
    <button @click="count++">Like</button>
    <p>People liked me {{ count }} times.</p>
    <p v-if="count>2"> I am POPU-LAR.</p>
</template>