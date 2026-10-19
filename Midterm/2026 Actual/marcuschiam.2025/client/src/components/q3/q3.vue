<!--
Name: Marcus Chiam Hao Yi
Email: marcuschiam.2025@computing.smu.edu.sg
-->
<script setup>
import { ref, computed } from 'vue'
import workshopData from './data.js'
const showEnrolment = ref();
const searchNew = ref('')
const workshopDetail = ref([]);
workshopDetail.value = workshopDetail

const search = computed(() => {
  if(searchNew.value == ''){
    workshopDetail.value = workshopDetail
    return
  }  
  workshopDetail.value = [];
  for (x in workshopData){
    if (searchNew.value.toLocaleLowerCase() in x.name){
        workshopDetail.value.add(x)
        }
    }
    return 
})



</script>
<template>
    <div class="container">
        <div class="app">
            <header class="app-header">
                <h1>FairHub Workshop Finder</h1>
                <p>Search and browse available workshops</p>
            </header>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Search by name or track ..." v-model="searchNew"> 
        </div>
        <div class="workshop-grid">
            <div class="workshop-card" v-for="value in workshopData" :key="value.id">
                <h3>{{value.name}}</h3>
                <p>Track: {{ value.track }}</p>
                <p>Level: {{ value.level }}</p>
                <p>Date: {{ value.date }}</p>
                <p v-if="showEnrolment">Enrolment: {{ value.enrolled }}/{{ value.capacity }}</p>
            </div>
        </div>
        <div>
            <input type="checkbox" id="showEnrolment" v-model="showEnrolment">
            <label for="showEnrolment">Show enrolment details</label>
        </div>
    </div>
</template>

<style scoped>
.app {
    max-width: 960px;
    margin: 0 auto;
    padding: 24px;
    font-family: sans-serif;
    font-size: 1em;
}

.app-header {
    background-color: #1a3c5e;
    color: white;
    padding: 24px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.app-header h1 {
    margin: 0 0 4px;
}

.app-header p {
    margin: 0;
    opacity: 0.8;
}

.search-bar {
    margin-bottom: 20px;
}

.search-bar input {
    width: 100%;
    padding: 10px 14px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-sizing: border-box;
}

.workshop-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
}

.workshop-card {
    background: #fff;
    border: 1px solid #d6e4f0;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

.workshop-card h3 {
    color: #1a3c5e;
    margin: 0 0 8px;
}

.workshop-card p {
    margin: 4px 0;
    font-size: 0.9em;
    color: #555;
}

.no-results {
    text-align: left;
    color: #888;
    font-size: 1.1em;
}

.lowEnrolment {
    background-color: #f3f3d1;
    font-style: italic;
}
</style>