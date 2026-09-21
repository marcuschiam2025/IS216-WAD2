<script setup>
import { ref, onMounted } from 'vue'

// TODO: Add Code Here to define the props and the emits for the SettingPanel component
const STORAGE_KEY = 'settings'

const theme = ref('light')
const fontSize = ref(16)

const emit = defineEmits(['settings-changed'])

// TODO: Implement the methods for the SettingPanel component
// TODO: Implement the helper method(s) as needed
function loadSettings() {
  // Add code here
}

function saveSettings() {
  // Add code here
}

function resetSettings() {
  // Add code here
}

onMounted(() => {
  loadSettings()
})
</script>

<template>
  <div
    style="
      display: flex;
      gap: 16px;
      align-items: center;
      flex-wrap: wrap;
      padding: 12px;
      border: 1px solid #eee;
      border-radius: 8px;
    "
  >
    <label>
      Theme:
      <select v-model="theme" @change="saveSettings">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>

    <label>
      Font size:
      <input
        type="number"
        v-model.number="fontSize"
        min="12"
        max="24"
        style="width: 80px"
        @input="saveSettings"
      />
    </label>

    <button @click="resetSettings">Reset</button>
  </div>
</template>
