<script setup>
    
    import { ref } from 'vue'

    const boolean_seen = true

    // this makes boolean_seen variable reactive
    const seen = ref(boolean_seen)

    function toDisplay() {
        var d = new Date();
        if (d.getDay() == 1) {
            return true;
        }
    }

</script>


<template>
    <p v-if="toDisplay()">Today is Monday</p>
    <!-- https://www.w3schools.com/charsets/tryit.asp?deci=128546 -->
    <p v-if="seen">Today is a good day &#128512;</p>
    <p v-else>Not a good day &#128546;</p>
</template>
