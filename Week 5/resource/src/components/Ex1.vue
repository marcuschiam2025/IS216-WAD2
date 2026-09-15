<script setup>

import { ref } from 'vue';

const id = ref('circle')


function mOver() {
    // add code here
    id.value = 'square';
    
}

function mOut() {
    // add code here
   id.value = 'circle';
}
</script>

<template>
    <!-- modify code below -->
    <div v-bind:id="id" v-on:mouseover="mOver" v-on:mouseout="mOut">
        Mouse Over Me
    </div>

</template>

<style scoped>
#square {
    width: 150px;
    height: 150px;
    background-color: goldenrod;
    text-align: center;
    padding-top: 60px;
}

#circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: goldenrod;
    text-align: center;
    padding-top: 60px;
}
</style>