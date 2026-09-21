<script setup>
import { ref } from 'vue'

defineProps({
  level: Number,
})

const soundEmojis = ref(['🔇', '🔈', '🔉', '🔊'])
</script>

<template>
  <!-- TODO: add your template code here -->
  <span>{{ soundEmojis[level] }}</span>
</template>
