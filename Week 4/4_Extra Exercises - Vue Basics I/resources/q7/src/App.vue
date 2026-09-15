<script setup>
import { ref, computed } from 'vue';

// Exchange rates relative to 1 SGD
const exchange_rates = ref({
        "United States Dollar": 0.72, "Euro": 0.63, "Pound sterling": 0.57,
        "Swiss Francs": 0.67, "Swedish Krona": 6.43, "Phiippine Peso": 35.62,
        "Malaysian Ringgit": 3.25, "Indonesian Rupiah": 10615.06, "Ether": 0.0030,
        "Bitcoin": 0.000077, "Vietnamese dong": 16748.37, "Myanmar Kyat": 1003.84
      });

// Reactive input values
const sing_dollar = ref(1);
const selected_currency = ref("United States Dollar");

// Return an array of available currency names from the exchange_rates object
const currencies = computed(() =>
  Object.keys(exchange_rates.value)
);

// Calculates the converted amount based on selected currency and SGD input (Part B) 
const converted_amt = computed(() => {
  const rate = exchange_rates.value[selected_currency.value];
  return rate * sing_dollar.value;
});
</script>

<template>
  <h3>Convert SGD to Other Currency</h3>
  <div class="p-2">
    <!-- Input for amount in Singapore Dollars -->
    Singapore Dollar: <input type="number" v-model="sing_dollar" min="0">
  </div>

  <div class="p-2">
    <!-- Dropdown to select target currency -->
    <select v-model="selected_currency">
      <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
    </select>

    <!-- Display converted amount formatted to 6 decimal places -->
    {{ converted_amt.toFixed(6) }}
  </div>
</template>

<style scoped>
/* Optional styling can go here */
</style>
