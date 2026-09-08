<script setup>
// to write JavaScript stuff -- to make pages dynamic, ineractive

//import stuff
import { ref } from 'vue'
// what is 'ref'?
// ref make data reactive
// ref return an object that is reactive, whose value = "Vue is awesome"
const title = ref('Vue is awesome');
const w = ref('50px')

const selectedFruit = ref('');


const tasks = ref([
  { id: 1, title: 'Review Vue reactivity', category: 'Web Development', priority: 'high', estimate: 40, status: false, color: 'white' },
  { id: 2, title: 'Complete routing exercise', category: 'Assignments', priority: 'medium', estimate: 30, status: true, color: '#000000' },
  { id: 3, title: 'Read component patterns', category: 'Reading', priority: 'low', estimate: 20, status: false, color: '#F0B35A' }
])

</script>

<template>
    <!--to write HTML stuff -- to build the content and the structure of the page -->
    <!-- data binding for text content via interpolation {{  }} -->

    <h1> {{ title }}</h1>

    <!-- data binding using v-bind to bind HTML attribute -->
     <img src="../assets/logo.svg" v-bind:width="w" v-bind:height="w" alt="">

    <!-- two way binding using v-model for getting user inputs -->
    set the image width: <input type="text" v-model="w">

    <!-- Select Fruit:
    <select v-model="selectedFruit">
        <option v-for="fruit in fruits">{{ fruit }}</option>
    </select>

    <p>you selected {{ selectedFruit }}</p> -->
    <!-- 1st arg refer to the item/element in the array
     2nd arg refer to the index of the array -->
    <div v-for="(task,idx) in tasks" v-bind:class="{'done':task.status, 'notdone': !task.status}"
     v-bind:style=" { 'color':task.color, 'border': '2px solid orange' } ">

        <h2>Task {{ idx+1 }}: {{task.title}}</h2>
        <p>priority: {{ task.priority }}</p>
        <p>duration: {{ task.estimate }}</p>

        <button v-on:click="task.status = true">Done!</button>
        <button v-on:click="task.status = false">Not Done!</button>
    </div>


</template>


<style scoped>
/* to write CSS stuff */

h1{
    color: gold;
}
.done {
    background-color: green;
}
.notdone{
    background-color: red;
}

</style>








