<script setup>
import { ref } from 'vue'

const message = ref('Hello')
const checked = ref('')
const selectedFruits = ref([]) // can also set an initial value like ['Apple', 'Banana']
const picked = ref('') // can also set an initial value like 'two'
const selected = ref('') // can also set an initial value like 'B'
</script>

<template>
  <h1>The following demonstrates binding text inputs.</h1>
  <!-- Binding to Text Input -->
  <div id="demo1">
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
  </div>

  <h1>The following demonstrates binding multiline text inputs.</h1>
  <!-- Multiline Text-->
  <div id="demo2">
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <br />

    <textarea v-model="message" placeholder="add multiple lines"> </textarea>
  </div>

  <h1>The following demonstrates binding checkbox inputs.</h1>
  <div id="demo3">
    <!-- check boxes -->
    <!-- Single checkbox, boolean value:  -->
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">Checked? {{ checked }}</label>
    <br />
    <!-- Multiple checkboxes, bound to the same Array: -->
    <input type="checkbox" name="fruits" value="Apple" v-model="selectedFruits" /> Apple
    <input type="checkbox" name="fruits" value="Orange" v-model="selectedFruits" /> Orange
    <input type="checkbox" name="fruits" value="Banana" v-model="selectedFruits" /> Banana

    <p>You selected {{ selectedFruits }}</p>
  </div>

  <h1>The following demonstrates binding radio button inputs.</h1>
  <!-- radio buttons-->
  <div id="demo4">
    <input type="radio" id="none" name="num" v-model="picked" />
    <label for="none">None</label>
    <br />
    <input type="radio" id="one" name="num" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" name="num" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <span>You picked: {{ picked }}</span>
  </div>

  <h1>The following demonstrates dropdown list inputs.</h1>
  <!-- select -->
  <div id="demo5">
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<style scoped></style>
