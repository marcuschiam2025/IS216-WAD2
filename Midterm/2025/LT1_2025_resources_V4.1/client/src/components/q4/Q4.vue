<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const API_URL = "http://localhost:8000/api";
const slots = ref([]);
const requests = ref([]);
const newName = ref();
const newSlot = ref();
const loadData = async () => {
  try {
    const response = await axios.get(
      API_URL,{}
    );
    slots.value = response.data.slots;
    requests.value = response.data.requests;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Request completed");
  }
};

function buttonDisabled(reqStatus, btnType) {
    if (reqStatus===btnType)
        return true
    return false
}

function updateStatus(bookingRequest, newStatus) {
    console.log("(updateStatus) Updating request's status");

    axios.post(API_URL,
        {
            action: "update",
            id: Number(bookingRequest.id),
            status: newStatus
        }
    )
    .then(response => {
        if (response.status==200)
            bookingRequest.status = newStatus;
    })
    .catch(error => {
        console.log(error.message);
    })
}

function createRequest() {

    axios.post(API_URL,
        {
            action: "create",
            name: newName.value,
            slot: newSlot.value
        }
    )
    .then(response => {
        if (response.status==200)
            newSlot.value = "";
            newName.value = "";
            loadData();
    })
    .catch(error => {
        console.log(error.message);
    })
}

onMounted(()=> {
    loadData()
})
</script>

<template>
    <h1>Study Room Requests</h1>

    <div>
        <label for="nameInput">Your name:</label>
        <input id="nameInput" type="text" v-model="newName">

        <label for="slotSelect">Select a slot:</label>
        <select id="slotSelect" v-model="newSlot">
            <option v-for="slot in slots">{{ slot }}</option>
        </select>

        <button id="createBtn" @click="createRequest">Create</button>
    </div>
    
    <table border="1" cellpadding="6" cellspacing="0" style="margin-top: 12px;">
        <thead>
            <tr>
                <th>Name</th>
                <th>Slot</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="tbodyRequests" >
            <tr v-for="req in requests" :key="req.id">
                <td>{{ req.name }}</td>
                <td>{{ req.slot }}</td>
                <td>{{ req.status }}</td>
                <td><button :disabled="buttonDisabled(req.status, 'approved')" @click="updateStatus(req, 'approved')">Approve</button>
                    <button :disabled="buttonDisabled(req.status, 'denied')" @click="updateStatus(req, 'denied')">Deny</button></td>
            </tr>
        </tbody>
    </table>
</template>