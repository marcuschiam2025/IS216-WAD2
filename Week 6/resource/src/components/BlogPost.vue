<script setup>
import { computed } from 'vue'

// TODO: Define the props for the BlogPost component
const props = defineProps({
  subject: String,
  entry: String,
  mood: String,
})
console.log(props.mood)


</script>

<template>
  <!-- TODO: modify your template code here -->
  <div class="card mx-auto" style="width: 24rem">
    <img src="/src/assets/Angry.png" class="card-img-top" alt="Image cap" />
    <div class="card-body">
      <h5 class="card-title">Subject </h5>
      <p class="card-text"> Entry </p>
      <hr size="10" noshade />
      <br />
    </div>
  </div>
</template>
