<script setup>
    // ref is Vue's library function used to create reactive variables
    import { ref } from 'vue'

    const name = ref("John")
    const phone = ref(123456)

    console.log(name.value)

    function getPhone() {
        // method doesn't necessarily 'return'
		return "This is my number " + phone.value
    }

</script>

<template>
    <h1> Name : {{ name }} </h1> 
    <h1> Phone : {{ getPhone() }}  </h1>   
    <!-- {{ 'Mr ' + name }} <br>
    One plus two = {{ 1 + 2 }} <br>
    Uppercase: {{ name.toUpperCase() }} <br> -->
</template>

<style scoped>
.greeting {
    color: blue;
}
</style>
