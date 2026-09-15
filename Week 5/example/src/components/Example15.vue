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

async function deletePost(id, subject) {
    console.log("Subject to delete: " + subject)
    let idx = 0
    for (let post of posts.value) {
        if (post.subject == subject) {
            posts.value.splice(idx,1) // remove this element
            console.log(posts.value)
            break
        }
        idx++
    }
    
    try {
        let url = 'http://localhost:8000/posts/' + id
        
        // Payload must be inside the 'data' property
        const response = await axios.delete(url, { data: { subject: subject } })

        console.log(response.data)
       
    } catch(error) {
        console.log('There was an error: ' + error.message)
    }

}
</script>

<template>
  <h2>Blog Posts</h2>
  <table class="table">
    <thead>
      <tr>
        <td>ID</td>
        <th>Subject</th>
        <th>Entry</th>
        <th>Mood</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts">
        <td>{{  post.id }}</td>
        <td>{{ post.subject }}</td>
        <td>{{ post.entry }}</td>
        <td>{{ post.mood }}</td>
        <td>
          <button class="btn btn-danger" v-on:click="deletePost(post.id, post.subject)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
