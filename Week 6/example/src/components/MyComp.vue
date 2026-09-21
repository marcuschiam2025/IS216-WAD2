<script>
    export default {
        data() {
            return {
                value: 0
            }
        },
        emits: ['change'],
        methods: {
            modify(incremenet) {
                let oldValue = this.value
                this.value += incremenet
                this.$emit('change', {old:oldValue, new: this.value})
            }
        }
    }
</script>
<template>
    {{ value }}
    <button @click="modify(1)">+</button>
    <button @click="modify(-1)">-</button>
</template>