<script setup>

    import { ref } from 'vue'

    const username = ref('')
   
</script>

<template>
     <h1> The following demonstrates binding text inputs. </h1>
    <!-- Binding to Text Input -->
    Username: <input type="text" name="username" v-model="username">

    <p>Your name is: {{ username }}</p>
</template>
