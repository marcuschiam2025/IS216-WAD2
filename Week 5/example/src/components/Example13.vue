<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref([]) // array of post objects

onMounted(async () => {
  const url = 'http://localhost:8000/posts'
  try {
    const response = await axios.get(url)
    // this gets the data, which is an array, and pass the data to Vue instance's posts property
    console.log(response.data)
    posts.value = response.data
  } catch (error) {
    posts.value = [{ entry: 'There was an error: ' + error.message }]
  }
})
</script>

<template>
  <h2>Blog Posts</h2>
  <table class="table">
    <thead>
      <tr>
        <th>Subject</th>
        <th>Entry</th>
        <th>Mood</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts">
        <td>{{ post.subject }}</td>
        <td>{{ post.entry }}</td>
        <td>{{ post.mood }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
