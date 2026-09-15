<script setup>
import { ref } from 'vue'

const pick = ref('')
const a = ref('AAA')
const b = ref('BBB')
const selected = ref('A')
const options = ref([
  { text: 'One', value: 'Joe Biden' },
  { text: 'Two', value: 'Donald Trump' },
  { text: 'Two2', value: 'Donald Trump Junior' },
  { text: 'Three', value: 'Who' },
])
</script>

<template>
  <div id="demo1">
    <!-- bind a vue variable to a Vue property dynamically using radio bottons -->
    <input type="radio" v-model="pick" v-bind:value="a" />A
    <input type="radio" v-model="pick" v-bind:value="b" />B
    <p>Picked: {{ pick }}</p>
  </div>

  <div id="demo2">
    <!-- bind a vue variable to a Vue property dynamically using select -->
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>
    <!-- inline object literal -->
    <!--  <select v-model="selected"> 
                <option v-bind:value="{ number: 123 }">123</option> 
                <option v-bind:value="{ number: 456 }">456</option> 
            </select>
            <p>Selected: {{ selected.number }}</p>
        -->
  </div>
</template>
