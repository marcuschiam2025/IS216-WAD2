<script setup>
    import { ref } from 'vue'

    // Add code here
    // challenge: use array  
    const message = ref('Choose your favorite fruit:')
    const fruit1 = ref('apple')
    const fruit2 = ref('orange')
    const fruit3 = ref('peach')
    const fruits = ref(['apple','orange','peach'])
    const user = {name: 'jack', email: 'mail@mail.com', age:10,martial:true}
</script>

<template>
    {{ message }} 
    <label v-for="fruit in fruits">
        {{ fruit }}
        <input type="checkbox"/>

    </label>
    <br>
    <label v-for="(index,key,index) in user">
        {{ key }} : {{ index }}<br>
    </label>
   
    <!-- <label for=""> <input type="radio" name="fruit"> {{ fruit1 }} </label> 
    <label for=""> <input type="radio" name="fruit"> {{ fruit2 }} </label> 
    <label for=""><input type="radio" name="fruit"> {{ fruit3 }} </label>  -->

</template>

<style scoped>
</style>
