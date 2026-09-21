<script setup>
import { ref, computed } from 'vue'
import SettingPanel from '../components/SettingPanel.vue'

const theme = ref('light')
const fontSize = ref(16)

function applySettings(newSettings) {
  // basic validation (optional but good)
  if (newSettings.theme === 'light' || newSettings.theme === 'dark') {
    theme.value = newSettings.theme
  }
  if (typeof newSettings.fontSize === 'number') {
    fontSize.value = Math.min(24, Math.max(12, newSettings.fontSize))
  }
}

const previewStyle = computed(() => ({
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: fontSize.value + 'px',
  background: theme.value === 'dark' ? '#222' : '#fff',
  color: theme.value === 'dark' ? '#fff' : '#111',
}))
</script>

<template>
  <div style="max-width: 700px; margin: 24px auto; font-family: Arial">
    <h2>Persistent Settings</h2>

    <SettingPanel @settings-changed="applySettings" />

    <h3 style="margin-top: 16px">Preview</h3>
    <div :style="previewStyle">This preview should keep your settings even after refresh.</div>
  </div>
</template>
