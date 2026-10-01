/* 
TRIAL LAB TEST C 
Name: 
Email: 
*/

<script setup>
import { ref } from 'vue'

const studentName = ref('')
const selectedSize = ref('')

const inventory = ref([
  { size: 'S', stock: 5 },
  { size: 'M', stock: 5 },
  { size: 'L', stock: 5 }
])

const collectionLogs = ref([])

// event handler for Collect button
function collectShirt() {
  if (studentName.value.trim() === '' || !selectedSize.value) return
  
  const target = inventory.value.find(item => item.size === selectedSize.value)
  if (target && target.stock > 0) {
    
    collectionLogs.value.push({
      id: Date.now(),   // unique key, useful for v-for. not displayed in table
      name: studentName.value,
      size: selectedSize.value
    })

    studentName.value = ''
    selectedSize.value = ''
    target.stock--
  }
}
</script>

<template>
  <div>
    <h2>T-Shirt Collection Portal</h2>

    <div>
      <label for="student">Student Name: </label>
      <input 
        id="student"
        type="text" 
        v-model.trim="studentName" 
        placeholder="Enter student name"
      />

      <br><br>

      <label>T-Shirt Size: </label> &nbsp;
      <span v-for="item in inventory" :key="item.size">
        <input 
          type="radio" 
          name="shirtSize" 
          :id="item.size" 
          :value="item.size"
          v-model="selectedSize" 
          :disabled="item.stock ===0"
        />
        <label :for="item.size">
          {{ item.size }} ({{ item.stock }})
        </label>
        &nbsp;
      </span>

      <br><br>

      <button 
        @click="collectShirt" 
        :disabled="studentName.trim() === '' || selectedSize === ''"
      >
        Collect
      </button>
    </div>

    <hr />

    <h3>Collection Records</h3>
    <div v-if="collectionLogs.length >= 1">
      <table border="1" cellpadding="6">
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Size Collected</th>
          </tr>
        </thead>
        <tbody>
          <!-- insert code here to display collectionLog records -->
           <tr v-for="value, index in collectionLogs" :key="value.id">
            <td>{{ index +1 }}</td>
            <td>{{value.name}}</td>
            <td>{{value.size}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      No collection records yet.
    </div>
  </div>
</template>