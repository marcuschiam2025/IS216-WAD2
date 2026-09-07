<script setup>
    import { ref } from 'vue'

    const message = ref('Active Text Danger!')
    const isActive = ref(true)
    const cssProp = ref('text-danger')
    const anotherCssProp = ref('active')

</script>

<template>
    <!-- internal styling -->
    <p v-bind:class="{active: isActive, 'text-danger': isActive}"> {{ message }} </p>
    <h3>Alternatively</h3>
    <p v-bind:class="[cssProp, anotherCssProp]"> {{ message }} </p>
</template>

<style scoped>
    .active {
        font-size: 40px;
    }
    .text-danger{
        color: crimson;
    }
</style>
