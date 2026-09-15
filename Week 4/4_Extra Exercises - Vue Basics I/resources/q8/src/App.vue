<script setup>
import { ref, computed } from 'vue';

// Conversion rates grouped by measurement type
const measurements = ref({
  Length: {
    "Inch2centimetre": 2.54, "Inch2Yard": 0.0277778, "Inch2Mile": 0.000015783,
    "centimetre2Inch": 0.393701, "centimetre2Yard": 0.0109361, "centimetre2Mile": 0.0000062137,
    "Yard2Inch": 36, "Yard2centimetre": 91.44, "Yard2Mile": 0.000568182
  },
  Volume: { "litre2gallon": 0.219969, "gallon2litre": 4.54609 },
  Digital: { "Byte2Bit": 8, "Bit2Byte": 0.125 },
  Mass: {
    "Ounce2Gram": 28.3495, "Ounce2Pound": 0.0625,
    "Gram2Ounce": 0.035274, "Gram2Pound": 0.00220462,
    "Pound2Ounce": 16, "Pound2Gram": 453.592
  }
});

// Reactive input values
const selected_measurement = ref("Length");
const unit1 = ref("Inch");
const unit2 = ref("centimetre");
const val1 = ref(1);

// Returns the conversion object for the currently selected measurement type
const selected_measurement_obj = computed(() =>
  measurements.value[selected_measurement.value]
);

// Extracts all unique units for the selected measurement category
const options = computed(() => {
  const result = [];

  // Get conversion keys (e.g. "Inch2centimetre")
  const keys = Object.keys(selected_measurement_obj.value);

  for (const key of keys) {
    // split each key into units (e.g., "Inch2centimetre" → ["Inch", "centimetre"])
    const units = key.split("2");

    for (const unit of units) {
      // Add unit only if it’s not already included
      if (!result.includes(unit)) {
        result.push(unit);
      }
    }
  }

  return result;
});

// Computes the converted value based on selected units and input value
const val2 = computed(() => {
  const key = unit1.value + "2" + unit2.value; // build key like "Inch2centimetre"
  let conv = 1; // default conversion factor

  // If conversion exists, use it; else use default (1)
  if (key in selected_measurement_obj.value)
    conv = selected_measurement_obj.value[key];
  
  // Perform conversion and round to 6 decimal places (returns a string)
  return (conv * val1.value).toFixed(6);
});
</script>

<template>
  <h4>Convert from One Measurement to Another</h4>
  <select v-model="selected_measurement">
    <option v-for="measurement in Object.keys(measurements)" :key="measurement">
      {{ measurement }}
    </option>
  </select>
  <br><br>

  <input type="number" v-model="val1">
  <select v-model="unit1">
    <option v-for="option in options" :key="option">{{ option }}</option>
  </select><br>

  <input type="number" v-model="val2" disabled>
  <select v-model="unit2">
    <option v-for="option in options" :key="option">{{ option }}</option>
  </select>
</template>

<style scoped>
/* Optional styling can go here */
</style>
