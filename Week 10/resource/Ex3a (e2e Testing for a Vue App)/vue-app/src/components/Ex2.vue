<script setup>
import { ref } from 'vue'
import StudentProfile from './StudentProfile.vue'

const name = ref('')
const score = ref('')
const submitted = ref(false)

function submitForm() {
    submitted.value = true
}
</script>

<template>
    <h1>Student Profile</h1>

    <form @submit.prevent="submitForm">
        <div>
            <label for="name">Name:</label>
            <input
                id="name"
                v-model="name"
                type="text"
                required
            >
        </div>

        <br>

        <div>
            <label for="score">Score:</label>
            <input
                id="score"
                v-model.number="score"
                type="number"
                min="0"
                max="100"
                required
            >
        </div>

        <br>

        <button type="submit">Submit</button>
    </form>

    <StudentProfile
        v-if="submitted"
        :name="name"
        :score="score"
    />
</template>