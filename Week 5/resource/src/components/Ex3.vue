<script setup>
import { ref, computed } from 'vue'

const x = ref(0)
const y = ref(0)
const operators = ref(["+", "-", "*", "/", "%"])
const selectedOp = ref("+")

// TODO: Add Code Here
// Note: DO NOT USE "eval()". In security, "eval" is considered "evil"!!!
const result = computed(()=> {
    if ({selectedOp} == '+'){
        result.value = x+y;
    }
})
    
</script>

<template>
    <p>x <input v-model.number="x"></p>
    <select v-model="selectedOp">
        <option v-for="op in operators">{{ op }}</option>
    </select>
    <p>y <input v-model.number="y"></p>

    <p>---------------------</p>

    <p>= {{ result }}</p>
</template>

<style scoped>
p,
input {
    font-family: monospace;
}

p {
    white-space: pre;
}
</style>
