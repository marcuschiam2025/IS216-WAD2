<script setup>
import axios from 'axios'
import { ref } from 'vue'

const weatherData = ref('')
const temperature = ref('')
const status = ref('Ready to fetch weather data')

async function getData() {
  const url = 'https://api.openweathermap.org/data/2.5/weather'
  const query = 'Singapore,sg'
  const key = '8d6f21e5351582a8051551f99ef3fa88'

  // Show that we're starting the request
  console.log('Request initiated at:', new Date().toLocaleTimeString())

  try {
    // Make the asynchronous request with await
    const response = await axios.get(url, {
      params: {
        q: query,
        APPID: key,
        units: 'metric',
      },
    })

    console.log('Response received at:', new Date().toLocaleTimeString())

    weatherData.value = response.data.weather[0].description
    temperature.value = response.data.main.temp
    // Update status
    status.value = 'Data received successfully!'
  } catch (error) {
    console.log('Error occurred at:', new Date().toLocaleTimeString())
    status.value = 'Error fetching data!'
    weatherData.value = error.message
  }
}
</script>

<template>
  <div>
    <p id="status">{{ status }}</p>
    <div id="weather">
      <div class="weather-line">
        Current weather in Singapore: <strong>{{ weatherData }}</strong>
      </div>
      <div class="weather-line">
        Temperature: <strong>{{ temperature }}°C</strong>
      </div>
    </div>
    <button type="button" @click="getData">Get Weather Data</button>
  </div>
</template>

<style scoped>
#status {
  color: blue;
  font-weight: bold;
  margin: 10px 0;
}

#weather {
  color: green;
  margin: 10px 0;
}

.interrupt {
  color: red;
}

.weather-line {
  margin-bottom: 5px;
}
</style>
