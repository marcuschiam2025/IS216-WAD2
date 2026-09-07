<script setup>
    
    import { ref } from 'vue'

    const msg = ref("Hello World")

</script>

<template>
  <h1 class=greeting>{{ msg }}</h1>
</template>

<style scoped>
    .greeting {
        color: red;
    }
</style>
