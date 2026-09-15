<script setup>
import { ref, computed } from 'vue'

const fName = ref('Mike')
const lName = ref('Jones')

const fullName = computed(() => {
  // derived property
  return fName.value + ' ' + lName.value
})

function getFullName() {
  // method
  return fName.value + ' ' + lName.value
}
</script>

<template>
  <p>First Name: "{{ fName }}"</p>
  <p>Last Name: "{{ lName }}"</p>
  <p>Full Name: "{{ fullName }}"</p>
  <p>Full Name (Method): "{{ getFullName() }}"</p>

  FirstName: <input type="text" v-model="fName"/>
</template>
