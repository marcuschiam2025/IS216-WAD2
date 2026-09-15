<script setup>
import { ref, computed } from 'vue'

const isActive = ref(true)
const error = ref(true)
const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value,
}))
</script>

<template>
  <div :class="classObject">Example 6</div>
</template>

<style scoped>
.active {
  background-color: lightgray;
}

.text-danger {
  color: red;
}
</style>
