<!-- Vue Composition API -->
<script setup>
import { ref } from 'vue';

const text = ref("What if I told you Vue can do that");
const limit = ref(50);
</script>

<template>
  <!-- MODIFY YOUR CODE HERE -->

  <textarea rows="5">What if I told you Vue can do that</textarea>
  
  <!-- END OF MODIFYING YOUR CODE HERE -->

  {{ text.length }}
</template>

<style scoped>
.warn {
  background-color: mistyrose;
}
</style>
