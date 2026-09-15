<script setup>
import { ref } from 'vue'
const dams = ref([
    { name: 'Nurek Dam', country: 'Tajikistan', electricity: 3200 },
    { name: 'Three Gorges Dam', country: 'China', electricity: 22500 },
    { name: 'Tarbela Dam', country: 'Pakistan', electricity: 3500 },
    { name: 'Guri Dam', country: 'Venezuela', electricity: 10200 },
])
</script>

<template>
    <table class="table table-dark">
        <tbody>
            <tr v-for="dam in dams">
                <td>{{ dam.name }}</td>
                <td>{{ dam.country }}</td>
                <td>{{ dam.electricity }} MegaWatts</td>
            </tr>
        </tbody>

    </table>
</template>
