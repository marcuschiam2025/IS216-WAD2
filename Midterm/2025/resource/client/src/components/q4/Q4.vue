<script setup>
import axios from 'axios';

function loadData(){
    try{
        axios.get
    }
}
</script>

<template>
    <h1>Study Room Requests</h1>

    <div>
        <label for="nameInput">Your name:</label>
        <input id="nameInput" type="text">

        <label for="slotSelect">Select a slot:</label>
        <select id="slotSelect"></select>

        <button id="createBtn">Create</button>
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
        <tbody id="tbodyRequests">
        </tbody>
    </table>
</template>