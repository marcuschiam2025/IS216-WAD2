<script setup>
import BlogPost from '../components/BlogPost.vue'
import axios from 'axios'

import { ref, onMounted } from 'vue'

const posts = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/getPosts')
    // this gets the data, which is an array
    posts.value = response.data
    console.log(response.data)
  } catch (error) {
    posts.value = [{ entry: 'There was an error: ' + error.message }]
  }
})
</script>

<template>
  <!-- TODO: make use of the 'BlogPost' component to display the blog posts -->


</template>
