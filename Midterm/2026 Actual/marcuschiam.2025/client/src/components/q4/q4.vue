<!--
Name: Marcus Chiam Hao Yi
Email: marcuschiam.2025@computing.smu.edu.sg
-->
<script setup>
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import './q4_readonly.css';

/*
 * Q4: Vue - AXIOS & JSON
 *
 * Edit only this file.
 *
 * Use Axios for all HTTP calls.
 * The backend server is available at:
 *     API_URL = 'http://127.0.0.1:8000/api'
 *
 * The API supports the following HTTP methods:
 *     GET     - retrieve data
 *     POST    - create a new item
 *     PUT     - update an existing item
 *     DELETE  - remove an existing item
 *
 * For PUT and DELETE requests, append the item's id to API_URL.
 *
 * Do not hardcode room names or equipment.
 * The grading data in equipment.json will be different.
 */

const API_URL = 'http://127.0.0.1:8000/api';

const rooms = ref([]);
const equipment = ref([]);
const selectedRoom = ref('');
const newItemName = ref('');

const errorMessage = ref('');
const pendingRemoval = ref(null);

function clearMessages() {
    errorMessage.value = '';
    pendingRemoval.value = null;
}

// Q4a)
async function loadData() {
    // Complete function
    try {
    const response = await axios.get(API_URL,{});
    rooms.value = response.data.rooms;
    equipment.value = response.data.equipment;
    selectedRoom.value = response.data.equipment[0].room;
  } catch (error) {
    console.error(error);
  }
}

// Q4b)
function selectRoom(room) {
    clearMessages();

    // Complete function
    selectedRoom.value = room;
}

// Q4c)
const displayedEquipment = computed(() => {
    // Implement function. Remove placeholder return [] when ready.
    let y = [];
        
    for(const x of equipment.value){
        if (x.room == selectedRoom.value){
            y.push(x)
        }
    }
    return y;
});

// Q4d)
async function updateStatus(item, clickedStatus) {
    clearMessages();

    // Complete function
    axios.put(`${API_URL}/${item.id}`,
        {
            status: clickedStatus,
        }
    )
    .then(response => {
        if (response.status==200)
            item.status = clickedStatus;
    })
    .catch(error => {
        console.log(error.message);
    })
}

// Q4e)
async function addItem() {
    clearMessages();

    // Complete function
    for (const x of equipment.value){
        if(x.room == selectedRoom.value && x.name == newItemName.value){
                errorMessage.value = "Duplicate item already exists in room. Addition is unsuccessful";
                return
        }
    }
    try {
        const response = await axios.post(
        API_URL,
        {
            name: newItemName.value,
            room: selectedRoom.value
        }
        );
        equipment.value.push(response.data.item);
        newItemName.value = '';
    } catch (error) {
        console.log(error);
        
    } finally {
        console.log("Request completed");
    }

    // Error message for unsuccessful addition to item 
    // because duplicate exists.
    // 'Duplicate item already exists in room. Addition is unsuccessful.';

}

// Q4f)
function toggleRemoval(item) {
    // Complete function
    pendingRemoval.value = item
}

// Q4f)
async function confirmRemoval() {
    // Complete function
    try {
    const response = await axios.delete(`${API_URL}/${pendingRemoval.value.id}`);
    console.log(response.data);
    pendingRemoval.value = null;
  } catch (error) {
    console.log(error)
  }
}

// Do not remove the following line
onMounted(loadData);
</script>

<template>
    <div class="q4-page">

        <header class="topbar">
            <div class="brand">FairHub</div>
            <div class="view-title">Equipment Manager View</div>
        </header>

        <main class="manager-layout">

            <section>
                <h2 class="room-heading">Room</h2>

                <div class="room-list" v-for="room in rooms">
                    <!-- Q4b) Complete button code -->
                    <button
                        class="room-btn"
                        @click="selectRoom(room)"
                    > {{ room }}
                    <!-- End Q4b) -->
                    </button>
                </div>
            </section>

            <section>
                <h2 class="equipment-heading">
                    Equipment
                </h2>

                <div class="add-row">
                    <label for="equipmentInput">
                        Name of equipment
                    </label>

                    <input
                        id="equipmentInput"
                        class="equipment-input"
                        type="text"
                        v-model="newItemName"
                    >

                    <button
                        class="add-btn"
                        @click="addItem"
                    >
                        Add
                    </button>
                </div>

                <table class="equipment-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Room</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                            v-for="item in displayedEquipment"
                            :key="item.id"
                        >
                            <!-- Q4c) -->
                             <td>{{ item.name }}</td>
                             <td>{{ item.room }}</td>
                             <td>{{ item.status }}</td>
                            <!-- End Q4c) -->

                            <td>
                                <div class="actions">

                                    <!-- Do NOT modify the following buttons code -->
                                    <button
                                        class="action-btn"
                                        :class="{ 'active-status': item.status === 'Done' }"
                                        @click="updateStatus(item, 'Done')"
                                    >
                                        Done
                                    </button>

                                    <button
                                        class="action-btn"
                                        :class="{ 'active-status': item.status === 'Damaged' }"
                                        @click="updateStatus(item, 'Damaged')"
                                    >
                                        Damaged
                                    </button>

                                    <button
                                        class="action-btn remove-btn"
                                        :class="{ 'pending-remove': pendingRemoval?.id === item.id }"
                                        :disabled="item.status !== 'Pending'"
                                        @click="toggleRemoval(item)"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="message-area">

                    <div
                        v-if="errorMessage"
                        class="error-message"
                    >
                        {{ errorMessage }}
                    </div>

                    <div
                        v-else-if="pendingRemoval"
                        class="confirmation"
                    >
                        <strong>Confirm removal of:</strong>

                        <div class="confirm-line">
                            <!-- Q4f) -->
                            <!-- Display removal confirmation message -->
                            {{ pendingRemoval.name }} from {{ pendingRemoval.room }}?
                            <!-- End Q4f) -->

                            <button
                                class="confirm-btn"
                                @click="confirmRemoval"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    </div>
</template>