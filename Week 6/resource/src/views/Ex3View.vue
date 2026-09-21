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

async function deletePost(subject) {
  console.log('Subject to delete: ' + subject)
  // TODO: Implement deletePost logic here. Given a subject, send a DELETE request to the server to delete the post with that subject. Update the posts array and status message accordingly.


}
</script>

<template>
  <!-- TODO: make use of the 'BlogPost' component to display the blog posts -->
 

</template>

<style scoped>
.status {
  color: red;
}
</style>
