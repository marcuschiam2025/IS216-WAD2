<!-- StudentProfile.vue
StudentProfile component is the parent component of StudentName and StudentGrade.

    receives name and score via props
                ↓
    passes props to both children
                ↓
    children render the data
-->

<script setup>
import StudentName from './StudentName.vue'
import StudentGrade from './StudentGrade.vue'

defineProps({
  name: String,
  score: Number,
})
</script>

<template>
  <div>
    <StudentName :name="name" />
    <StudentGrade :score="score" />
  </div>
</template>
