<script setup>
import { ref, computed } from 'vue';

// Reactive input values
const num = ref(0);
const selected = ref("*");

// Return a single line of repeated symbols (e.g., "***")
const patternOne = computed(() =>
  selected.value.repeat(num.value)
);

// Return a pyramid pattern (e.g., "*<br>**<br>***<br>")
const patternTwo = computed(() => {
  let result = "";

  // Build each row of the pyramid
  for (let i = 1; i <= num.value; i++) {
    result += selected.value.repeat(i) + "<br>"; // Each row grows by one symbol
  }

  return result;
});
</script>

<template>
  <div>
    <!-- User input for number of symbols -->
    Num: <input type="number" v-model="num" min="0"><br><br>

    <!-- Radio buttons for symbol selection -->
    Select Symbol:
    Stars: <input name="symbol" type="radio" v-model="selected" value="*">
    Dollars: <input name="symbol" type="radio" v-model="selected" value="$">
    <br><br>
    <!-- Display pattern 1 result -->
    <h6>Pattern One</h6>
    {{ patternOne }}

    <br><br>
    <!-- Display pattern 2 result -->
    <h6>Pattern Two</h6>
    <div v-html="patternTwo"></div>
  </div>
</template>

<style scoped>
/* Optional styling can go here */
</style>
