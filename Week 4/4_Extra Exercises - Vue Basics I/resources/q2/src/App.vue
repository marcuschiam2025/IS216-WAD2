<!-- Vue Composition API -->
<script setup>
// Import the ref() function from the Vue library.
import { ref } from 'vue';

// Create a reactive textarea called text with
// the following inital text sentence.
const text = ref("What if I told you Vue can do that");

// Create a reactive variable called limit with the initial
// value of 50 as the maximum number of characters allowed.
const limit = ref(50);
</script>

<template>
  <!-- 
    Textarea bound to "text" using v-model.
    "warn" class is applied when text.length >= 40 is true.
    Max character input is limited by the "limit" value.
  -->
  <textarea v-model="text" :class="{ warn: text.length >= 40 }" :maxlength="limit" rows="5"></textarea>

  <!-- Display current character count -->
  {{ text.length }}
</template>

<style scoped>
/* 
  CSS class to visually warn the user 
  when they are nearing the character limit 
*/
.warn {
  background-color: mistyrose;
}
</style>
