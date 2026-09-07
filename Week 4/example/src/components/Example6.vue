<script setup>
    import { ref } from 'vue'

    const isChecked = ref(false)

    const isButtonDisabled = ref(false)
</script>

<template>
    <h1>The following demonstrates v-bind with Boolean attribute.</h1>

    Remember Me? <input type="checkbox" name="rememberme" checked>
   
    Remember Me? <input type="checkbox" name="rememberme" v-bind:checked="isChecked">

    <button :disabled="isButtonDisabled">Log In</button>

</template>
