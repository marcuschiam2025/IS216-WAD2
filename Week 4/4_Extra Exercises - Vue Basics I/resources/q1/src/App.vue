<!-- Vue Composition API -->
<script setup>
// Import the ref() function from the Vue library.
import { ref } from 'vue';

// ref() is used to create a reactive variable 
// called showSolution with an inital value of false.
const showSolution = ref(false);
</script>

<template>
  <!-- Display a series of descriptive sentences -->
  <p>They call me fruit.</p>
  <p>They call me fish.</p>
  <p>They call me insect.</p>
  <p>But actually I'm not one of those.</p>

  <!-- Final sentence with conditional rendering -->
  <p>
    I am a
    <!-- Show the word "Dragon" if showSolution is true -->
    <span id="dragon" v-if="showSolution">Dragon</span>

    <!-- Otherwise, show a ? button that reveals the word when clicked -->
    <button v-else @click="showSolution = true">?</button>
  </p>
</template>

<style scoped>
/* Optional: Add styles for #dragon or the button here */
</style>
