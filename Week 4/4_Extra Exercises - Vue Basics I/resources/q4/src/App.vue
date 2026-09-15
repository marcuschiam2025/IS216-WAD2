<!-- Vue Composition API -->
<script setup>
import { ref } from 'vue';

// Path to the image file
const img = ref("/img/kitten.png");

// Initial background color of the box
const color = ref("Black");
</script>

<template>
  <!-- Color picker input bound to "color" -->
  Select background color: <input type="color" v-model="color">

  <!-- Box container with dynamic background color based on selected color -->
  <div class="box m-2 p-4" :style="{ 'background-color': color }">
    <!-- Image displayed inside the box, using the path from "img" -->
    <img class="img-fluid" :src="img">
  </div>
</template>

<style scoped>
/* Styling for the box: fixed width */
.box {
  width: 310px;
}
</style>
