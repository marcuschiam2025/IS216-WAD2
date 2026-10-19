<!-- StudentGrade.vue 
StudentGrade component is the child component of StudentProfile.

    receives score via props
                ↓
    calculates letter grade
                ↓
    render the letter grade in red (fail)or green (pass)
-->

<script setup>
import { computed } from 'vue'

const props = defineProps({
  score: Number,
})

const letterGrade = computed(() => {
  if (props.score >= 80) return 'A'
  if (props.score >= 70) return 'B'
  if (props.score >= 60) return 'C'
  return 'F'
})

const gradeColor = computed(() => {
  return letterGrade.value === 'F' ? 'red' : 'green'
})
</script>

<template>
  <div :style="{ color: gradeColor }">Grade: {{ letterGrade }}</div>
</template>
