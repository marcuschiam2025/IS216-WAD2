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

function addLog(newLog) {
    for (const log of newLog) {
        logs.value.push(log)
    }
}

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

    if (logs.value.length > maxLogs - 3) {
        errorMsg.value = 'Clear some logs before proceeding'
        return
    }

    bulbColor.value = bulbColor.value === 'yellow' ? 'white' : 'yellow'
    errorMsg.value = ''

    delayButton()

    if (bulbColor.value === 'yellow') {
        addLog(['User interacts.', 'ON.', 'Bulb lights up.'])
    } else {
        addLog(['User interacts.', 'OFF.', 'Bulb turns off.'])
    }
}

function delayButton() {
    toggleDisabled.value = true

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
