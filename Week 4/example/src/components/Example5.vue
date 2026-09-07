<script setup>
    import { ref } from 'vue'
    /*
        Place and import images to your Vue component using one of the two methods below
    
    */
    import wad from '/assets/wad.png' // Method A -> public/assets/ folder

    const me = ref('/src/assets/me.png') // Method B -> src/assets/ folder

    const x = ref(200)
</script>


<template>
    <h1>The following demonstrates v-bind and handling image assets.</h1>
    <div id="demo">
        <img v-bind:src="wad"><hr>
        <img v-bind:src="me"><hr>
      
        <img src="../assets/me.png" :width="x">
    </div>
</template>
