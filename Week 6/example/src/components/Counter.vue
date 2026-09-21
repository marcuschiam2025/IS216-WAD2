<script setup>
import {ref} from 'vue'

const count = ref(3)
</script>

<script>
    export default {
        data() {
            return { 
                count: 3
            }
        },
        props: ['value']
    }
</script>


<template>
<span>
    <button v-on:click="count++">Click</button>
    {{count+1}}:<slot></slot>:{{value}}
</span>
</template>