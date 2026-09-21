<script setup>
    // naming convention: PascalCase (kebab-case does not work for script setup)
    import ButtonCounter from '../components/ButtonCounter.vue'
    // import button-counter from '../Components/ButtonCounter.vue'
    import { ref } from 'vue' 

    const msg = ref("This is a counter")
</script>

<template>
    <p>{{ msg }}</p>
    <!-- note: take note of component naming convention: kebab case or PascalCase -->
    <!-- <buttoncounter /> --> <!-- this does not work -->
    <ButtonCounter /> <!-- PascalCase -->
    <button-counter /> <!-- kebab-case -->
</template>
