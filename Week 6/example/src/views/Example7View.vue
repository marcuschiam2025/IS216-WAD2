<script setup>
import { ref, onMounted } from "vue"

const STORAGE_KEY = "draft_note"
const note = ref("")

// const obj = {user: 'jack'}

// localStorage.setItem("complex_data", JSON.stringify(obj))
// const data = localStorage.getItem("complex_data")
// console.log(data)

// Load saved note when component mounts
onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved !== null) {
    note.value = saved
  }
})

// Save current note to localStorage (called manually)
function saveDraft() {
  localStorage.setItem(STORAGE_KEY, note.value)
}

function clearDraft() {
  note.value = "";
  localStorage.removeItem(STORAGE_KEY)
}
</script>

<template>
  <div>
    <h2>Persistent Draft Note</h2>

    <p>
      Type something, refresh the page, and your note will still be here.
    </p>

    <textarea
      v-model="note"
      @input="saveDraft"
      rows="6"
      placeholder="Write your note..."
    ></textarea>

    <div>
      <button @click="clearDraft">Clear Draft</button> 
    </div>

    <hr/>

    <h3>Preview</h3>
    <p style="white-space: pre-wrap;">{{ note }}</p>
  </div>
</template>

<style scoped>
textarea {
    width: 100%; 
    padding: 10px; 
    box-sizing: border-box;
}
</style>