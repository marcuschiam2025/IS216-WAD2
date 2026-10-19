<script setup>
import StudentProfile from './StudentProfile.vue'
</script>

<template>
  <!-- change the values for name and score to test. These values will be sent over to StudentProfile as props -->
  <StudentProfile name="Alice" :score="95" />
</template>
