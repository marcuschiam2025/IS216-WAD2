<!-- StudentName.vue
StudentName component is the child component of StudentProfile.

    receives name via props
                ↓
    renders the name
-->

<script setup>
defineProps({
  name: String,
})
</script>

<template>
  <h2>{{ name }}</h2>
</template>
