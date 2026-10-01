<!--
Name:
Email:
-->

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import './q4_readonly.css'

const API_URL = 'http://127.0.0.1:8000/api'

const stations = ref([])
const selectedRentStation = ref('')
const selectedReturnStation = ref('')

async function getStations() {
    try {
        const response = await axios.get(API_URL)
        stations.value = response.data
    } catch (error) {
        console.error('Error fetching stations:', error)
    }
}

async function putAction(action, stationId) {
    const data = {
        action: action
    }

    try {
        const response = await axios.put(
            `${API_URL}/${stationId}`,
            data
        )

        alert(response.data.message)
    } catch (error) {
        alert('Error ' + action + 'ing bike')
    }
}

async function rentBike() {
    if (!selectedRentStation.value) {
        alert('Please select a station')
        return
    }

    await putAction('rent', selectedRentStation.value)
    await getStations()
}

async function returnBike() {
    if (!selectedReturnStation.value) {
        alert('Please select a station')
        return
    }

    await putAction('return', selectedReturnStation.value)
    await getStations()
}

onMounted(getStations)
</script>

<template>
    <div class="container">
        <h1>City Bike Share</h1>

        <div id="station-list">
            <div
                v-for="station in stations"
                :key="station.id"
                class="station-item"
            >
                <h3>{{ station.name }}</h3>
                <p>Available Bikes: {{ station.available_bikes }}</p>
                <p>Available Docks: {{ station.available_docks }}</p>
            </div>
        </div>

        <div class="activity-form">
            <div>
                <h2>Rent a Bike</h2>

                <select
                    id="station-select"
                    v-model="selectedRentStation"
                >
                    <option value="">Select a station</option>

                    <option
                        v-for="station in stations"
                        :key="station.id"
                        :value="station.id"
                    >
                        {{ station.name }}
                    </option>
                </select>

                <button
                    id="rent-btn"
                    @click="rentBike"
                >
                    Rent Bike
                </button>
            </div>

            <div>
                <h2>Return a Bike</h2>

                <select
                    id="return-station-select"
                    v-model="selectedReturnStation"
                >
                    <option value="">Select a station</option>

                    <option
                        v-for="station in stations"
                        :key="station.id"
                        :value="station.id"
                    >
                        {{ station.name }}
                    </option>
                </select>

                <button
                    id="return-btn"
                    @click="returnBike"
                >
                    Return Bike
                </button>
            </div>
        </div>
    </div>
</template>