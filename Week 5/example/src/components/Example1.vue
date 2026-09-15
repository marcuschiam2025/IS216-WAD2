<script setup>
import { ref } from 'vue'

const counter = ref(0)
const name = ref('Vue')

function hello(event) {
  alert('Hello ' + name.value + '!')
  // `event` is the native DOM event
  // readily available to Vue
  alert(event.target.tagName + ' event!') // -> button event!
}

function say(message) {
  alert(message)
}
</script>

<template>
  <!-- Listening to Events -->
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>

  <button v-on:click="hello">Say Hello</button>

  <button @click="say('hi')">Say hi</button>
  <button @click="say('what')">Say what</button>
  <br /><br />
  Input something and press 'Enter' to trigger the event:
  <input type="text" v-on:keyup.enter="say('You pressed enter!')" />
</template>

<style scoped></style>
