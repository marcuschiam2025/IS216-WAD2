<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const allSlots = ref([])
const allRequests = ref([])
const requestorName = ref("")
const selectedSlot = ref("")

function loadData() {
    console.log("(loadData) Loading data from API");

    axios.get("http://localhost:8000/api")
    .then(response => {

        // YOUR CODE GOES HERE
        allSlots.value = response.data.slots;
        allRequests.value = response.data.requests;
        console.log(allSlots);
        console.log(allRequests);


    
    })
    .catch(error => {
        console.log(error.message);
        alert("Failed to load data.");
    })
}


/* Part D */
function updateStatus(bookingRequest, newStatus) {
    console.log("(updateStatus) Updating request's status");

    axios.post("http://localhost:8000/api",
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


/* Part E */
function createRequest() {
    console.log("(createRequest) Sending a new request to API");

    // YOUR CODE GOES HERE
    let nameInput = requestorName.value;
    let slotInput = selectedSlot.value;

    axios.post("http://localhost:8000/api",
        {
            action: "create",
            name: nameInput,
            slot: slotInput
        }
    )
    .then(response => {
        console.log(response.data);
        const newRequest = response.data.request;
        allRequests.value.unshift(newRequest);
        requestorName.value = "";
        selectedSlot.value = allSlots.value[0];
    })
    .catch(err => {
        console.log(err)
        if (err.response && err.response.data && err.response.data.message) {
            alert(err.response.data.message);
        } else {
            alert("Failed to create request.");
        }
    });

}

onMounted(()=> {
    loadData()
})

function buttonDisabled(reqStatus, btnType) {
    if (reqStatus===btnType)
        return true
    return false
}

</script>

<template>
    <h1>Study Room Requests</h1>

    <div>
        <label for="nameInput">Your name:</label>
        <input id="nameInput" type="text" v-model="requestorName">

        <label for="slotSelect">Select a slot:</label>
        <select id="slotSelect" v-model="selectedSlot">
            <option v-for="slot in allSlots">
                {{  slot }}
            </option>
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
        <tbody>
            <tr v-for="request in allRequests">
                <td>{{ request.name }}</td>
                <td>{{ request.slot }}</td>
                <td>{{ request.status }}</td>
                <td><button :disabled="buttonDisabled(request.status, 'approved')" @click="updateStatus(request, 'approved')">Approve</button>
                    <button :disabled="buttonDisabled(request.status, 'denied')" @click="updateStatus(request, 'denied')">Deny</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
h1 {
    margin-bottom: 1em;
}
div {
    display: flex;
    gap: 1em;
}
button {
    margin-right: 1em;
    padding: 2px;
}
</style>