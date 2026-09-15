<script setup>
import { ref } from 'vue'

const object1 = ref({
  title: 'Foo',
  author: 'Bar',
  isbn: '12233',
})
const object2 = ref({
  title: 'Foo',
  author: 'Bar',
  isbn: '12235',
})
const object3 = ref({
  title: 'Foo',
  author: 'Bar',
  isbn: '12236',
})
</script>

<template>
  <ul id="demo1">
    <li v-for="value in object1">
      {{ value }}
    </li>
  </ul>

  <ul id="demo2">
    <li v-for="(value, name) in object2">{{ name }} : {{ value }}</li>
  </ul>

  <ul id="demo3">
    <!-- Order is important. The first parameter should be the value, followed by name and index. -->
    <li v-for="(value, name, index) in object3">{{ index }}. {{ name }}: {{ value }}</li>
  </ul>
</template>

<style scoped></style>
