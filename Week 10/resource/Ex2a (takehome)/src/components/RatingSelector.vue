<script setup>
import { ref } from 'vue'

const emit = defineEmits(['rating-selected'])
const rating = ref(0)

function selectRating(value) {
    rating.value = value
    emit('rating-selected', value)
}
</script>

<template>
    <div>
        <button @click="selectRating(1)">1</button>
        <button @click="selectRating(2)">2</button>
        <button @click="selectRating(3)">3</button>
        <button @click="selectRating(4)">4</button>
        <button @click="selectRating(5)">5</button>

        <p v-if="rating >= 4">Excellent!</p>
        <p v-else-if="rating >= 2">Good</p>
        <p v-else-if="rating > 0">Poor</p>
    </div>
</template>