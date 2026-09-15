<script setup>
import axios from 'axios'
import { ref } from 'vue'

const advice = ref('Let Axios get an advice for you!')

async function getAdvice() {
  const url = 'https://api.adviceslip.com/advice'
  try {
    const response = await axios.get(url)
    console.log(response.data)

    advice.value = response.data.slip.advice
  } catch (error) {
    console.log(error.message)
    advice.value = error.message
  }
}
</script>

<template>
  <div>
    <p id="axios">{{ advice }}</p>
    <button type="button" @click="getAdvice">Click Me!</button>
  </div>
</template>
