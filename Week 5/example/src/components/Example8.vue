<script setup>
import { ref, computed } from 'vue'
const numbers = ref([1, 2, 3, 4, 5])
const range = ref(10)

const evenNumbers = computed(() => {
  //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  return numbers.value.filter(function (number) {
    return number % 2 === 0
  })
})
</script>

<template>
  <div id="demo1">
    <span v-for="n in numbers"> {{ n }} &nbsp; </span>
  </div>

  <ul id="demo2">
    <li v-for="n in evenNumbers">{{ n }}</li>
  </ul>

  <div id="demo3">
    <span v-for="n in range"> {{ n }} &nbsp; </span>
  </div>
</template>

<style scoped></style>
