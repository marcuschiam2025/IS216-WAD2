<script setup>
import { ref } from 'vue'
import RatingSelector from './RatingSelector.vue'

const rating = ref(0)

function updateRating(value) {
    rating.value = value
}
</script>

<template>
    <h1>IS216 Course Feedback</h1>
    
    <RatingSelector @rating-selected="updateRating" />

    <p>Your rating: {{ rating }}</p>

    <p v-if="rating >= 4">
        Thank you for your positive feedback!
    </p>
    <p v-else>
        We will work to improve the course.
    </p>
</template>