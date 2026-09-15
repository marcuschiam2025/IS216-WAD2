<script setup>
import axios from 'axios'
import { ref } from 'vue'
const moods = ref(['Happy', 'Sad', 'Angry'])
const subject = ref('')
const entry = ref('')
const mood = ref('')

// Add Code Here
async function newPost(subject, entry, mood) {
  try {
    const response = await axios.post("http://localhost:8000/posts", {
      subject: subject,
      entry: entry,
      mood: mood
    })
    console.log(response.data)
    
  } catch (error) {
    console.log(error.message)
  }
}
</script>

<template>
  <div class="table m-2">
    <h3>Add a New Blog Post</h3>

    Subject: <input type="text" size="30" v-model="subject" required />
    <br />

    Entry: <br />
    <textarea name="entry" cols="80" rows="5" v-model="entry" required></textarea>
    <br />

    Mood:
    <!-- TODO: Build a dropdown list here for selecting the mood -->
    <br />

    <select id="moods-select" v-model="mood">
      <!-- Placeholder option -->
      <option value="" disabled>Select an option</option>
      
      <!-- Loop through items to create option tags -->
      <option v-for="mo in moods" :key="mo" :value="mo">
        {{ mo }}
      </option>
    </select>
    <br />
    <button v-on:click="newPost(subject,entry,mood)">Submit New Post</button>

    <hr />
    <RouterLink to="/ViewPosts/">Click here to return to Main Page</RouterLink>
  </div>
</template>
