<script setup>
const props = defineProps({ 
                prod: Object
            })
console.log(props.prod.name)
</script>


<template>
    <h3> {{ prod.id }} : {{ prod.name }} </h3>
    <div v-html='prod.desc'></div>
</template>

<style scoped>

</style>
