<script setup>
import { ref } from 'vue'

const parentMessage = ref('Parent')
const items1 = ref(['a', 'b', 'c'])
const items2 = ref([{ message: 'Foo' }, { message: 'Bar' }])
const items3 = ref([{ message: 'Foo' }, { message: 'Bar' }])
</script>

<template>
  <h1>The following demonstrates rendering an array with v-for.</h1>
  <ul id="demo1">
    <li v-for="(item, idx) in items1">{{ idx }} - {{ item }}</li>
  </ul>

  <h1>The following demonstrates rendering an array of objects with v-for.</h1>
  <ul id="demo2">
    <li v-for="item in items2">
      {{ item.message }}
    </li>
  </ul>

  <h1>The following demonstrates rendering an array with v-for and the optinal index argument.</h1>
  <ul id="demo3">
    <li v-for="(item, index) in items3">
      <!-- Inside v-for blocks we have full access to parent scope properties. -->
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
  </ul>
</template>
