<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref([]) // array of post objects
const newEntry = ref("") // new entry to update the post
const newMood = ref("")
const toUpdate = ref(null) // the post object to update
const status = ref("")

onMounted(async () => {
  await getPosts()
})

async function getPosts() {
  const url = 'http://localhost:8000/posts'
  try {
    const response = await axios.get(url)
    // this gets the data, which is an array, and pass the data to Vue instance's posts property
    console.log(response.data)
    posts.value = response.data
  } catch (error) {
    posts.value = [{ entry: 'There was an error: ' + error.message }]
  }
}


async function updatePost(id, subject) {
  try {
    let url = 'http://localhost:8000/posts/' + id

    const response = await axios.put(url, {
      subject: subject,
      entry: newEntry.value,
      mood: newMood.value
    })

    status.value = "Update Successful"
    console.log(response.data)

    toUpdate.value = null

  } catch (error) {
    status.value = 'There was an error: ' + error.message
    console.log('There was an error: ' + error.message)
  }

  await getPosts() // refresh the posts after update

}
</script>

<template>
  <h2>Blog Posts</h2>
  <p v-if="status!=''">{{ status }}</p>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
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
        <td>{{ post.mood}}
        </td>
        <td>
          <button class="btn btn-danger" v-on:click="toUpdate = post">Update</button>
        </td>
      </tr>
    </tbody>
  </table>

  <div v-if="toUpdate">
    <h3>Update Post {{ toUpdate.id }}</h3>
    <p>Subject: {{ toUpdate.subject }}</p>
    <p>Entry: <input type="text"  v-model="newEntry"></p>
    <p>Mood: 
      <select name="mood" v-model="newMood">
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Angry">Angry</option>
      </select>
    </p>
    <button class="btn btn-danger" v-on:click="updatePost(toUpdate.id, toUpdate.subject)">Update</button>  
  </div>
</template>

<style scoped></style>
