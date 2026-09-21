<script setup>
    import AlertBox from '../components/AlertBox.vue'
    import Book from '../components/Book.vue'

    import { ref } from 'vue'

    const title = ref('VueJS in Action')
    const author = ref('Erik Hanchett')

</script>

<template>
    <AlertBox>This is a cool book—check it out!</AlertBox>

    <Book>
        <template v-slot:author>
            <h3>{{author}}</h3>
        </template>
        <template v-slot:title>
            <h3>{{title}}</h3>
        </template>
    </Book>
</template>

