<!--
Name:
Email:
-->

<script setup>
import { ref } from 'vue'
import './q3_readonly.css'

const logs = ref([])
const maxLogs = 10
const errorMsg = ref('')
const bulbColor = ref('white')
const toggleDisabled = ref(false)

// Part C
function addLog(newLog) {
    logs.value.push(newLog[0])
    logs.value.push(newLog[1])
    logs.value.push(newLog[2])
}

// Part E
function halveLogs() {
    const logsToRemove = Math.floor(logs.value.length / 2)

    if (logsToRemove > 0) {
        logs.value.splice(0, logsToRemove)
        errorMsg.value = ''
    } else {
        errorMsg.value = 'Not enough logs to remove'
    }
}

function changeColor() {
    if (toggleDisabled.value) {
        return
    }

    // Part D: Debug the condition below.
    if (logs.value.length >= maxLogs-1) {
        errorMsg.value = 'Clear some logs before proceeding'
        return
    }

    // Part A
    // Add code here to toggle bulbColor between 'white' and 'yellow'.
    if (bulbColor.value == "white"){
        bulbColor.value = "yellow"
    }
    else{
        bulbColor.value = "white"
    }

    // Part F
    // Add code here to clear any existing error message.
    errorMsg.value = ""

    delayButton()

    if (bulbColor.value === 'yellow') {
        addLog(['User interacts.', 'ON.', 'Bulb lights up.'])
    } else {
        addLog(['User interacts.', 'OFF.', 'Bulb turns off.'])
    }
}

// Part B
function delayButton() {
    toggleDisabled.value = !toggleDisabled.value
    setTimeout(() => {
        toggleDisabled.value = false
    }, 1000)
}
</script>

<template>
    <div class="container">
        <div id="colorBox">
            <svg class="lightbulb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <ellipse
                    id="bulb"
                    class="bulb"
                    cx="32"
                    cy="18"
                    rx="25"
                    ry="30"
                    :style="{ fill: bulbColor }"
                />
                <rect class="base" x="24" y="48" width="16" height="10"/>
                <rect class="base" x="22" y="56" width="20" height="10"/>
            </svg>

            <button
                id="toggleButton"
                :disabled="toggleDisabled"
                @click="changeColor"
            >
                Toggle bulb
            </button>
        </div>

        <div id="textBox">
            <h2>Logs</h2>

            <ol id="logs">
                <li
                    v-for="(log, index) in logs"
                    :key="index"
                >
                    {{ log }}
                </li>
            </ol>

            <button
                id="halveLogButton"
                @click="halveLogs"
            >
                Clear half of logs
            </button>

            <div id="errorMsg">{{ errorMsg }}</div>
        </div>
    </div>
</template>
