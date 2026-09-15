<script setup>
import { ref } from 'vue'

const number = ref(0)
const ok = ref(true)
const id = ref(1)
const message = ref('Hello World')
</script>

<template>
  {{ number + 1 }}
  {{ ok ? 'YES' : 'NO' }}
  {{ message.split('').reverse().join('') }}

  <div :id="`list-${id}`">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptates voluptas? Alias
    libero, temporibus rem odit nemo quisquam consequatur quod debitis veritatis voluptatibus iste
    modi dignissimos omnis soluta maiores esse!
  </div>
</template>

<style scoped>
#list-1 {
  color: red;
}
</style>
